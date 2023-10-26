import { FC } from "react";
import { IProduct } from "src/models/IProduct";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="post">
      {product.id}
      {product.name}
      {product.descr} {product.price}
      <button>Delete</button>
    </div>
  );
};
export default ProductItem;
