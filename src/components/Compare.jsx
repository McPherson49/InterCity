import TransportList from "./TransportList";

const Compare = () => {
  return (
    <div className=" w-full pt-8">
      {/* header-text */}
      <div>
        <h1 className=" text-[#050D1B] text-[24px] md:text-[28px] font-bold md:leading-[38px] md:max-w-[351px]">
          Compare bus operators travelling from City to City
        </h1>
        <p className=" text-[#6B7280] text-xs md:text-base">
          For bookings, easily compare schedules bus operators, and pricing
        </p>
      </div>
      {/*  */}
      <div className=" w-full">
        <TransportList />
      </div>
    </div>
  );
};

export default Compare;
