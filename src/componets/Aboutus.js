import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    title: "SERVICE",
    pre: "Highsense Infotech provides solutions for all your digital needs. We are a Surat-Based IT solution Company Incorporated in 2019. We deliver IT projects of varying complexities across the globe.",
    image: "https://www.highsense.in/images/Intro%20(1).png",
  },
  {
    title: "TECHNOLOGIES",
    pre: "Highsense Infotech provides solutions for all your digital needs. We are a Surat-Based IT solution Company Incorporated in 2019. We deliver IT projects of varying complexities across the globe.",
    image: "https://www.highsense.in/images/intro_2%20(1).png",
  },
  {
    title: "AFTER SALES SERVICE",
    pre: "Highsense Infotech provides solutions for all your digital needs. We are a Surat-Based IT solution Company Incorporated in 2019. We deliver IT projects of varying complexities across the globe.",
    image: "https://www.highsense.in/images/intro_3%20(1).png",
  },
];
function Aboutus() {
  return (
    <div className="  bg-[#FAFAF4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="pl-[70px]">
          <h1 className="text-green-600 text-4xl md:text-6xl font-bold leading-tight">
            Hello! We are <br />
            <span className="text-black font-bold">Highsense</span>
          </h1>
          <p className="text-black mt-4 text-lg">
            We will be there for you from Vision to <br />
            Version 1.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-[#039746] rounded-full px-6 py-4 text-white font-bold flex items-center text-sm">
              CONTACT US
              <span className="ml-2 transform transition-all duration-300 hover:translate-x-1">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
            <img
              src="https://www.highsense.in/images/Deliver%20(1).png"
              className="w-auto h-12"
              alt="Delivery Icon"
            />
          </div>

          <div className="flex mt-6 gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold">20+</h4>
              <p className="text-lg font-bold mt-2">Dedicated Developers</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">50+</h4>
              <p className="text-lg font-bold mt-2">Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            src="https://www.highsense.in/images/Hero-Pic-2.jpg"
            className="w-[780px] h-[720px] object-cover"
            alt="Hero Image"
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <button className="bg-green-600 text-white px-6 py-3 rounded-3xl shadow-md mt-4">
          Welcome
        </button>
        <h6 className="text-green-600 text-3xl md:text-4xl font-bold mt-4">
          #1 CRM & ERP Development
          <span className="text-black font-bold">
            {" "}
            Company in Surat, Gujarat
          </span>
        </h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src="https://www.highsense.in/images/certificate1.jpg"
            alt="Certificate"
            className="w-auto h-[450px] "
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-gray-700 mb-4">
            Highsense Infotech is a growing and experienced team of creative,
            innovative, and professional specialists in Website Design, Software
            development, and Search Engine Optimization and Best ERP Development
            company in surat.
          </p>
          <p className="text-gray-700">
            At Highsense Infotech , we understand our clients and their needs.
            That’s why we create unique software that fulfils all their
            requirements and makes their routine work easy.
          </p>
          <p className="text-gray-700 pt-2">
            We are passionate about our work and behave as dedicated resources
            of our customers. If you are looking for service providers for web
            design or web development in India then we can help you to generate
            a professional online company. We provide offshore software
            development services in India at extremely affordable prices. We
            also offer dynamic web development services to our customers across
            the world.
          </p>

          <div className="flex items-center space-x-2 mt-6">
            <FontAwesomeIcon
              icon={faCheckDouble}
              size="lg"
              className="text-green-600"
            />
            <p className="text-gray-700">
              Highsense Infotech excels in creating innovative Websites that are
              user-friendly & cross-browser compatible.
            </p>
          </div>

          <div className="mt-6">
            <a href="#" className="text-green-600 font-bold underline">
              Want to Hire Highsense Infotech for Your Next Project?
            </a>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-6 md:px-12 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left md:pr-10">
            <p className="text-gray-700 mb-4">
              Highsense Infotech is a growing and experienced team of creative,
              innovative, and professional specialists in Website Design,
              Software development, and Search Engine Optimization.
            </p>

            <p className="text-gray-700 pt-2">
              We are passionate about our work and behave as dedicated resources
              for our clients. If you need web design or development services in
              India, we can help you build a professional online presence. We
              provide offshore software development services at extremely
              affordable prices and offer dynamic web development solutions
              worldwide.
            </p>

            <p className="text-gray-700 mt-6">
              Highsense Infotech excels in creating innovative Websites that are
              user-friendly & cross-browser compatible.
            </p>

            <p className="text-gray-700 mt-6 font-bold">
              That’s why Highsense Infotech is the best IT company in Surat,
              Gujarat.
            </p>
          </div>

          <h6 className="flex text-black text-[50px] font-bold">
            # Who
            <span className="text-green-600 font-bold"> We Are?</span>
          </h6>
        </div>
      </div>

      <div className=" mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start text-center md:text-left md:order-1">
            <div className="font-bold">
              <span className="text-[50px] block leading-tight"># WHAT WE</span>
              <span className="text-[50px] text-green-600 textleading-tight flex">
                {" "}
                GUARANTEE?
              </span>
            </div>
          </div>

          <div className="text-center md:text-left md:order-2 md:pl-10">
            <p className="text-gray-700 mb-4">
              Highsense Infotech excels in creating innovative Websites that are
              user-friendly & cross-browser compatible.
            </p>

            <p className="text-gray-700 pt-2">
              Just like your web needs, the number of services we provide is
              also endless! We value the importance of your time, investment,
              and trust in us and guarantee to deliver our website designing
              services sincerely and repidly!
            </p>

            <p className="text-gray-700 mt-6">
              Highsense Infotech excels in creating innovative Websites that are
              user-friendly & cross-browser compatible.
            </p>
            <a href="#" className="text-green-600 font-bold underline">
              Want to Hire Highsense Infotech for Your Next Project?
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 pt-[40px]">
        <button className="bg-green-600 text-white px-6 py-2 rounded-3xl shadow-md mt-4">
          number
        </button>
        <h6 className="text-black text-xl md:text-2xl  mt-4">
          We are specialised in making world-class products <br /> because we
          believe in quality, and our customers
          <br /> simply love it.
        </h6>
      </div>

      <div className="row">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#ebe9de] shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-auto h-[150px] mx-auto mt-2 object-cover"
                />
              )}
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.pre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-[#f7f5ef] flex flex-col md:flex-row items-center justify-center py-10 px-6 gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://www.highsense.in/images/news.jpg"
            className="w-full h-[400px]  "
            alt="Newsletter"
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#f7f5ef] ">
          <div className="pl-9 pace-x-3">
            <img
              src="https://www.highsense.in/images/Newsletter%20(1).png"
              alt="Newsletter Icon"
              className="w-auto h-[90px]"
            />
          </div>

          <h2 className="text-3xl font-bold text-black mt-4 pl-9">
            Get our latest{" "}
            <span className="text-green-600">
              news &<br /> updates
            </span>
          </h2>

          <div className="mt-6 flex items-center border border-gray-400 rounded-full overflow-hidden max-w-lg mx-auto">
            <div className="flex flex-1 px-4 py-2">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 text-lg outline-none bg-transparent border-r border-gray-300 px-2 placeholder-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 text-lg outline-none bg-transparent px-2 placeholder-gray-600"
              />
            </div>
            <button className="bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-sm">
              JOIN!
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="flex justify-center pt-3">
          <button className="bg-[#039746] rounded-full px-4 py-2 text-white font-bold flex items-center text-center text-sm">
            Our Clients
            <span className="ms-2 transform transition-all duration-300 hover:translate-x-1"></span>
          </button>
        </div>

        <div className="flex justify-center items-center gap-6 p-6 flex-wrap">
          <img
            className="w-32 lg:w-40 hover:scale-110 transition-transform duration-300 cursor-pointer"
            src="https://www.highsense.in/images/logo13.png"
            alt="Logo 13"
          />
          <img
            className="w-32 lg:w-40 hover:scale-110 transition-transform duration-300 cursor-pointer"
            src="https://www.highsense.in/images/logo1.png"
            alt="Logo 1"
          />
          <img
            className="w-32 lg:w-40 hover:scale-110 transition-transform duration-300 cursor-pointer"
            src="https://www.highsense.in/images/logo12.png"
            alt="Logo 4"
          />
          <img
            className="w-32 lg:w-40 hover:scale-110 transition-transform duration-300 cursor-pointer"
            src="https://www.highsense.in/images/logo10.png"
            alt="Logo 6"
          />
          <img
            className="w-32 lg:w-40 hover:scale-110 transition-transform duration-300 cursor-pointer"
            src="https://www.highsense.in/images/logo2.png"
            alt="Logo 9"
          />
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

export default Aboutus;
