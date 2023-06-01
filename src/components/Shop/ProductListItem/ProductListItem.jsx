import styles from './ProductListItem.module.scss';

const ProductListItem = ({
  product,
  productItem,
  handlRemoveProduct,
  handlTakeProduct,
}) => {
  return (
    <li className={styles.productLi} key={product._id}>
      <div className={styles.imgP}>
        <img className={styles.img} src={product.imgProd} alt="" />
      </div>

      <p className={styles.productP}>{product.nameProduct}</p>
      <p className={styles.productP}>Price: {product.price} ₴</p>
      {productItem.includes(product._id) ? (
        <button
          className={styles.productBtn}
          onClick={() => handlRemoveProduct(product)}
        >
          Delete in Cart
        </button>
      ) : (
        <button
          className={styles.productBtn}
          onClick={() => {
            handlTakeProduct(product);
          }}
        >
          Add to Cart
        </button>
      )}
    </li>
  );
};

export default ProductListItem;
