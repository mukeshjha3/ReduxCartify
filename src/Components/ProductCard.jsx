// src/Components/ProductCard.jsx
import { useSelector } from "react-redux";

const ProductCard = ({ product, handleClick, buttonText }) => {
  const darkTheme = useSelector((state) => state.theme);

  const styles = {
    card: {
      borderRadius: "12px",
      boxShadow: darkTheme
        ? "0 6px 12px rgba(11, 10, 10, 0.1)"
        : "0 6px 12px rgba(0, 0, 0, 0.438)",
      margin: "1rem",
      padding: "1rem",
      width: "240px",
      minHeight: "360px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: darkTheme ? "#1e293b" : "#ffffff", // Dark: slate-800, Light: white
      color: darkTheme ? "#f1f5f9" : "#111827", // Dark: slate-100, Light: slate-900
      transition: "transform 0.3s, background-color 0.3s, color 0.3s",
    },
    image: {
      width: "120px",
      height: "120px",
      objectFit: "contain",
      alignSelf: "center",
      marginBottom: "1rem",
    },
    title: {
      fontSize: "1rem",
      textAlign: "center",
      marginBottom: "1rem",
      height: "3.5rem",
      overflow: "hidden",
    },
    priceButtonContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price: {
      fontWeight: "bold",
      color: "#4f46e5",
    },
    button: {
      backgroundColor: "#4f46e5",
      color: "#ffffff",
      border: "none",
      padding: "0.4rem 0.8rem",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h2 style={styles.title}>{product.title}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginBottom: "0.5rem",
        }}
      >
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className="ri-star-fill"
            style={{
              color:
                index < Math.round(product.rating.rate) ? "#facc15" : "#e5e7eb",
              fontSize: "1.1rem",
              margin: "0 2px",
            }}
          ></i>
        ))}
      </div>
      <div style={styles.priceButtonContainer}>
        <p style={styles.price}>${product.price}</p>
        <button onClick={() => handleClick(product)} style={styles.button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
