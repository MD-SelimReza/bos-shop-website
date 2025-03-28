import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

// Type for incoming data
type UpdateProfilePayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  location?: string;
  image?: string;
};

// PATCH endpoint
export async function PATCH(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Get the incoming data
    const data: UpdateProfilePayload = await req.json();

    // console.log("Incoming update data:", data);

    const session = await getServerSession(authOptions);

    // ⚠️ For demo purposes only!
    // You should get the user's ID from the session or token
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Find the user by their ID and update the profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone || "",
        location: data.location || "",
        image: data.image || "",
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Success
    return NextResponse.json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    // console.error("Error updating profile:", error);

    if (error instanceof Error) {
        return NextResponse.json(
            { message: "Failed to update profile", error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { message: "Failed to update profile", error: "An unknown error occurred." },
        { status: 500 }
    );
  }
}
