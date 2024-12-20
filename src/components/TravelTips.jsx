import React from "react";

const TravelTips = () => {
  const tips = [
    {
      id: 1,
      title: "Travel with our verified operators",
      description:
        'Avoid travelling with unregistered buses called "Sole". Travel with our verified operators instead.',
      bgColor: "#F5F8FF",
      circleColor: "#203D73",
      titleColor: "#203D73",
      paragraphColor: "#203D73",
    },
    {
      id: 2,
      title: "Inform your loved ones",
      description:
        "Inform your loved ones about your trip and keep them updated on your journey.",
      bgColor: "#F0F5FF",
      circleColor: "#5145CD",
      titleColor: "#5145CD",
      paragraphColor: "#5145CD",
    },
    {
      id: 3,
      title: "Avoid late night travels",
      description:
        "Avoid travelling at night as much as possible. Road trips during the night are not advisable due to the heightened nationwide insecurity.",
      bgColor: "#FDFDEA",
      circleColor: "#9F580A",
      titleColor: "#9F580A",
      paragraphColor: "#9F580A",
    },
  ];

  return (
    <div className=" my-12">
      <h2 className="text-2xl font-bold mb-6">Travel Tips</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className={` rounded-lg p-3 space-y-4`}
            style={{ backgroundColor: tip.bgColor }}
          >
            {/* Number Circle */}
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold text-lg mb-4"
              style={{ backgroundColor: tip.circleColor }}
            >
              {tip.id}
            </div>

            {/* Title */}
            <h3
              className={` text-lg font-bold`}
              style={{ color: tip.titleColor }}
            >
              {tip.title}
            </h3>

            {/* Description */}
            <p
              className={` text-sm leading-relaxed`}
              style={{ color: tip.paragraphColor }}
            >
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;
