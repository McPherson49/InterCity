import React, { useState, useEffect } from "react";
import pin from "../assets/map-pin-alt.svg";
import locationIcon from "../assets/map-pin.svg";
import clockIcon from "../assets/clock.svg";

const TransportList = () => {
  const [transportData, setTransportData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Retrieve data from localStorage
    const savedData = localStorage.getItem("searchResult");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const formattedData = parsedData.data.map((ride) => ({
        brand_name: ride.ride_meta.brand.brand_name,
        from: ride.ride_meta.ride_departure_location.name,
        to: ride.ride_meta.ride_destination.location.name,
        departure_time: ride.ride_meta.departure_time,
        amount: `₦${ride.ride_meta.ride_destination.amount.toLocaleString()}`,
      }));
      setTransportData(formattedData);
      setLoading(false); // Set loading to false once the data is fetched

      // Remove the item from localStorage
      localStorage.removeItem("searchResult");
    } else {
      setLoading(false); // In case there's no data in localStorage, set loading to false
    }
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center p-4">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-full border-[1.5px] border-[#E5E7EB] rounded-xl p-4 md:p-8 mt-2">
      {transportData.map((item, index) => (
        <div
          key={index}
          className="w-full border border-[#E5E7EB] rounded-lg p-4 md:p-6 mb-4 flex justify-between items-center text-[#050D1B] shadow"
        >
          <div className="w-full">
            <h2 className="md:text-lg font-semibold mb-6">{item.brand_name}</h2>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-24">
              <div className="basis-[60%] w-full flex items-center justify-between">
                <p className="text-xs md:text-[18px] font-medium">{item.from}</p>
                <div className="w-[220px] flex items-center">
                  <img src={pin} alt="pin" />
                  <div className="flex-grow border-[1px] border-dotted border-[#D1D5DB] mx-2"></div>
                  <img
                    src={locationIcon}
                    alt="location icon"
                    width={12}
                    height={12}
                  />
                </div>
                <p className="text-xs md:text-[18px] font-medium">{item.to}</p>
              </div>
              <div className="flex-1 w-full flex items-center justify-between">
                <p className="flex items-center gap-1 text-xs font-medium">
                  <span>
                    <img src={clockIcon} alt="clock icon" />
                  </span>
                  {item.departure_time}
                </p>
                <div className="text-[#F2761B] font-bold text-xs md:text-[18px]">
                  {item.amount}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex border-[#D1D5DB] justify-center items-center mt-8 text-[#6B7280] text-sm font-medium">
        <button className="border px-3 py-1 rounded-l">‹</button>
        <button className="border-t border-b px-3 py-1">1</button>
        <button className="border px-3 py-1 rounded-r">›</button>
      </div>
    </div>
  );
};

export default TransportList;
