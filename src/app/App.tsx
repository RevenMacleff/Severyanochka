import { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import ProductItem from "src/app/Product";

import { Routing } from "src/pages";
import { productAPI } from "src/services/ProductService";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { setProducts } from "src/store/ProductSlice";

const App = () => {
  const { data: products } = productAPI.useFetchAllPostsQuery();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [dispatch, products]);
  const food = useAppSelector((state) => state.product.products);

  return (
    <>
      <Link to={"/"}>главная</Link>
      <Link to={"/about"}>О сайте</Link>
      {products &&
        products.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
      {food &&
        food.map((product) => <ProductItem key={product.id} product={product}></ProductItem>)}
      <Routing></Routing>
    </>
  );
};

export default App;
