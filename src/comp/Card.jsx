import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {props.icon}
        <a href="/">
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#9b6156] dark:text-white">
            {props.heading}
          </h2>
        </a>
        <p className="mb-5 font-medium text-black">{props.para}</p>
        <a
          href="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          See More
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Card;
