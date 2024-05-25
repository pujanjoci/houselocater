import React from 'react';
import houseImage from '../assets/house.jpg';
import marketImage from '../assets/market.jpg';

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-[5%]">
      {/* First Section */}
      <div className="flex flex-col md:flex-col-reverse">
        <div className="md:flex-shrink-0 md:ml-5">
            <h2 className="text-2xl font-bold mb-2 text-center">About Us</h2>
          <p className="text-lg">
            Welcome to HouseLocator! We specialize in helping clients find their dream homes and sell their properties quickly and efficiently. Our team of experienced real estate agents is dedicated to providing exceptional service and guiding you through every step of the buying or selling process.
          </p>
        </div>
        <div className="md:flex-shrink-0 md:order-1 mt-4">
            <img src={houseImage} alt="House" className="w-full h-auto md:w-auto md:ml-[25%] md:mb-10" />
        </div>
      </div>
      {/* Second Section */}
      <div className="flex flex-col md:flex-col-reverse mt-4">
        <div className="md:flex-shrink-0 md:mr-5">
          <img src={marketImage} alt="Housing Market" className="w-full h-auto md:w-auto md:ml-[25%]" />
        </div>
        <div className="md:order-2">
            <h2 className="text-2xl font-bold mt-4 mb-2 text-center">The Housing Market</h2>
          <p className="text-lg md:mb-10">
            The housing market refers to the buying and selling of residential properties. It is influenced by various factors such as economic conditions, interest rates, and consumer confidence. Understanding the current state of the housing market is crucial for both buyers and sellers to make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
