import React from "react";
const cards = [
  {
    title: "SERVICE",
    pre: "Be it a Website, Mobile App, Customised Software, eCommerce Store, ordering, we are behind every screen helping you stand out.",
    image: "https://www.highsense.in/images/Intro%20(1).png", 
  },
  {
    title: "TECHNOLOGIES",
    pre: "Don’t you worry! We won’t choose the easy-peasy route. We will work our fingers to the bone keeping up with the latest technologies.",
    image: "https://www.highsense.in/images/intro_2%20(1).png", 
  },
  {
    title: "AFTER SALES SERVICE",
    pre: "We have an extremely high client retention rate because of our efficient support team. Our support team is always available to make your project work.",
    image: "https://www.highsense.in/images/intro_3%20(1).png", 
  },
];

function Card() {
  return (
    <div className="row">
      <div className="first pt-[68px]">
        <div className="button text-center items-center">
          <button className="bg-green-600 text-white px-4 py-1 rounded-3xl">
            into
          </button>

          <h6 className="text-green-600 text-[35px] font-bold">
            Why choose
            <span className="text-black font-bold">Highsense ?</span>
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#ebe9de] shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 mb-4">{card.pre}</p>

            {/* Image after the <p> tag */}
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="w-auto h-[150px] mx-auto mt-2 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
