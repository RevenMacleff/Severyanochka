import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Routing } from "src/pages";
import ProductItem from "./Product/Product";
import { classNames } from "src/shared/lib/classNames/classNames";
import { useAppDispatch, useAppSelector } from "src/shared/hooks/redux";
import { setProducts } from "src/shared/store/ProductSlice";
import { useTheme } from "./providers";
import { productAPI } from "src/shared/services/ProductService";

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
    <div className={classNames("app", {}, [theme])}>
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
