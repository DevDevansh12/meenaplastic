import React from "react";
import img from "./../Image/26965-removebg-preview.png";
const Story = () => {
  return (
    <>
      <div className="container mx-auto mt-16">
        <div className="container_wrapper flex items-center justify-between py-5 px-10">
          <div className="section2">
            <div className="about_image">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="section1 w-1/2">
            <div className="about_content">
              <h1 className="text-6xl font-bold mb-5">About US</h1>
              <h3 className="text-2xl font-semibold mb-5 text-[#9B6156]">
                DISCOVER OUR STORY
              </h3>
              <p className="text-xl mb-10">
                We are Meena Plastics, an ISO 9001:2015 certified company
                renowned for delivering high-quality carry bags, garbage bags,
                bio-hazardous bags, and more. Trusted for our commitment to
                customer satisfaction and timely deliveries, we proudly serve
                clients from Vadodara with excellence and reliability.We
                introduce ourselves with great pride because we demonstrate that
                customers make the best choices if they believe us. From
                Vadodara, we satisfy the needs of our customers and consistently
                fulfill our delivery commitments.
              </p>
            </div>
            <button className="text-white bg-[#9B6156] focus:ring-4 font-medium rounded-lg text-md px-10 py-5 me-2 mb-2 dark:bg-[#9B6156]-600 dark:hover:bg-[#9B6156]-700 focus:outline-none dark:focus:ring-[#9B6156]-800">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
