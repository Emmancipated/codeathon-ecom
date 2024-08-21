"use client";
import { supabase } from "../../services";
import Image from "next/image";
import emptyCart from "@/public/assets/images/SideImage.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthError } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const router = useRouter();

  const [errMessage, setErrMessage] = useState<AuthError>();
  const [successMessage, setSuccessMessage] = useState("");

  // const handleResetPassword = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.resetPasswordForEmail(
  //       formData.email,
  //       {
  //         redirectTo: `${window.location.host}/auth/new-password`,
  //       }
  //     );

  //     console.log(data);

  //     if (error) {
  //       setErrMessage(error);
  //     } else {
  //       console.log(error);

  //       setSuccessMessage("Successful");
  //     }
  //   } finally {
  //     setTimeout(() => {
  //       setErrMessage(undefined);
  //       setSuccessMessage("");
  //     }, 4000);
  //   }
  // };

  const handleResetPassword = async () => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        formData.email,
        {
          redirectTo: `${window.location.origin}/auth/new-password`,
        }
      );

      if (error) {
        setErrMessage(error); // Use error.message to get the error string
      } else {
        setSuccessMessage("Password reset email sent successfully!");
      }
    } finally {
      setTimeout(() => {
        setErrMessage(undefined);
        setSuccessMessage("");
      }, 4000);
    }
  };

  const handleInput = (input: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type, name } = input.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className=" relative">
      <div className=" flex items-center my-12">
        <div>
          <Image src={emptyCart} alt="cart" />
        </div>
        <div className=" px-24">
          <div>
            <h2 className=" text-4xl font-medium text-black mb-6">
              Forgot Password?
            </h2>
            <h3 className=" text-base font-normal text-black mb-2">
              Enter your email below
            </h3>
            <input
              type="email"
              name="email"
              id="email"
              className=" text-black w-full py-3 placeholder:text-[#00000062] outline-none border-b border-b-[rgba(0,0,0,0.4)] mb-6"
              placeholder="Email"
              onChange={handleInput}
            />
            <button
              className=" bg-[#DB4444] text-[#FAFAFA] font-medium text-base py-4 px-12 rounded mt-10 w-full"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
      {successMessage && (
        <div className=" bg-green-500 py-2 px-4 absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto text-white rounded">
          successful
        </div>
      )}

      {errMessage && (
        <div className=" bg-red-600 py-2 px-4 absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto text-white rounded">
          {errMessage && errMessage.message}
        </div>
      )}
    </div>
  );
}
