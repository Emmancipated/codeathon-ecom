function HomeProducts({
  subheader,
  header,
  showTimer,
}: {
  subheader: string;
  header: string;
  showTimer?: boolean;
}) {
  return (
    <div>
      <div className=" flex gap-x-4 items-end">
        <div>
          <div className="breadcrumb flex items-center gap-x-4 my-5">
            <div className=" bg-[#DB4444] h-10 w-5 rounded"></div>
            <h3 className=" text-base font-semibold text-[#DB4444]">
              {subheader}
            </h3>
          </div>
          <h3 className=" font-semibold text-4xl text-black">{header}</h3>
        </div>

        {showTimer && (
          <div className=" flex items-center gap-x-4">
            <div>
              <div className=" font-medium text-sm text-black">Days</div>
              <div className=" font-bold text-3xl text-black">03</div>
            </div>
            <div className="mt-6">
              <div className=" bg-[#E07575] h-1 w-1 rounded-full mb-1"></div>
              <div className=" bg-[#E07575] h-1 w-1 rounded-full"></div>
            </div>

            <div>
              <div className=" font-medium text-sm text-black">Hours</div>
              <div className=" font-bold text-3xl text-black">23</div>
            </div>
            <div className="mt-6">
              <div className=" bg-[#E07575] h-1 w-1 rounded-full mb-1"></div>
              <div className=" bg-[#E07575] h-1 w-1 rounded-full"></div>
            </div>

            <div>
              <div className=" font-medium text-sm text-black">Minutes</div>
              <div className=" font-bold text-3xl text-black">19</div>
            </div>
            <div className="mt-6">
              <div className=" bg-[#E07575] h-1 w-1 rounded-full mb-1"></div>
              <div className=" bg-[#E07575] h-1 w-1 rounded-full"></div>
            </div>

            <div>
              <div className=" font-medium text-sm text-black">Seconds</div>
              <div className=" font-bold text-3xl text-black">56</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeProducts;
