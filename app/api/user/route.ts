import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import SHA256 from "crypto-js/sha256";
import encBase64 from "crypto-js/enc-base64";
import uid2 from "uid2";
export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();
    console.log(email);

    //check if mail exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const salt = uid2(16);
    const hash = SHA256(password + salt).toString(encBase64);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hash,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
