import { isUserLogin } from '../../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import styles from './ShoppingCartForm.module.scss';
const ShoppingCartForm = ({
  handleSubmit,
  onChange,
  order,
  productItems,
  coupon,
  products,
  navigate,
}) => {
  const isLogin = useSelector(isUserLogin);
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.containerShop}>
        <div></div>
        <ul className={styles.productList}>
          <li className={styles.productList_item}>
            <label className={styles.form_label}>
              Email:
              <input
                className={styles.form_input}
                type="text"
                name="email"
                placeholder="User email"
                value={order.owner}
                onChange={onChange}
                required
              />
            </label>
          </li>
          <li className={styles.productList_item}>
            <label className={styles.form_label}>
              Address:
              <input
                className={styles.form_input}
                type="text"
                name="customerLocation"
                placeholder="Address"
                value={order.customerLocation}
                onChange={onChange}
                required
              />
            </label>
          </li>

          <li className={styles.productList_item}>
            <label className={styles.form_label}>
              Phone:
              <input
                className={styles.form_input}
                type="text"
                name="customerPhone"
                placeholder="Phone"
                value={order.customerPhone}
                onChange={onChange}
                required
              />
            </label>
          </li>
          <li className={styles.productList_item}>
            <label className={styles.form_label}>
              Name:
              <input
                className={styles.form_input}
                type="text"
                name="customerName"
                placeholder="Name"
                value={order.customerName}
                onChange={onChange}
                required
              />
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.productWrapper}>
        <div className={styles.containerProduct}>
          {products && <ul>{productItems}</ul>}
        </div>
        <div>
          {coupon.coupon ? (
            <p>
              Total price with diskont {coupon.coupon} %: {order.priceAll} $
            </p>
          ) : (
            <p>Total price: {order.priceAll} $</p>
          )}

          {isLogin && (
            <button type="button" onClick={() => navigate('/coupons')}>
              Coupons
            </button>
          )}
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ShoppingCartForm;
