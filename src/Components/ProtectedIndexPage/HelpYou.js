import React from 'react';

const HelpSection = () => {
    return (
        <div className="p-4 sm:p-6 border-2 text-center">
            {/* Centered Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[rgb(4,4,83)] mb-4">Any Kind Of Problem</h3>
            
            {/* Flex container for paragraph and button */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <p className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Joining Time: 10:30AM - 8:30PM</p>
                <button className="bg-black text-white font-bold px-6 sm:px-8 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
                    Join Meeting <span className="ml-2">→</span>
                </button>
            </div>
        </div>
    );
};

const TeamMember = ({ role, name }) => {
    return (
        <div className="p-4 sm:p-6 border text-center">
            {/* Centered Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[rgb(4,4,83)] mb-4">{role}</h3>
            
            {/* Flex container for paragraph and button */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <p className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Name: {name}</p>
                <button className="bg-black text-white font-bold px-6 sm:px-8 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
                    Whatsapp <span className="ml-2">→</span>
                </button>
            </div>
        </div>
    );
};

const SupportTeamSection = () => {
    return (
        <div className="p-4 sm:p-6 border-2 text-center">
            <TeamMember role="Team Leader" name="" />
            <TeamMember role="Trainer" name="" />
        </div>
    );
};

const HelpYou = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[rgb(4,4,83)] mb-6 sm:mb-10">May I Help You?</h1>
            <HelpSection />
            <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(4,4,83)] mb-4 text-center">Advice E-learning Support Team</h2>
            <SupportTeamSection />
        </div>
    );
};

export default HelpYou;