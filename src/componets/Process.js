import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Process() {
  return (
    <div className=" text-center items-center">
      <div className="row items-center">
        <div className="first text-center items-center">
          <h1 className="text-3xl font-bold text-center">
            <span className="text-black">Our</span>
            <span className="text-green-600">Process</span>
          </h1>

          <p className="text-black text-lg mt-2">
            The awesome people who make all this possible
          </p>
        </div>

        <div className="  secound  items-center justify-evenly text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center text-center p-6">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://assets.website-files.com/625c34f7f5af3d083862f262/626434171dc070d34f3553fe_Process-1-p-500.png"
                alt="Requirement Gathering"
                className="w-auto max-w-sm h-[200px]"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-2xl font-bold text-gray-800">1</h4>
              <h3 className="text-xl font-bold text-gray-900">
                Requirement Gathering
              </h3>
              <p className="text-gray-700">
                Requirement gathering is the first step of <br /> starting
                project development.
              </p>

              {/* Learn More Button */}
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <a href="#">Learn more</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center text-center p-6">
            {/* Image Section */}

            {/* Text Section */}
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-2xl font-bold text-gray-800">2</h4>
              <h3 className="text-xl font-bold text-gray-900">Prototype</h3>
              <p className="text-gray-700">
                The prototype is a basic way to
                <br /> understand the flow of the application.
              </p>

              {/* Learn More Button */}
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <a href="#">Learn more</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://www.highsense.in/images/Process-2%20(1).png"
                alt="Requirement Gathering"
                className="w-auto max-w-sm h-[200px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center text-center p-6">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://www.highsense.in/images/Process-3%20(1).png"
                alt="Requirement Gathering"
                className="w-auto max-w-sm h-[200px]"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-2xl font-bold text-gray-800">3</h4>
              <h3 className="text-xl font-bold text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-gray-700">
                We believe in giving quality work instead
                <br /> of quantity work.
              </p>

              {/* Learn More Button */}
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <a href="#">Learn more</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center text-center p-6">
            {/* Image Section */}

            {/* Text Section */}
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-2xl font-bold text-gray-800">4</h4>
              <h3 className="text-xl font-bold text-gray-900">Deployment</h3>
              <p className="text-gray-700">
                We have a special team of DevOps,
                <br /> which has mastery in the deployment
                <br /> of software.
              </p>

              {/* Learn More Button */}
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <a href="#">Learn more</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://www.highsense.in/images/Process-2%20(1).png"
                alt="Requirement Gathering"
                className="w-auto max-w-sm h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
