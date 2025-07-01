import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { removeFromCart } from "../redux/Slices/CartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return cartProducts.length === 0 ? (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#4f46e5",
        fontFamily: "sans-serif",
      }}
    >
      <span style={{ fontSize: "4rem" }}>🛒❌</span>
      <h1 style={{ fontSize: "2rem", marginTop: "1rem" }}>
        Oops! Your Cart is Empty
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "0.5rem", color: "#666" }}>
        Go grab something amazing!
      </p>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      {cartProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          handleClick={handleRemoveFromCart}
          buttonText="Remove"
        />
      ))}
    </div>
  );
};

export default Cart;
