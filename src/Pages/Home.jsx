import React from "react";
import image from "./../Image/imag1.jpg";
import Story from "../comp/Story";
import Service from "../comp/Service";
const Home = () => {
  return (
    <>
      <div className="bg-[#f9e6df]">
        <div className="container mx-auto">
          <div className="container_wrapper flex items-center justify-between py-16 px-10">
            <div className="section1 w-1/2">
              <div className="text_content">
                <h1 className="text-6xl font-bold mb-5">
                  Transforming Waste into Worth Your Partner in Clean Living
                </h1>
                <p className="mb-7 text-xl">
                  Join us in creating a cleaner, greener future. Our innovative
                  waste management solutions ensure efficient disposal,
                  recycling, and sustainability. Together, let's turn garbage
                  into a resource for a better tomorrow.
                </p>
                <button className="text-white bg-[#9B6156] focus:ring-4 font-medium rounded-lg text-md px-10 py-5 me-2 mb-2 dark:bg-[#9B6156]-600 dark:hover:bg-[#9B6156]-700 focus:outline-none dark:focus:ring-[#9B6156]-800">
                  Read More
                </button>
              </div>
            </div>
            <div className="section2">
              <div className="img">
                <img src={image} alt="" width={750} height={750} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <Story />

      {/* Service */}
      <Service />
    </>
  );
};

export default Home;
