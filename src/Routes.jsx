import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Chat = React.lazy(() => import("pages/Chat"));
const ConnectFb = React.lazy(() => import("pages/ConnectFb"));
const Login = React.lazy(() => import("pages/Login"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connectfb" element={<ConnectFb />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
