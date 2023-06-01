import styles from './Coupons.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoupons } from 'redux/coupons/couponsOperation';
import { setCoupons, selectCoupons } from 'redux/coupons/couponsSelector';
import {
  setCouponsSlice,
  deleteCouponsSlice,
} from '../../redux/coupons/couponsSlice';

import { useNavigate } from 'react-router-dom';

const Coupons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const diskontsItems = useSelector(selectCoupons);
  const setDis = useSelector(setCoupons);

  useEffect(() => {
    if (diskontsItems.length === 0) {
      dispatch(fetchCoupons());
    }
  }, [dispatch]);

  const handlTakeDiskont = data => {
    dispatch(setCouponsSlice(data));
  };

  const handleDeactivateDiskont = () => {
    dispatch(deleteCouponsSlice());
  };

  const diskontItem = diskontsItems.map(diskont => {
    return (
      <li key={diskont._id}>
        <div className={styles.divDiskont}>
          <p>{diskont.name}</p>
          <p>Diskont {diskont.coupon} %</p>
          {setDis._id === diskont._id ? (
            <button
              type="button"
              onClick={() => {
                handleDeactivateDiskont();
              }}
            >
              Deactivate diskont
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handlTakeDiskont(diskont);
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

  return (
    <div className={styles.container}>
      <ul className={styles.shopUl}>{diskontItem}</ul>
    </div>
  );
};

export default Coupons;
