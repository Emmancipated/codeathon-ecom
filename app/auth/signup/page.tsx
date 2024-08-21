"use client";
import { supabase } from "../../services";
import Image from "next/image";
import emptyCart from "@/public/assets/images/SideImage.png";
import Link from "next/link";
import { useState } from "react";
import googleIcon from "@/public/assets/svgs/googleIcon.svg";
import { AuthError } from "@supabase/supabase-js";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState<AuthError>();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async () => {
    // event.preventDefault();
    const signUpCredentials = {
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.name,
          created_at: Date.now(),
        },
      },
    };
    try {
      const { data, error } = await supabase.auth.signUp(signUpCredentials);
      console.log(data);

      if (error) {
        setErrMessage(error);
      } else {
        setSuccessMessage("Successful");
      }
    } finally {
      setTimeout(() => {
        setErrMessage(undefined);
        setSuccessMessage("");
      }, 4000);
    }
  };
  const handleInput = (input: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = input.target;
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
              Create an account
            </h2>
            <h3 className=" text-base font-normal text-black mb-2">
              Enter your details below
            </h3>
            <input
              type="text"
              name="name"
              id="name"
              className=" text-black w-full py-3 placeholder:text-[#00000062] outline-none border-b border-b-[rgba(0,0,0,0.4)] mb-6"
              placeholder="Name"
              onChange={handleInput}
            />
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
            <div className=" mt-10">
              <button
                className=" bg-[#DB4444] text-[#FAFAFA] font-medium text-base py-4 px-12 rounded w-full mb-3"
                onClick={handleSignUp}
              >
                Create Account
              </button>

              <div className="border border-solid border-[#00000066] rounded-lg flex items-center justify-center w-full py-4 text-cs-grey-dark font-medium text-sm lg:text-base">
                <Image src={googleIcon} alt="google" className=" mr-2" /> Sign
                up with Google
              </div>
              <div className=" text-[rgba(0,0,0,0.71)] text-base text-center my-4">
                <span className=" font-normal">Already have account?</span>
                <Link
                  href={"/auth/login"}
                  className=" text-[#000] font-medium ml-4"
                >
                  Login
                </Link>
              </div>
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
