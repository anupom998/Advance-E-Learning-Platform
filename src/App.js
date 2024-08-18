import "./App.css";
import HomeLayout from "./Layouts/HomeLayout";
import IndexPage from "./Pages/IndexPage";
// import SignIn from "./Pages/Login/SignIn";

function App() {
  return (
    <HomeLayout>
      <IndexPage />
    </HomeLayout>
    // <SignIn />
  );
}

export default App;
