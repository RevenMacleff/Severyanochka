import { useAppSelector } from "src/shared/hooks/redux";
import classes from "./ProductList.module.scss";
import { productAPI } from "src/shared/services/ProductService";
import { Filters } from "src/features/Filters";
import { Product } from "src/entities/Product";

const ProductList = () => {
  const category = useAppSelector((state) => state.product.category);
  const { data: products } = productAPI.useFetchFilteredProductsQuery(category);

  return (
    <div>
      <Filters></Filters>
      <div className={classes.list}>
        {products &&
          products.map((product) => <Product key={product.id} product={product}></Product>)}
      </div>
    </div>
  );
};

export default ProductList;
