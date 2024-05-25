import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeLocationData from './HomeLocation.json';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';

const images = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
    8: img8,
    9: img9,
    10: img10,
};

const Info = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    const [home, setHome] = useState(null);
    const [showBuyPopup, setShowBuyPopup] = useState(false);
    const [showReservePopup, setShowReservePopup] = useState(false);

    useEffect(() => {
        if (Array.isArray(HomeLocationData.homes)) {
            const selectedHome = HomeLocationData.homes.find((item) => item.id.toString() === id);
            setHome(selectedHome);
        } else {
            console.error("HomeLocationData.homes is not an array");
        }
    }, [id]);

    const handleBuyClick = () => {
        setShowBuyPopup(true);
    };

    const handleReserveClick = () => {
        setShowReservePopup(true);
    };

    return (
        <div className="container mx-auto p-4">
            {home ? (
                <div className="bg-white p-4 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="flex flex-col items-center">
                        <img src={images[home.id]} alt={home.title} className="w-full h-auto object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold mb-2">{home.title}</h2>
                        <p className="text-lg font-bold">${home.price}</p>
                    </div>
                    <div className="flex flex-col justify-center mt-[-10%]">
                        <p className="mb-2">{home.description}</p>
                        <p className="mb-2">Address: {home.location.address}, {home.location.city}, {home.location.state}, {home.location.zip}</p>
                        <p>Bedrooms: {home.details.bedrooms}</p>
                        <p>Bathrooms: {home.details.bathrooms}</p>
                        <p>Area: {home.details.area}</p>
                        <p>Type: {home.details.type}</p>
                        <p>Year Built: {home.details.yearBuilt}</p>
                        <p>Amenities: {home.amenities.join(', ')}</p>
                        <p>Agent: {home.agent.name}</p>
                        <p>Phone: {home.agent.phone}</p>
                        <p>Email: {home.agent.email}</p>
                        <div className="mt-4 flex justify-between">
                            <button className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md" onClick={handleBuyClick}>Buy Now</button>
                            <button className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md" onClick={handleReserveClick}>Reserve</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            {showBuyPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p>You'd like to buy this house. Please contact us.</p>
                        <button className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md" onClick={() => setShowBuyPopup(false)}>Close</button>
                    </div>
                </div>
            )}

            {showReservePopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p>You have reserved this property. Please contact us.</p>
                        <button className="bg-green-500 text-white hover:bg-green-400 px-4 py-2 rounded-md" onClick={() => setShowReservePopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Info;
