import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#5850EC] flex items-center justify-center text-white py-10 px-4 md:px-8">
      <div className=" flex flex-col md:items-center gap-2">
        <h1 className=" font-extrabold text-xl md:text-3xl lg:text-4xl">
          {" "}
          Travel with ease
        </h1>
        <p className=" text-sm md:text-lg font-light">
          Search and compare bus trips from several
        </p>
        <p className=" text-sm md:text-lg">
          bus operators, make payments and get your tickets .Download the app
          today!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
