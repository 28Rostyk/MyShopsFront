import ProductListItem from '../ProductListItem';
import styles from './ProductList.module.scss';

const ProductList = ({
  products,
  productItem,
  handlRemoveProduct,
  handlTakeProduct,
}) => {
  return (
    <ul className={styles.productList}>
      {products.map(product => {
        return (
          <ProductListItem
            key={product._id}
            product={product}
            productItem={productItem}
            handlRemoveProduct={handlRemoveProduct}
            handlTakeProduct={handlTakeProduct}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
