import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import jwt from "jsonwebtoken";

// This route is used to set a JWT cookie after the user is authenticated (session exists).
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Create JWT manually from session data
  const token = jwt.sign(
    {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  const response = NextResponse.json({ message: "Authenticated!", token });

  // Set cookie in response
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
