import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import UserList from "./component/UserList/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
