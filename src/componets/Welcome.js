import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  return (
    <div className="container mx-auto p-6  bg-[#FAFAF4]">
   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
        <div className="grid grid-cols-6 gap-2 flex items-center">
          <div className="col-span-6 space-y-2 ">
            {" "}
       
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              Welcome
            </button>
            <h6 className="text-green-600 text-[35px] font-bold">
              #1 CRM & ERP{" "}
              <span className="text-black font-bold">Development</span>
            </h6>
            <h3 className="text-black text-[35px] font-bold">
              Company in Surat, Gujarat
            </h3>
            <h3 className="text-black text-xl font-bold">
              We Build High-Quality CRM & ERP Software.
            </h3>
          </div>
        </div>


        <div className="grid grid-cols-6 gap-2 items-center">
          <div className="col-span-6">
            <p className="text-gray-700">
              Highsense Infotech is a growing and experienced team of creative,
              <br />
              innovative, and professional specialists in Website Design,
              Software
              <br />
              Development, Search Engine Optimization, and the Best ERP
              Development
              <br />
              company in Surat.
            </p>
            <p className="text-gray-700 mt-4">
              We are passionate about our work and behave as dedicated resources
              of our customers. If you are looking for service providers for web
              design or web development in India then we can help you to
              generate a professional online company. We provide offshore
              software development services in India at extremely affordable
              prices. We also offer dynamic web development services to our
              customers across the world.
            </p>
          </div>

   
          <div className="col-span-6 flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faCheckDouble}
              size="lg"
              className="text-green-600"
            />
            <p className="text-gray-700">
              Highsense Infotech excels in creating innovative websites that are
              <br />
              user-friendly & cross-browser compatible.
            </p>
          </div>

         
          <div className="col-span-6">
            <a href="#" className="text-green-600 font-bold underline">
              Want to Hire Highsense Infotech for Your Next Project?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
