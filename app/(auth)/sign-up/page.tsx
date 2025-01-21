"use client";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { signInSchema, signupSchema } from "@/lib/validation";
import React from "react";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signupSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
  />
);
export default Page;
