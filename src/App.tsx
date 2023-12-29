import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
