import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Connect to the database
    await connectDB();

    // 2. Get the data from the request body
    const { first_name, last_name, email, password, phone, image, location } = await req.json();

    // 3. Basic field validation
    if (!first_name || !last_name || !email || !password) {
      return NextResponse.json(
        { error: "First name, last name, email, and password are required." },
        { status: 400 }
      );
    }

    // 4. Normalize email to lowercase to prevent duplicates with casing differences
    const normalizedEmail = email.toLowerCase();

    // 5. Check if the user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists." }, { status: 400 });
    }

    // 6. Hash the password (using async for better performance)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 7. Create a new user document
    const newUser = new User({
      first_name,
      last_name,
      email: normalizedEmail,
      phone: phone || "",
      image: image || "",
      location: location || "",
      password: hashedPassword,
    });

    // 8. Save the user to the database
    await newUser.save();

    // 9. Return success response
    return NextResponse.json({ message: "User created successfully." }, { status: 201 });

  } catch (error) {
    if (error instanceof Error) {
      console.error("Signup Error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  } 
}
