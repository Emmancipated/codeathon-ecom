"use client";

import Link from "next/link";
import Image from "next/image";
import dropdown from "@/public/assets/svgs/dropDownIcon.svg";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import scanner from "@/public/assets/svgs/scanner.svg";
import heart from "@/public/assets/svgs/heartIcon.svg";
import cart from "@/public/assets/svgs/cartIcon.svg";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Contact", path: "/contact" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Sign up", path: "/auth/signup" },
];
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const Header = () => {
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;
  console.log(pathname);

  return (
    <div className={`${poppins.className} text-[#FAFAFA]`}>
      <div className=" border-b-[0.5px] border-gray-300 border-solid">
        <div className=" bg-black flex items-center justify-between py-4 px-24">
          <div></div>
          <h2 className=" text-sm font-normal text-[#FAFAFA]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link
              href={"/"}
              className=" font-semibold underline text-[#FAFAFA]"
            >
              ShopNow
            </Link>
          </h2>
          <div className=" flex gap-x-3 items-center">
            <h2 className="text-sm font-normal">English</h2>
            <Image src={dropdown} alt="dropdown" />
          </div>
        </div>

        <div className=" flex items-center justify-between py-4 px-24">
          <h2>
            <Link href={"/"} className=" font-bold text-2xl text-black">
              Exclusive
            </Link>
          </h2>

          <div className=" flex items-center gap-x-4">
            {NavLinks.map((link) => {
              return (
                <div
                  key={link.id}
                  className="relative"
                  // onClick={() => setSlideIn(false)}
                >
                  <div>
                    <Link
                      href={link.path}
                      className={`${
                        isActive(link.path) ? "underline" : ""
                      } font-normal text-base text-black`}
                    >
                      {link.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" flex items-center justify-between gap-x-4">
            <div className=" bg-[#F5F5F5] relative flex items-center py-3 px-5 gap-x-5 rounded">
              <input
                type="text"
                name=""
                id=""
                placeholder="What are you looking for?"
                className="h-full bg-transparent text-black font-normal text-xs outline-none"
              />
              <Image src={scanner} alt="dropdown" />
            </div>

            {pathname !== "/auth/signup" ||
              "/auth/login" ||
              "/auth/new-password" ||
              ("/auth/forgot-password" && <Image src={heart} alt="heart" />)}
            {pathname !== "/auth/signup" ||
              "/auth/login" ||
              "/auth/new-password" ||
              ("/auth/forgot-password" && <Image src={cart} alt="cart" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
