import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { authOptions } from "@/lib/authOptions";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    // const user = await User.findOne({ email: session.user.email }).select("-password");
    const user = await User.findOne({ email: session.user.email })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Fetch user error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
