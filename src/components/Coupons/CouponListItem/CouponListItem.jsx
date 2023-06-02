import styles from './CouponListItem.module.scss';
import { useNavigate } from 'react-router-dom';

const CouponListItem = ({
  couponItems,
  handleDeactivateCoupon,
  handlTakeCoupon,
  setCoupon,
}) => {
  const navigate = useNavigate();
  return couponItems.map(item => {
    return (
      <li key={item._id}>
        <div
          className={styles.couponContainer}
          style={{
            backgroundImage: `url(${item.imgD})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p className={styles.text}>{item.name}</p>
          <p className={styles.text}>Diskont {item.coupon} %</p>
          {setCoupon._id === item._id ? (
            <button
              type="button"
              onClick={() => {
                handleDeactivateCoupon();
              }}
            >
              Deactivate diskont
            </button>
          ) : (
            <button
              className={styles.btn}
              type="button"
              onClick={() => {
                handlTakeCoupon(item);
                navigate('/shopping');
              }}
            >
              Take diskont
            </button>
          )}
        </div>
      </li>
    );
  });
};

export default CouponListItem;
