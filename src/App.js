import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Error404 from "./pages/Error404";
import BlogPage from "./pages/blogs";
import Forgot_password from './pages/ForgotPassword';
import SignupPage from './pages/signup';
import Profile from './pages/profile';
// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route exact path="/signin/forgotPassword" element={<Forgot_password/>}/>
        <Route path="/*" element={<Error404 />} />
        <Route exact path="/signup" element={<SignupPage/>}/>
        <Route exact path="/profile" element={<Profile />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
