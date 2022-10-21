import React from "react";
import {
  BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import SignUp from "../ClassWork/signup";
import Login from "../ClassWork/login";
import Home from "../ClassWork/home";
import Todoscreen from "../pages/todoscreen";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="todoscreen" element={<Todoscreen/>}></Route>
      </Routes>
    </Router>
  );
}

