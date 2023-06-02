import styles from './CouponList.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoupons } from '../../../redux/coupons/couponsOperation';
import {
  setCoupons,
  selectCoupons,
} from '../../../redux/coupons/couponsSelector';
import {
  setCouponsSlice,
  deleteCouponsSlice,
} from '../../../redux/coupons/couponsSlice';

import CouponListItem from '../CouponListItem/CouponListItem';

const CouponList = () => {
  const dispatch = useDispatch();
  const couponItems = useSelector(selectCoupons);
  const setCoupon = useSelector(setCoupons);

  useEffect(() => {
    if (couponItems.length === 0) {
      dispatch(fetchCoupons());
    }
  }, [dispatch, couponItems]);

  const handlTakeCoupon = data => {
    dispatch(setCouponsSlice(data));
  };

  const handleDeactivateCoupon = () => {
    dispatch(deleteCouponsSlice());
  };

  return (
    <ul className={styles.shopList}>
      <CouponListItem
        handlTakeCoupon={handlTakeCoupon}
        handleDeactivateCoupon={handleDeactivateCoupon}
        couponItems={couponItems}
        setCoupon={setCoupon}
      />
    </ul>
  );
};

export default CouponList;
