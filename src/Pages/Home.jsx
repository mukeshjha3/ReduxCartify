import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";
import useProduct from "../Utils/useProduct";
import ShimmerCard from "../Components/ShimmerCard";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useProduct();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      {products.length === 0
        ? Array(10)
            .fill(null)
            .map((_, i) => <ShimmerCard key={i} />)
        : products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleClick={handleAddToCart}
              buttonText="Add to Cart"
            />
          ))}
    </div>
  );
};

export default Home;
