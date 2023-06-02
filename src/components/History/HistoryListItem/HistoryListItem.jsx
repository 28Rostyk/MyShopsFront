import styles from './HistoryListItem.module.scss';

const HistoryListItem = ({ allOrders }) => {
  return allOrders.map(order => (
    <li className={styles.order_list} key={order._id}>
      <ul className={styles.list_container}>
        {order.products.map(product => (
          <li className={styles.product_list} key={product._id}>
            <div
              className={styles.img}
              style={{
                backgroundImage: `url(${product.imgProd})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className={styles.container_product}>
              <p>{product.nameProduct}</p>
              <p>Price: {product.price}</p>
              <p>
                Price for {product.quantity} ={product.quantity * product.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.order_container}>
        <p>Total price: {order.priceAll} $</p>
      </div>
    </li>
  ));
};

export default HistoryListItem;
