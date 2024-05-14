import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import LogoutButton from "../auth/LogoutButton";

const User = async () => {
  const session = await getServerSession(authConfig);
  if (!session?.user) {
    return;
  }
  return (
    <div>
      <Avatar>
        <AvatarImage src={session.user?.image ?? ""} />
      </Avatar>
      <span>{session.user.name}</span>
      <LogoutButton />
    </div>
  );
};

export default User;
