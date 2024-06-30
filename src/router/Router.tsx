import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";
import Navbar from "../components/Navbar";
import Team from "../pages/Team";
import Work from "../pages/Work";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import { Career } from "@/pages/Career.tsx";
import ProjectDetails from "../pages/ProjectDetails";
import Login from "../pages/Login";
import Layout from "../layout/index.tsx";
import { AuthProtected } from "./AuthProtected.tsx";
import Dashboard from "../pages/dashboard/index.tsx";
import Logout from "@/pages/Logout.tsx";
import { BlogDetails } from "@/pages/BlogDetails.tsx";

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
        <Route path="projects">
          <Route index element={<Work />} />
          <Route path=":uniqueValue" element={<ProjectDetails />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="career" element={<Career />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />
      </Route>
      <Route path="admin-portal">
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route
          path="dashboard"
          element={
            <AuthProtected>
              <Layout>
                <Dashboard />
              </Layout>
            </AuthProtected>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
