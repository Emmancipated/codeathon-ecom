"use client";
import { supabase } from "../../services";
import Image from "next/image";
import emptyCart from "@/public/assets/images/SideImage.png";
import Link from "next/link";
import { useState } from "react";
import { AuthError } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const [errMessage, setErrMessage] = useState<AuthError>();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignIn = async () => {
    const loginCredentials = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const { data, error } = await supabase.auth.signInWithPassword(
        loginCredentials
      );
      console.log(data);

      if (error) {
        setErrMessage(error);
      } else {
        setSuccessMessage("Successful");
        router.push("/");
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
              Log in to Exclusive
            </h2>
            <h3 className=" text-base font-normal text-black mb-2">
              Enter your details below
            </h3>
            <input
              type="email"
              name="email"
              id="email"
              className=" text-black w-full py-3 placeholder:text-[#00000062] outline-none border-b border-b-[rgba(0,0,0,0.4)] mb-6"
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              id="password"
              className=" text-black w-full py-3 placeholder:text-[#00000062] outline-none border-b border-b-[rgba(0,0,0,0.4)]"
              placeholder="Password"
              onChange={handleInput}
            />
            <div className=" mt-10 flex items-center justify-between">
              <button
                className=" bg-[#DB4444] text-[#FAFAFA] font-medium text-base py-4 px-12 rounded"
                onClick={handleSignIn}
              >
                Log In
              </button>
              <Link href={"/auth/forgot-password"} className=" text-[#DB4444]">
                Forgot Password?
              </Link>
            </div>
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
