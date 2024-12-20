import React, { useState, useEffect } from "react";
import ticketIcon from "../assets/windowticket-icon.svg";
import profileIcon from "../assets/profile.svg";
import mapPinIcon from "../assets/map-pin.svg";
import calendarIcon from "../assets/calendar-month.svg";
import switchArrowIcon from "../assets/switch-arrows.svg";
import downArrIcon from "../assets/Vectordown-arr.svg";
import axios from "axios";

const Buyticket = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const [result, SetResult] = useState("");

  // Fetch cities for dropdown
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const token = "pk_$2y$10$zymN8.6xEZei.WAIqpB8RO/6A4r7XFjiQ.YQ6XCzaxXQnTh/OoVl.";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(
          "https://sandbox.myt40.com/api/v1/retailer/connections/routes",
          config
        );
        setCities(res.data.data.from_cities);
        setError(null);
      } catch (err) {
        setError("Failed to fetch cities. Please try again.");
      }
    };

    fetchCities();
  }, []);

  const handleSearch = async () => {
    try {
      const token = "pk_$2y$10$zymN8.6xEZei.WAIqpB8RO/6A4r7XFjiQ.YQ6XCzaxXQnTh/OoVl.";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        "https://sandbox.myt40.com/api/v1/retailer/connections/find",
        config
      );
      SetResult(res.data); 
      localStorage.setItem("searchResult", JSON.stringify(res.data));
      setError(null);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    }
  };

  return (
    <div className=" border-[2px] border-[#E5E7EB] rounded-2xl relative w-full">
      {/* title */}
      <div className=" bg-[#102751] flex flex-col items-center justify-center py-4 pb-12 rounded-2xl">
        <div className=" flex items-center gap-1">
          <img src={ticketIcon} alt="Ticket Icon" />
          <h2 className=" text-gray-50 font-bold">Buy tickets</h2>
        </div>
        <div className=" w-[104px] h-[1px] bg-[#6B7280]"></div>
      </div>
      {/* selection container */}
      <div className=" bg-white py-8 px-6 rounded-xl space-y-2 md:space-y-6 absolute -mt-6 top-16 w-full">
        {/* passenger */}
        <div className=" flex items-center gap-2">
          <img src={profileIcon} alt="Profile" />
          <h1 className=" text-gray-600">1 passenger</h1>
          <img src={downArrIcon} alt="Arrow Down" />
        </div>
        {/* select location */}
        <div className=" flex flex-col sm:flex-row w-full items-center gap-4">
          {/* from */}
          <div>
            <label htmlFor="from-location" className=" block text-[#111928] font-medium text-sm md:mb-3">
              From
            </label>
            <div className=" relative">
              <select
                id="from-location"
                className=" bg-gray-50 border-2 border-gray-100 focus:outline-[#111928] py-2 px-8 rounded-lg w-full md:max-w-[203px]"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className=" flex items-center gap-4 absolute top-[25%] left-6">
                <img src={mapPinIcon} alt="location-pin" className="" />
              </div>
            </div>
          </div>
          {/* switch icon */}
          <div className=" h-5 w-5">
            <img src={switchArrowIcon} alt="Switch Icon" className=" w-full h-full object-cover" />
          </div>
          {/* to */}
          <div>
            <label htmlFor="to-location" className=" block text-[#111928] font-medium text-sm md:mb-3">
              To
            </label>
            <div className=" relative">
              <select
                id="to-location"
                className=" bg-gray-50 border-2 border-gray-100 focus:outline-[#111928] py-2 px-8 rounded-lg w-full md:max-w-[203px]"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className=" flex items-center gap-4 absolute top-[25%] left-6">
                <img src={mapPinIcon} alt="location-pin" className="" />
              </div>
            </div>
          </div>
        </div>
        {/* departure date */}
        <div>
          <label htmlFor="departure-date" className=" block text-[#111928] font-medium text-sm md:mb-3">
            Departure date
          </label>
          <div className=" relative">
            <input
              type="date"
              id="departure-date"
              className=" bg-gray-50 border-2 border-gray-100 outline-none focus:outline-none py-2 px-8 rounded-lg w-full"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <div className=" flex items-center gap-4 absolute top-[25%] right-8">
              <img src={calendarIcon} alt="Calendar" className="" />
            </div>
          </div>
        </div>
        {/* search button */}
        <button
          className="w-full rounded-lg text-sm font-medium bg-[#102751] text-white py-[10px] px-5"
          onClick={handleSearch}
        >
          Search
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Buyticket;
