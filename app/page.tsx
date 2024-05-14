import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";
import User from "@/components/user/User";
import { authConfig } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authConfig);
  if (!session) {
    return redirect("/sign-up");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User />
    </main>
  );
}
