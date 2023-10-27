import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Routing } from "src/pages";
import { productAPI } from "src/services/ProductService";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { setProducts } from "src/store/ProductSlice";
import ProductItem from "src/app/Product/Product";
import "./styles/index.scss";
import { useTheme } from "src/theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { data: products } = productAPI.useFetchAllPostsQuery();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [dispatch, products]);
  const food = useAppSelector((state) => state.product.products);

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Изменение темы</button>
      <Link to={"/"}>главная</Link>
      <Link to={"/about"}>О сайте</Link>
      {products &&
        products.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
      {food &&
        food.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
      <Routing></Routing>
    </div>
  );
};

export default App;
