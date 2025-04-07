import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  FaRegSmile,
  FaRegCalendarAlt,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const stats = [
  { icon: <FaRegSmile size={30} />, number: "100+", text: "Happy Clients" },
  { icon: <FaBook size={30} />, number: "300+", text: "Projects Delivered" },
  {
    icon: <FaRegCalendarAlt size={30} />,
    number: "4",
    text: "Years of Experience",
  },
  {
    icon: <FaBriefcase size={30} />,
    number: "20",
    text: "Expert Professionals",
  },
];
function Hire() {
  return (
    <div className="">
      <div className="row">
        <div className="first ">
          <div className=" text-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-3xl shadow-md mt-4">
              Welcome
            </button>
            <h6 className="text-black text-3xl md:text-4xl font-bold mt-4">
              Why You Should Hire Dedicated <br />
              Developers
            </h6>
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 border-b-2 border-gray-300 items-center">
          <div className="max-w-lg space-y-6">
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Experienced &amp; Skilled Resources
                </h4>
                <p className="text-gray-600">
                  You can hire a team of experienced professionals who have
                  great domain expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Communication via Skype/Email/Phone
                </h4>
                <p className="text-gray-600">
                  We offer flexibility in pricing and scalability when you hire
                  dedicated developers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Flexible Pricing &amp; Working Models
                </h4>
                <p className="text-gray-600">
                  We offer flexibility in pricing and scalability when you hire
                  dedicated developers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Dedicated Lead as Single Point of Contact
                </h4>
                <p className="text-gray-600">
                  We assign a dedicated lead for your team of developers as a
                  single point of contact.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">Daily/Weekly Reporting</h4>
                <p className="text-gray-600">
                  You can stay updated with the project status through regular
                  reporting from the team.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://www.highsense.in/images/change-this-image._3.jpg"
              alt="Dedicated Developers"
              className="w-[500px] h-[500px] object-cover mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 border-gray-300 items-center">
          <div>
            <img
              src="https://www.highsense.in/images/change-this-image._4.jpg"
              alt="Dedicated Developers"
              className="w-[500px] h-[500px] object-cover mx-auto"
            />
          </div>

          <div className="max-w-lg space-y-6">
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Update and Tracking via PMS
                </h4>
                <p className="text-gray-600">
                  You can hire a team of experienced professionals who have
                  great domain expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Cost-effective &amp; On-time Delivery
                </h4>
                <p className="text-gray-600">
                  We offer flexibility in pricing and scalability when you hire
                  dedicated developers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Code &amp; Backup Management
                </h4>
                <p className="text-gray-600">
                  We assign a dedicated lead for your team of developers as a
                  single point of contact.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  No Expenses on Training &amp; Retaining
                </h4>
                <p className="text-gray-600">
                  You can stay updated with the project status through regular
                  reporting from the team.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 pt-2"
                fontSize={20}
              />
              <div className="pl-3">
                <h4 className="text-2xl font-bold">
                  Secured &amp; Fail-safe Environment
                </h4>
                <p className="text-gray-600">
                  You can stay updated with the project status through regular
                  reporting from the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F6EE] py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="absolute -top-8 flex justify-center items-center w-16 h-16 bg-gray-500 rounded-full border-4 border-white shadow-lg">
                {stat.icon}
              </div>

              <div className="w-full text-center p-6 bg-[#F2F1E8] rounded-lg shadow-md pt-12">
                <h3 className="text-2xl font-bold text-[#0C2340]">
                  {stat.number}
                </h3>
                <p className="text-black">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9f7ee] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            <div className="space-y-4">
              <img
                src="https://www.highsense.in/images/highsense%20(1).png"
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
              {[
                "Home",
                "About Us",
                "Services",
                "Work",
                "Product",
                "Contact",
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-green-500 mr-2"
                  />
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </div>
              ))}
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
                  <FontAwesomeIcon
                    icon={faTag}
                    className="text-green-600 mr-2"
                  />
                  <p className="font-bold">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hire;
