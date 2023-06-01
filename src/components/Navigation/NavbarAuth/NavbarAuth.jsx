import { NavLink } from 'react-router-dom';

import styles from './NavbarAuth.module.scss';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={styles.link}>
        Sign up
      </NavLink>
      |
      <NavLink to="/login" className={styles.link}>
        Log in
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
