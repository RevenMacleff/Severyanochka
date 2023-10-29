import { FC } from "react";
import { IProduct } from "src/shared/models/IProduct";
import classes from "./Product.module.scss";
interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={classes.product}>
      {product.id}
      {product.name}
      {product.descr} {product.price}
      <img className={classes.img} src={product.photo} alt="photo" />
      <button>Delete</button>
    </div>
  );
};
export default ProductItem;
