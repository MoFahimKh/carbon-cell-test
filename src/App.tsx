import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideNavBar } from "./components/sidebar";
import { Home } from "./pages/home";
import { CryptoPrices } from "./pages/crypto-prices";
import { PopulationGraph } from "./pages/population-graph";
import { SidebarContext } from "./context";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const { setSidebarOpen, sidebarIsOpen } = useContext(SidebarContext);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);

  return (
    <Router>
      <div className="App">
        <SideNavBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto-prices" element={<CryptoPrices />} />
          <Route path="/population-graph" element={<PopulationGraph />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
