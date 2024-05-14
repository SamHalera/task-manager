"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      onClick={async () => {
        try {
          await signOut();
        } catch (error) {
          console.log("nop");
          console.log(error);
        }
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
