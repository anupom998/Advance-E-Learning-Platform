import React from "react";
import {
  
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// layouts
import HomeLayout from "./Layouts/HomeLayout";
import StudentLayout from "./Layouts/StudentLayout";

// useAuth
import { useAuth } from './hooks/useAuth';

// logins
import SignUp from "./Pages/Login/SignUp";
import SignIn from "./Pages/Login/SignIn";
import AdminLogIn from "./Pages/Login/AdminLogIn";
import SubAdminLogIn from "./Pages/Login/SubAdminLogIn";

// main pages
import HomeWork from "./Pages/Normal/HomeWork";
import AirdropEarn from "./Pages/Normal/AirdropEarn";
import MyLearning from "./Pages/Normal/MyLearning";
import Profile from "./Pages/Normal/Profile";
import VideoEarn from "./Pages/Normal/VideoEarn";

import IndexPage from "./Pages/IndexPage";
import ProtectedIndexPage from "./Pages/Normal/ProtectedIndexPage";


const App = () => {
  const { isLoggedIn } = useAuth();
  console.log('Is logged in:', isLoggedIn);


  return (
    
      <Routes>
        {/* Public Routes - HomeLayout */}
        {!isLoggedIn ? (
          <>
            <Route
              path="/"
              element={
                <HomeLayout>
                  <IndexPage />
                </HomeLayout>
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/admin-login" element={<AdminLogIn />} />
            <Route path="/subadmin-login" element={<SubAdminLogIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          // Protected Routes - StudentLayout
          <>
            <Route
              path="/"
              element={
                <StudentLayout>
                  <ProtectedIndexPage />
                </StudentLayout>
              }
            />
            <Route
              path="/student/course"
              element={
                <StudentLayout>
                  <MyLearning />
                </StudentLayout>
              }
            />
            <Route
              path="/student/my-homeworks"
              element={
                <StudentLayout>
                  <HomeWork />
                </StudentLayout>
              }
            />
            <Route
              path="/student/my-earnings"
              element={
                <StudentLayout>
                  <VideoEarn />
                </StudentLayout>
              }
            />
            <Route
              path="/student/airdrop-earn"
              element={
                <StudentLayout>
                  <AirdropEarn />
                </StudentLayout>
              }
            />
            <Route
              path="/student/profile"
              element={
                <StudentLayout>
                  <Profile />
                </StudentLayout>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    
  );
};
 

export default App;

// 2nd


// const App = () => {
 


//   return (
    
//       <Routes>
       
       
          
//             <Route
//               path="/"
//               element={
//                 <HomeLayout>
//                   <IndexPage />
//                 </HomeLayout>
//               }
//             />
//             <Route path="/sign-up" element={<SignUp />} />
//             <Route path="/login" element={<SignIn />} />
//             <Route path="/admin-login" element={<AdminLogIn />} />
//             <Route path="/subadmin-login" element={<SubAdminLogIn />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
      
          
          
//             <Route
//               path="/student"
//               element={
//                 <StudentLayout>
//                   <ProtectedIndexPage />
//                 </StudentLayout>
//               }
//             />
//             <Route
//               path="/student/course"
//               element={
//                 <StudentLayout>
//                   <MyLearning />
//                 </StudentLayout>
//               }
//             />
//             <Route
//               path="/student/my-homeworks"
//               element={
//                 <StudentLayout>
//                   <HomeWork />
//                 </StudentLayout>
//               }
//             />
//             <Route
//               path="/student/my-earnings"
//               element={
//                 <StudentLayout>
//                   <VideoEarn />
//                 </StudentLayout>
//               }
//             />
//             <Route
//               path="/student/airdrop-earn"
//               element={
//                 <StudentLayout>
//                   <AirdropEarn />
//                 </StudentLayout>
//               }
//             />
//             <Route
//               path="/student/profile"
//               element={
//                 <StudentLayout>
//                   <Profile />
//                 </StudentLayout>
//               }
//             />
            
         
        
//       </Routes>
    
//   );
// };

// export default App;


// 3rd
// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import { AuthProvider } from "./hooks/useAuth"; // Import AuthProvider

// // useAuth
// import { useAuth } from './hooks/useAuth';

// // layouts
// import HomeLayout from "./Layouts/HomeLayout";
// import StudentLayout from "./Layouts/StudentLayout";

// // logins
// import SignUp from "./Pages/Login/SignUp";
// import SignIn from "./Pages/Login/SignIn";
// import AdminLogIn from "./Pages/Login/AdminLogIn";
// import SubAdminLogIn from "./Pages/Login/SubAdminLogIn";

// // main pages
// import HomeWork from "./Pages/Normal/HomeWork";
// import AirdropEarn from "./Pages/Normal/AirdropEarn";
// import MyLearning from "./Pages/Normal/MyLearning";
// import Profile from "./Pages/Normal/Profile";
// import VideoEarn from "./Pages/Normal/VideoEarn";
// import IndexPage from "./Pages/IndexPage";
// import ProtectedIndexPage from "./Pages/Normal/ProtectedIndexPage";

// const App = () => {
//   const { isLoggedIn } = useAuth();
//   console.log(isLoggedIn);
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <HomeLayout>
//               <IndexPage />
//             </HomeLayout>
//           }
//         />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/admin-login" element={<AdminLogIn />} />
//         <Route path="/subadmin-login" element={<SubAdminLogIn />} />
//         <Route path="*" element={<Navigate to="/" replace />} />

//         <Route
//           path="/student"
//           element={
//             <StudentLayout>
//               <ProtectedIndexPage />
//             </StudentLayout>
//           }
//         />
//         <Route
//           path="/student/course"
//           element={
//             <StudentLayout>
//               <MyLearning />
//             </StudentLayout>
//           }
//         />
//         <Route
//           path="/student/my-homeworks"
//           element={
//             <StudentLayout>
//               <HomeWork />
//             </StudentLayout>
//           }
//         />
//         <Route
//           path="/student/my-earnings"
//           element={
//             <StudentLayout>
//               <VideoEarn />
//             </StudentLayout>
//           }
//         />
//         <Route
//           path="/student/airdrop-earn"
//           element={
//             <StudentLayout>
//               <AirdropEarn />
//             </StudentLayout>
//           }
//         />
//         <Route
//           path="/student/profile"
//           element={
//             <StudentLayout>
//               <Profile />
//             </StudentLayout>
//           }
//         />
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;
