const ShimmerCard = () => {
  return (
    <div
      style={{
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "1rem",
        padding: "1.5rem",
        width: "250px",
        textAlign: "center",
        animation: "pulse 1.5s infinite",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#ddd",
          borderRadius: "8px",
          margin: "0 auto 1rem auto",
        }}
      ></div>
      <div
        style={{
          height: "20px",
          backgroundColor: "#ddd",
          marginBottom: "0.5rem",
          borderRadius: "4px",
        }}
      ></div>
      <div
        style={{
          height: "16px",
          backgroundColor: "#ddd",
          width: "60%",
          margin: "0 auto",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
};

export default ShimmerCard;
