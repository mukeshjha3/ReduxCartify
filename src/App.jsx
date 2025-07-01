import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.theme);

  return (
    <div
      style={{
        background: isDarkMode
          ? "linear-gradient(135deg, #1e293b, #334155)"
          : "linear-gradient(135deg, #ffffff, #e2e8f0)",
        color: isDarkMode ? "#e2e8f0" : "#1e293b",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
