import React from "react";
import Main from "./Pages/Main";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CallPage from "./Pages/CallPage";
import NoMatch from "./Pages/NoMatch";
import Container from './components/container/Container';

function App() {
  return (
    // <Container/>
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/:id" element={<CallPage />}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
