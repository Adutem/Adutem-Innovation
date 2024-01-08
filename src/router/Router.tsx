import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";
import Navbar from "../components/Navbar";

interface Props {
  toggleNavBar: () => void;
  isNavbarOpen: boolean;
}

const Router = ({ isNavbarOpen, toggleNavBar }: Props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navbar isNavbarOpen={isNavbarOpen} toggleNavBar={toggleNavBar} />
        }
      >
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
