"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <Button
      onClick={async () => {
        try {
          const sign = await signIn();
          console.log("sign", sign);
        } catch (error) {
          console.log("nop");
          console.log(error);
        }
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
