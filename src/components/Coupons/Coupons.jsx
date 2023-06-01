import styles from './Coupons.module.scss';
import CouponList from './CouponList/CouponList';

const Coupons = () => {
  return (
    <div className={styles.container}>
      <CouponList />
    </div>
  );
};

export default Coupons;
