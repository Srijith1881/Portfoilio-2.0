import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, About, Contact, Hero, Projects, Techs } from "./components/index";
import Credits from "./components/Credits";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading time (e.g., 2s)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />

        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="techs">
          <Techs />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Credits />
      </div>
    </BrowserRouter>
  );
};

export default App;
