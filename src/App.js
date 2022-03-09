import React from "react";
import Main from "./components/Main";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ClassRoom from "./Pages/ClassRoom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/classroom" element={<ClassRoom />}></Route>
      </Routes>
    </>
  );
}

export default App;
