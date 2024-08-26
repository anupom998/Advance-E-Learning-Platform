// import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the CSS file for Bootstrap Icons

// const ChildAdminSupport = () => {
//     return (
//         <div className="flex flex-col items-center justify-between p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-md w-full max-w-4xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-semibold text-[rgb(4,4,83)] mb-4">
//                 My Admin Support
//             </h2>
//             <div className="flex items-center space-x-2">
//                 <i className="bi bi-bell-fill text-gray-700 h-6 w-6"></i> {/* Bootstrap bell icon */}
//                 <p className="text-sm text-center sm:text-base text-gray-700">
//                     Any kind of problem join here for solution
//                 </p>
//                 <button className="bg-black text-white font-semibold px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition">
//                     Whatsapp
//                 </button>
//             </div>
//         </div>
//     );
// };

// const AdminSupport = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//             <ChildAdminSupport />
//         </div>
//     );
// };

// export default AdminSupport;

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the CSS file for Bootstrap Icons

const ChildAdminSupport = () => {
    return (
        <div className="flex flex-col items-center justify-between p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-md w-full max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[rgb(4,4,83)] mb-4">
                My Admin Support
            </h2>
            <div className="flex items-center space-x-2">
                <i className="bi bi-bell-fill text-gray-700 h-6 w-6"></i> {/* Bootstrap bell icon */}
                <p className="text-sm text-center sm:text-base text-gray-700">
                    Any kind of problem join here for solution
                </p>
                <button className="bg-black text-white font-semibold px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition">
                    Whatsapp
                </button>
            </div>
        </div>
    );
};

const AdminSupport = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center w-full">
            <ChildAdminSupport />
        </div>
    );
};

export default AdminSupport;