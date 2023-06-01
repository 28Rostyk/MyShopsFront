import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth';
import UserNavigation from './UserNavigation';

import { isUserLogin } from '../../redux/auth/authSelector';
import { orderProduct } from 'redux/orders/ordersSelector';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  const order = useSelector(orderProduct);

  return (
    <>
      <ul className={styles.menu}>
        <NavLink className={styles.link} to="/shop">
          <p>Shop</p>
        </NavLink>
        {order.products.length !== 0 && (
          <NavLink className={styles.link} to="/shopping">
            <p>Shopping Cart</p>
          </NavLink>
        )}
        {isLogin && (
          <>
            <NavLink className={styles.link} to="/coupons">
              <p>Coupons</p>
            </NavLink>
            <NavLink className={styles.link} to="/history">
              <p>History</p>
            </NavLink>
          </>
        )}
      </ul>
      <div className={styles.menu_spacer}>
        {!isLogin && <NavbarAuth />}
        {isLogin && <UserNavigation />}
      </div>
    </>
  );
};

export default Navigation;
