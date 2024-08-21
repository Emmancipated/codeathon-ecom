import Image from "next/image";
import hero from "@/public/assets/images/hero_home.png";
import rightArrow from "@/public/assets/svgs/rightArrow.svg";
import HomeProducts from "./HomeProducts";
import leftArrowShade from "@/public/assets/svgs/leftArrow.svg";
import rightArrowShade from "@/public/assets/svgs/rightArrowShade.svg";
import phoneIcon from "@/public/assets/svgs/phoneIcon.svg";
import computerIcon from "@/public/assets/svgs/computerIcon.svg";
import smartWatchIcon from "@/public/assets/svgs/smartWatcIcon.svg";
import cameraIcon from "@/public/assets/svgs/cameraIcon.svg";
import headphoneIcon from "@/public/assets/svgs/headPhoneIcon.svg";
import gamePadIcon from "@/public/assets/svgs/gamePadIcon.svg";
import pad from "@/public/assets/images/pad.png";
import chair from "@/public/assets/images/chair.png";
import keyboard from "@/public/assets/images/keyboard.png";
import monitor from "@/public/assets/images/pc.png";

import DisplayCard from "./DisplayCard";

const HomeHero = () => {
  return (
    <div>
      <div className="  px-24 grid grid-cols-[30%_70%] gap-x-8">
        <div className=" border-r-[0.5px] py-10 border-gray-300 pr-8">
          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Woman's Fashion
            </h3>
            <Image src={rightArrow} alt="arrow" />
          </div>
          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Men's Fashion
            </h3>
            <Image src={rightArrow} alt="arrow" />
          </div>
          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Electronics
            </h3>
          </div>

          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Home & Lifestyle
            </h3>
          </div>

          <div className=" flex items-center justify-between w-fullmy-4">
            <h3 className=" text-base font-normal text-[#000000]">Medicine</h3>
          </div>

          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Sports & Outdoor
            </h3>
          </div>

          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Baby's & Toys
            </h3>
          </div>

          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Groceries & Pets
            </h3>
          </div>

          <div className=" flex items-center justify-between w-full my-4">
            <h3 className=" text-base font-normal text-[#000000]">
              Health & Beauty
            </h3>
          </div>
        </div>
        <div className=" py-10">
          <Image src={hero} alt="dropdown" />
        </div>
      </div>

      <div className="  my-4">
        <div className=" px-24 flex items-end w-full flex-1 justify-between">
          <HomeProducts subheader="Today's" header="Flash Sales" showTimer />

          <div className=" flex items-center gap-x-4">
            <Image src={leftArrowShade} alt="" />
            <Image src={rightArrowShade} alt="" />
          </div>
        </div>

        <div className=" flex gap-x-4 my-8 overflow-x-scroll no-scrollbar px-24 snap-x">
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={monitor}
            name="IPS LCD Gaming Monitor"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={keyboard}
            name="AK-900 Wired Keyboard"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={chair}
            name="S-Series Comfort Chair"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
        </div>
        <div className=" px-24 ">
          <div className="  pb-8 border-b-[0.5px] border-solid border-[#00000063]">
            <div className=" w-fit mx-auto my-8 ">
              <button className=" text-[#FAFAFA] font-medium text-base py-4 px-12 mx-auto bg-[#DB4444]">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="  my-4">
        <div className=" px-24 flex items-end w-full flex-1 justify-between">
          <HomeProducts subheader="Categories" header="Browse By Category" />

          <div className=" flex items-center gap-x-4">
            <Image src={leftArrowShade} alt="" />
            <Image src={rightArrowShade} alt="" />
          </div>
        </div>

        <div className=" flex gap-x-4 my-8 overflow-x-scroll no-scrollbar px-24 snap-x cursor-pointer">
          <div className=" min-w-[170px] h-[145px] rounded border border-solid border-[#0000004D] flex items-center justify-center hover:bg-[#DB4444] transition-all">
            <div className=" m-auto">
              <Image src={phoneIcon} alt="" />
              <h3 className=" text-base font-normal text-[#000000] text-center">
                Phones
              </h3>
            </div>
          </div>

          <div className=" min-w-[170px] h-[145px] rounded border border-solid border-[#0000004D] flex items-center justify-center hover:bg-[#DB4444] transition-all">
            <div className=" m-auto">
              <Image src={computerIcon} alt="" />
              <h3 className=" text-base font-normal text-[#000000] text-center">
                Computers
              </h3>
            </div>
          </div>

          <div className=" min-w-[170px] h-[145px] rounded border border-solid border-[#0000004D] flex items-center justify-center hover:bg-[#DB4444] transition-all">
            <div className=" m-auto">
              <Image src={smartWatchIcon} alt="" />
              <h3 className=" text-base font-normal text-[#000000] text-center">
                Smartwatch
              </h3>
            </div>
          </div>

          <div className=" min-w-[170px] h-[145px] rounded border border-solid border-[#0000004D] flex items-center justify-center hover:bg-[#DB4444] transition-all">
            <div className=" m-auto">
              <Image src={cameraIcon} alt="" />
              <h3 className=" text-base font-normal text-[#000000] text-center">
                Camera
              </h3>
            </div>
          </div>

          <div className=" min-w-[170px] h-[145px] rounded border border-solid border-[#0000004D] flex items-center justify-center hover:bg-[#DB4444] transition-all">
            <div className=" m-auto">
              <Image src={headphoneIcon} alt="" />
              <h3 className=" text-base font-normal text-[#000000] text-center">
                Headphone
              </h3>
            </div>
          </div>

          <div className=" min-w-[170px] h-[145px] rounded border border-solid border-[#0000004D] flex items-center justify-center hover:bg-[#DB4444] transition-all">
            <div className=" m-auto">
              <Image src={gamePadIcon} alt="" />
              <h3 className=" text-base font-normal text-[#000000] text-center">
                Games
              </h3>
            </div>
          </div>
        </div>
        {/* <div className=" px-24 ">
          <div className="  pb-8 border-b-[0.5px] border-solid border-[#00000063]">
            <div className=" w-fit mx-auto my-8 ">
              <button className=" text-[#FAFAFA] font-medium text-base py-4 px-12 mx-auto bg-[#DB4444]">
                View All Products
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="  my-4">
        <div className=" px-24 flex items-end w-full flex-1 justify-between">
          <HomeProducts subheader="This Month" header="Best Selling Products" />

          <div className=" flex items-center gap-x-4">
            <Image src={leftArrowShade} alt="" />
            <Image src={rightArrowShade} alt="" />
          </div>
        </div>

        <div className=" flex gap-x-4 my-8 overflow-x-scroll no-scrollbar px-24 snap-x">
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={monitor}
            name="IPS LCD Gaming Monitor"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={keyboard}
            name="AK-900 Wired Keyboard"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={chair}
            name="S-Series Comfort Chair"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
          <DisplayCard
            percentOff="20"
            image={pad}
            name="HAVIT HV-G92 Gamepad"
            price="120"
            priceOff="160"
            number="88"
          />
        </div>
        <div className=" px-24 ">
          <div className="  pb-8 border-b-[0.5px] border-solid border-[#00000063]">
            <div className=" w-fit mx-auto my-8 ">
              <button className=" text-[#FAFAFA] font-medium text-base py-4 px-12 mx-auto bg-[#DB4444]">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
