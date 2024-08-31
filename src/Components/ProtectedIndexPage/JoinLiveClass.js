import React from 'react';

const ClassCard = ({ topic }) => {
    return (
        <div className="flex justify-between items-center p-4 border-2 mb-4 bg-white">
            <div>
                <p className="text-sm text-black font-bold">Class Topic: <span className='text-gray-700 font-normal'>{topic}</span></p>
                <p className="text-sm text-black font-bold">Teacher:</p>
            </div>
            <button className="bg-gray-500 text-white font-bold px-6 sm:px-8 py-2 rounded flex items-center justify-center transition">
                Join Meeting!
            </button>
        </div>
    );
};

const LiveClassesSection = () => {
    /*const classes = [
        "Offer sell and buy",
        "Al Quran Hadish & Namaz Shikkha",
        "Photo Editing",
        "Video Editing & Social Marketing",
        "Lead Generation Class",
        "Digital Marketing",
        "Products Sells and buy",
        "Data Entry",
        "Graphics Desgin",
        "Spoken English Training"
    ];*/

    const classes = [
        "Internet Offer sell and buy",
        "Al-Quran & Namaz Shikkha",
        "Photo Editing",
        "Video Editing",
        "Lead Generation",
        "Product Sell And Buy",
        "Spoken English",
        "Digital Marketing"
    ];
    return (
        <div className="p-4 sm:p-6 border-2 bg-gray-50 w-full max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[rgb(4,4,83)] text-center mb-6">Join Live Classes</h2>
            {classes.map((topic, index) => (
                <ClassCard key={index} topic={topic} />
            ))}
        </div>
    );
};

const JoinLiveClass = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
            <LiveClassesSection />
        </div>
    );
};

export default JoinLiveClass;