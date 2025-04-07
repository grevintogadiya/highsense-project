import React from "react";
const cardData = [
  {
    title: "You are safe",
    description: "We build long-term pro relationships with our clients.",
    imgSrc: "https://www.highsense.in/images/About-intro%20(1).png",
  },
  {
    title: "Developing product with trust",
    description:
      "Always developing better ways to deliver quality, service & efficiencies using latest technologies.",
    imgSrc: "https://www.highsense.in/images/promise.png",
  },
];
function Promise() {
  return (
    <div className="bg-[#F8F6ED] min-h-screen flex mt-4 ">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row  gap-8">
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/3">
          <img
            src="https://www.highsense.in/images/guy.png"
            alt="Person"
            className="w-auto h-[450px]"
          />
        </div>

        {/* Right Section (Text & Cards) */}
        <div className="w-full md:w-2/3 ">
          <h2 className="text-[40px] font-bold text-green-700">Promise</h2>
          <p className="text-lg text-gray-700 mt-2">
            The awesome people who make all this possible
          </p>

          <div  className="grid md:grid-cols-2 gap-6 mt-4">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white p-6 flex gap-4">
                <img src={card.imgSrc} alt="Icon" className="w-12 h-12" />
                <div>
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promise;
