import { FC } from "react";
import { IProduct } from "src/shared/models/IProduct";
import classes from "./Product.module.scss";
interface ProductItemProps {
  product: IProduct;
}

const Product: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={classes.product}>
      ({product.id})<p> {product.name}</p>
      <p> {product.descr}</p> <p>{product.price} руб</p>
      <img className={classes.img} src={product.photo} alt="photo" />
      {product.weight} грамм
      <button>купить</button>
    </div>
  );
};
export default Product;
