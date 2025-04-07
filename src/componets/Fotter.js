import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

function Fotter() {
  return (
    <div className="bg-[#f9f7ee] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          <div className="space-y-4">
            <img
              src="https://www.highsense.in/images/h  ighsense%20(1).png"
              
              className="w-auto h-12"
              alt="Highsense Logo"
            />
            <h4 className="text-xl font-bold">INDIA</h4>
            <p className="text-gray-700 text-sm md:text-base">
              334-335, Abhishek Arcade, <br />
              Yogi Chowk, Surat, Gujarat 395010 <br />
              <span className="font-bold">Phone:</span> +91 8320418398
            </p>

            <h4 className="text-xl font-bold">CANADA</h4>
            <p className="text-gray-700 text-sm md:text-base">
              47 Ellis Crescent North, Waterloo, <br />
              ON N2J3N5 <br />
              <span className="font-bold">Phone:</span> +91 8320418398
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-lg">Menu</h5>
            {["Home", "About Us", "Services", "Work", "Product", "Contact"].map(
              (item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-green-500 mr-2"
                  />
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </div>
              )
            )}
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-lg">Our Services</h5>
            {[
              "Web Design",
              "Web Development",
              "E-commerce",
              "Mobile Development",
              "CRM",
            ].map((service) => (
              <div key={service} className="flex items-center text-gray-700">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-green-500 mr-2"
                />
                <a href="#" className="hover:underline">
                  {service}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-lg">Tags</h5>
            {[
              "Best IT Company In Surat, Gujarat",
              "Best ERP Development Company In Surat, Gujarat",
              "Best CRM Development Company In Surat, Gujarat",
              "Best Web Development Company In Surat, Gujarat",
            ].map((tag) => (
              <div key={tag} className="flex items-center text-gray-700">
                <FontAwesomeIcon icon={faTag} className="text-green-600 mr-2" />
                <p className="font-bold">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
