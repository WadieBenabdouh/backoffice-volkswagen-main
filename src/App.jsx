import "./App.module.scss";
import Login from "./components/Auth/Login/Login";
// import Signup from "./components/Auth/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* //TODO No need for a sign up page, Mehdi told me we will manually create accounts for them in Firebase */}
      {/* <Signup/> */}
      <Dashboard />
    </>
  );
}

export default App;
