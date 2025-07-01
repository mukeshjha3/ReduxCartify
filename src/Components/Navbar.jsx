import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/Slices/ThemeSlice";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.theme);
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <nav
      style={{
        background: isDarkMode
          ? "linear-gradient(135deg, #0f172a, #1e293b)"
          : "linear-gradient(135deg, #f9fafb, #e5e7eb)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: isDarkMode
          ? "0 4px 12px rgba(0,0,0,0.5)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: isDarkMode ? "#93c5fd" : "#2563eb",
            transition: "color 0.3s ease",
          }}
        >
          eKART
        </div>
      </Link>

      {/* Navigation */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {/* Home */}
        <Link
          to="/"
          style={{
            color: isDarkMode ? "#e2e8f0" : "#1f2937",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "1rem",
            transition: "color 0.3s ease",
          }}
        >
          Home
        </Link>

        {/* Cart */}
        <Link to="/cart" style={{ position: "relative" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDarkMode ? "#e2e8f0" : "#1e293b"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ cursor: "pointer", transition: "stroke 0.3s ease" }}
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
          </svg>
          {cartProducts.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "#ef4444",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.7rem",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 4px rgba(0,0,0,0.3)",
              }}
            >
              {cartProducts.length}
            </span>
          )}
        </Link>

        {/* Theme Toggle */}
        <div
          onClick={() => dispatch(changeTheme())}
          style={{
            cursor: "pointer",
            position: "relative",
            width: "48px",
            height: "26px",
            backgroundColor: isDarkMode ? "#334155" : "#cbd5e1",
            borderRadius: "999px",
            transition: "background-color 0.3s ease",
            display: "flex",
            alignItems: "center",
            padding: "3px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: isDarkMode ? "24px" : "3px",
              width: "20px",
              height: "20px",
              backgroundColor: isDarkMode ? "#e2e8f0" : "#ffffff",
              borderRadius: "50%",
              transition: "left 0.3s ease",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isDarkMode ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
