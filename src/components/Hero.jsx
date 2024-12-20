import Buyticket from "./Buyticket";
const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-12 sm:justify-between  w-full py-12 ">
      {/* hero-text */}
      <div className=" space-y-6  ">
        <h1 className=" text-[#102751] font-bold text-4xl md:5xl lg:text-6xl leadding-[60px] lg:ma-w-[419.1px]">
          Buy <span className=" text-[#5145CD]">cheap</span> <br />
          bus tickets online <br />
          in Nigeria
        </h1>
        <p className=" text-[#6B7280]">
          Book bus tickets for all interstat <br /> travels in Nigeria
        </p>
      </div>
      {/* buy ticket */}
      <div className=" w-full max-w-[508px]">
        <Buyticket />
      </div>
    </div>
  );
};

export default Hero;
