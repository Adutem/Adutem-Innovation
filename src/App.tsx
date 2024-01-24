import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Router from "./router/Router";
import { useLocation } from "react-router-dom";
import { checkInViewPort } from "./utils";

const handleWindowScroll = () => {
  const allCards = document.querySelectorAll(".fade-up-card");
  allCards.forEach((el: any) => {
    let inViewPort = checkInViewPort(el);
    inViewPort ? el.classList.add("opacityToggler") : void 0;
    // : image.classList.remove("opacityToggler");
  });
};

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  const hideNavBar = () => {
    setIsNavbarOpen(false);
    window.document.body.style.position = "relative";
    window.document.body.style.overflow = "visible";
    window.document.body.style.height = "auto";
  };

  const showNavBar = () => {
    setIsNavbarOpen(true);
    window.document.body.style.position = "fixed";
    window.document.body.style.overflow = "hidden";
    window.document.body.style.height = "100dvh";
  };

  const toggleNavBar = () => {
    if (isNavbarOpen) return hideNavBar();
    return showNavBar();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // Move page to top on location change irrespective of scroll position
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);
  return (
    <>
      {/* <Navbar isNavbarOpen={isNavbarOpen} toggleNavBar={toggleNavBar} /> */}
      {isNavbarOpen && <Nav hideNavBar={hideNavBar} />}
      {/* <Home /> */}
      <Router isNavbarOpen={isNavbarOpen} toggleNavBar={toggleNavBar} />
    </>
  );
}

export default App;
