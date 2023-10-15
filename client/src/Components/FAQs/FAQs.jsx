import React, { useState } from "react";

function FAQ() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAnswer1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAnswer2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAnswer3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleAnswer4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div className="max-w-2xl mx-auto mt-5 px-4 py-8">
      <h2 id="FAQ" className="text-3xl font-bold mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="border border-gray-300 rounded p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleAnswer1}
          >
            <h3 className="text-xl font-bold">Which Platform do we Support?</h3>
            <svg
              className={`w-5 h-5 transition-transform duration-300 transform ${
                isOpen1 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {isOpen1 && (
            <p className="mt-2 text-gray-700">
              We Support Youtube to convert video into Mp3 or Mp4.
            </p>
          )}
        </div>
        <div className="border border-gray-300 rounded p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleAnswer2}
          >
            <h3 className="text-xl font-bold">
              How to switch between mp3 and mp4?
            </h3>
            <svg
              className={`w-5 h-5 transition-transform duration-300 transform ${
                isOpen2 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {isOpen2 && (
            <p className="mt-2 text-gray-700">
              You can switch between mp3 and mp4 by just clicking the mp3 and
              the drop-down will appear from which you can select.
            </p>
          )}
        </div>

        <div className="border border-gray-300 rounded p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleAnswer4}
          >
            <h3 className="text-xl font-bold">
              How to start converting the Youtube video to Mp3 or Mp4?{" "}
            </h3>
            <svg
              className={`w-5 h-5 transition-transform duration-300 transform ${
                isOpen4 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {isOpen4 && (
            <p className="mt-2 text-gray-700">
              First place the valid Youtube link into the input section and
              click the button convert. It will start converting and on
              completion displays the download button.
            </p>
          )}
        </div>

        <div className="border border-gray-300 rounded p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleAnswer3}
          >
            <h3 className="text-xl font-bold">
              How to download the Mp3 or Mp4 file?
            </h3>
            <svg
              className={`w-5 h-5 transition-transform duration-300 transform ${
                isOpen3 ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {isOpen3 && (
            <p className="mt-2 text-gray-700">
              You can easily download the youtube converted Mp3 or Mp4 file by
              clicking the downloaded button once it is converted.
            </p>
          )}
        </div>
        {/* Add more FAQ items */}
      </div>
    </div>
  );
}

export default FAQ;
