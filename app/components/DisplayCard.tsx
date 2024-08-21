import Image, { StaticImageData } from "next/image";
import fillEye from "@/public/assets/svgs/fillEye.svg";
import fillHeart from "@/public/assets/svgs/fillHeart.svg";
import starFull from "@/public/assets/svgs/starFull.svg";
const DisplayCard = ({
  percentOff,
  image,
  name,
  price,
  priceOff,
  number,
}: {
  percentOff: string;
  image: StaticImageData;
  name: string;
  price: string;
  priceOff: string;
  number: string;
}) => {
  return (
    <div className=" w-fit group cursor-pointer min-w-[260px] snap-center">
      <div className=" relative w-fit">
        <div className=" bg-[#F5F5F5] relative p-11 w-fit rounded">
          <div className=" bg-[#DB4444] text-[#FAFAFA] text-sm font-normal py-1 px-3 w-fit rounded absolute left-3 top-3">
            {`-${percentOff}%`}
          </div>
          <Image src={fillEye} alt="" className=" absolute top-14 right-3" />
          <Image src={fillHeart} alt="" className=" absolute top-3 right-3" />
          <Image src={image} alt="" className=" mx-auto" />
        </div>
        <button className=" py-2 text-center w-full text-white bg-black rounded-b-[4px] opacity-0 group-hover:opacity-100 transition-all">
          Add To Cart
        </button>
      </div>
      <h3 className=" text-black text-base font-medium">{name}</h3>
      <div className=" flex gap-x-6">
        <h3 className=" text-[#DB4444] text-base font-medium">${price}</h3>
        <h3 className=" text-gray-300 text-base font-medium line-through">
          ${priceOff}
        </h3>
      </div>
      <div className=" flex items-center gap-x-4">
        <div className="flex">
          <Image src={starFull} alt="" className="" />
          <Image src={starFull} alt="" className="" />
          <Image src={starFull} alt="" className="" />
          <Image src={starFull} alt="" className="" />
          <Image src={starFull} alt="" className="" />
        </div>
        <h4 className=" text-sm font-semibold text-gray-300">({number})</h4>
      </div>
    </div>
  );
};

export default DisplayCard;
