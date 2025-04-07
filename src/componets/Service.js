import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    button: "Web Development",
    pre: "Our web developing team are experts in providing unique, custom PHP Development Services. We have access to the latest innovation in PHP development which, along with our creative and coding expertise helps us deliver the best results that’ll exceed your expectations.it makes us best it company in surat , gujarat",
  },
  {
    button: "Mobile Development",
    pre: "Have an idea and want to launch a mobile app? We can help! We are a leading Mobile Application Development Company who can help you craft unique mobile apps, that are aligned with the current market trends, on varied platforms including Android, iOS, iPad and iPhone.",
  },
  {
    button: "CRM",
    pre: "Customer relationship management (CRM) is a technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships. it makes highsense Infotech the best crm development company in surat , gujarat.",
  },
];
function Service() {
  return (
    <div className="row">
      <div className="first pt-[68px]">
        <div className="button text-center items-center">
          <button className="bg-green-600 text-white px-4 py-1 rounded-3xl">
            Service
          </button>

          <h6 className="text-black text-[35px] font-bold">
            We didn't reinvent the
          </h6>
          <h6 className="text-green-600 text-[35px] font-bold">
            wheel, just design it
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#ebe9de]  rounded-xl p-6  duration-300"
          >
            <button className="mt-4 bg-green-600 text-white px-4 py-1 mb-4 rounded hover:bg-indigo-700 transition rounded-xl">
              {card.button}
            </button>

            <p className="text-gray-600 mb-4">{card.pre}</p>
          </div>
        ))}
      </div>

      <button className="bg-[#039746] text-white font-bold rounded-full px-6 py-4 text-sm flex justify-center items-center mx-auto space-x-2">
        <span>View more Services</span>
        <span className="transform transition-all duration-300 hover:translate-x-1">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
  );
}

export default Service;
