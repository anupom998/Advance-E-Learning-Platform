import "./App.css";
import HomeLayout from "./Layouts/HomeLayout";
import StudentLayout from "./Layouts/StudentLayout";
import IndexPage from "./Pages/IndexPage";
import ProfileSetting from "./Pages/Student/ProfileSetting";
/**
 * Task : Setup the APP router
 */
function App() {
  return (
    // <HomeLayout>
    //   <IndexPage />
    // </HomeLayout>

    /**
     *Student pages => should be in private route
     * add prefix of "student"
     */
    <StudentLayout>
      <ProfileSetting />
    </StudentLayout>
  );
}

export default App;
