// import React from 'react';

// const HelpSection = () => {
//     return (
//       <div className=" p-6 border-2 text-center">
//         {/* Centered Title */}
//         <h3 className="text-2xl font-semibold text-[rgb(4,4,83)] mb-4">Any Kind Of Problem</h3>
        
//         {/* Flex container for paragraph and button */}
//         <div className="flex items-center justify-center space-x-8 md:space-x-8">
//             <p className="text-gray-700 text-sm">Joining Time: 8:30AM - 11:30PM</p>
//             <button className="bg-black text-white font-bold px-8 md:px-12 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
//                 Join Meeting <span className="ml-2">→</span>
//             </button>
//         </div>
//       </div>

//     );
// };

// const TeamMember = ({ role, name }) => {
//     return (
//       <div className=''>
//         {/* Centered Title */}
//         <h3 className="text-2xl font-semibold text-[rgb(4,4,83)] mb-4">{ role }</h3>
        
//         {/* Flex container for paragraph and button */}
//         <div className="flex items-center justify-center space-x-8 md:space-x-8">
//             <p className="text-gray-700 text-sm">Name: {name}</p>
//             <button className="bg-black text-white font-bold px-8 md:px-12 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
//                 Join Meeting <span className="ml-2">→</span>
//             </button>
//         </div>
//       </div>
//     );
// };

// const SupportTeamSection = () => {
//     return (
//         <div className=" p-6 border text-center">
//           <TeamMember role="Team Leader" name="Asif Siddik" />
//           <TeamMember role="Trainer" name="MD MAZHARUL ISLAM BIDDUT" />
//         </div>
//     );
// };

// const MainComponent = () => {
//     return (
//         <div className="bg-white min-h-screen flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-bold text-[rgb(4,4,83)] mb-10">May I Help You?</h1>
//           <HelpSection />
//           <h2 className="text-4xl font-bold text-[rgb(4,4,83)] mb-4 text-center">Advice E-learning Support Team</h2>
//           <SupportTeamSection />
//         </div>
//     );
// };

// export default MainComponent;


// import React from 'react';

// const HelpSection = () => {
//     return (
//       <div className="p-6 border-2 text-center w-full max-w-md mx-auto">
//         {/* Centered Title */}
//         <h3 className="text-2xl font-semibold text-[rgb(4,4,83)] mb-4">Any Kind Of Problem</h3>
        
//         {/* Flex container for paragraph and button */}
//         <div className="flex items-center justify-between space-x-4">
//             <p className="text-gray-700 text-sm">Joining Time: 8:30AM - 11:30PM</p>
//             <button className="bg-black text-white font-bold px-8 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
//                 Join Meeting <span className="ml-2">→</span>
//             </button>
//         </div>
//       </div>
//     );
// };

// const TeamMember = ({ role, name }) => {
//     return (
//       <div className="p-4">
//         {/* Centered Title */}
//         <h3 className="text-2xl font-semibold text-[rgb(4,4,83)] mb-4">{role}</h3>
        
//         {/* Flex container for paragraph and button */}
//         <div className="flex items-center justify-between space-x-4">
//             <p className="text-gray-700 text-sm">Name: {name}</p>
//             <button className="bg-black text-white font-bold px-8 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
//                 Join Meeting <span className="ml-2">→</span>
//             </button>
//         </div>
//       </div>
//     );
// };

// const SupportTeamSection = () => {
//     return (
//         <div className="p-6 border-2 text-center w-full max-w-md mx-auto mt-6">
//           <TeamMember role="Team Leader" name="Asif Siddik" />
//           <TeamMember role="Trainer" name="MD MAZHARUL ISLAM BIDDUT" />
//         </div>
//     );
// };

// const MainComponent = () => {
//     return (
//         <div className="bg-white min-h-screen flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-bold text-[rgb(4,4,83)] mb-10">May I Help You?</h1>
//           <HelpSection />
//           <h2 className="text-4xl font-bold text-[rgb(4,4,83)] mb-4 text-center">Advice E-learning Support Team</h2>
//           <SupportTeamSection />
//         </div>
//     );
// };

// export default MainComponent;


// import React from 'react';

// const HelpSection = () => {
//     return (
//         <div className="p-4 sm:p-6 border-2 text-center">
//             {/* Centered Title */}
//             <h3 className="text-xl sm:text-2xl font-semibold text-[rgb(4,4,83)] mb-4">Any Kind Of Problem</h3>
            
//             {/* Flex container for paragraph and button */}
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//                 <p className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Joining Time: 8:30AM - 11:30PM</p>
//                 <button className="bg-black text-white font-bold px-6 sm:px-8 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
//                     Join Meeting <span className="ml-2">→</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// const TeamMember = ({ role, name }) => {
//     return (
//         <div className="p-4 sm:p-6 border text-center">
//             {/* Centered Title */}
//             <h3 className="text-xl sm:text-2xl font-semibold text-[rgb(4,4,83)] mb-4">{role}</h3>
            
//             {/* Flex container for paragraph and button */}
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//                 <p className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Name: {name}</p>
//                 <button className="bg-black text-white font-bold px-6 sm:px-8 py-2 rounded flex items-center justify-center hover:bg-gray-800 transition">
//                     Whatsapp <span className="ml-2">→</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// const SupportTeamSection = () => {
//     return (
//         <div className="p-4 sm:p-6 border-2 text-center">
//             <TeamMember role="Team Leader" name="Asif Siddik" />
//             <TeamMember role="Trainer" name="MD MAZHARUL ISLAM BIDDUT" />
//         </div>
//     );
// };

// const MainComponent = () => {
//     return (
//         <div className="bg-white min-h-screen flex flex-col items-center justify-center">
//             <h1 className="text-3xl sm:text-4xl font-bold text-[rgb(4,4,83)] mb-6 sm:mb-10">May I Help You?</h1>
//             <HelpSection />
//             <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(4,4,83)] mb-4 text-center">Advice E-learning Support Team</h2>
//             <SupportTeamSection />
//         </div>
//     );
// };

// export default MainComponent;


/* second content */

// import React from 'react';

// const ClassCard = ({ topic }) => {
//     return (
//         <div className="flex justify-between items-center p-4 border-2 mb-4 bg-white">
//             <div>
//                 <p className="text-sm text-black font-bold">Class Topic: <span className='text-gray-700 font-normal'>{topic}</span></p>
//                 <p className="text-sm text-black font-bold">Teacher:</p>
//             </div>
//             <button className="bg-gray-500 text-white font-bold px-6 sm:px-8 py-2 rounded flex items-center justify-center transition">
//                 Join Meeting!
//             </button>
//         </div>
//     );
// };

// const LiveClassesSection = () => {
//     const classes = [
//         "Offer sell and buy",
//         "Al Quran Hadish & Namaz Shikkha",
//         "Photo Editing",
//         "Video Editing & Social Marketing",
//         "Lead Generation Class",
//         "Digital Marketing",
//         "Products Sells and buy",
//         "Data Entry",
//         "Graphics Desgin",
//         "Spoken English Training"
//     ];

//     return (
//         <div className="p-4 sm:p-6 border-2 bg-gray-50 w-full max-w-3xl mx-auto">
//             <h2 className="text-2xl sm:text-3xl font-semibold text-[rgb(4,4,83)] text-center mb-6">Join Live Classes</h2>
//             {classes.map((topic, index) => (
//                 <ClassCard key={index} topic={topic} />
//             ))}
//         </div>
//     );
// };

// const MainComponent = () => {
//     return (
//         <div className="bg-white min-h-screen flex flex-col items-center justify-center">
//             <LiveClassesSection />
//         </div>
//     );
// };

// export default MainComponent;


/* third content */

// import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the CSS file for Bootstrap Icons

// const AdminSupport = () => {
//     return (
//         <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-md w-full max-w-4xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-semibold text-[rgb(4,4,83)] mb-2 sm:mb-0">My Admin Support</h2>
//             <div className="flex items-center space-x-2">
//                 <i className="bi bi-bell-fill text-gray-700 h-6 w-6"></i> {/* Bootstrap bell icon */}
//                 <p className="text-sm sm:text-base text-gray-700">Any kind of problem join here for solution</p>
//                 <button className="bg-black text-white font-semibold px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition">
//                     Whatsapp
//                 </button>
//             </div>
//         </div>
//     );
// };

// const MainComponent = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//             <AdminSupport />
//         </div>
//     );
// };

// export default MainComponent;




import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the CSS file for Bootstrap Icons

const AdminSupport = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-md w-full max-w-4xl mx-auto">
          
            <h2 className="text-3xl sm:text-4xl font-semibold text-[rgb(4,4,83)] mb-2 sm:mb-0">My Admin Support</h2>
          
            <div className="flex items-center space-x-2">
                <i className="bi bi-bell-fill text-gray-700 h-6 w-6"></i> {/* Bootstrap bell icon */}
                <p className="text-sm sm:text-base text-gray-700">Any kind of problem join here for solution</p>
                <button className="bg-black text-white font-semibold px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition">
                    Whatsapp
                </button>
            </div>
        </div>
    );
};

const MainComponent = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <AdminSupport />
        </div>
    );
};

export default MainComponent;




