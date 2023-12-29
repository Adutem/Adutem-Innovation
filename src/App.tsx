import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
