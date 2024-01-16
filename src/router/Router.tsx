import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";
import Navbar from "../components/Navbar";
import Team from "../pages/Team";
import Work from "../pages/Work";

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
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
