import { NavLink } from 'react-router-dom';
import LogoIcon from 'icon/Logo';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">{LogoIcon}</NavLink>

      <ul className={styles.menu}>
        <NavLink className={styles.link} to="/">
          <p>Shop</p>
        </NavLink>
        <NavLink className={styles.link} to="/my-cart">
          <p>Shopping Cart</p>
        </NavLink>
      </ul>
    </header>
  );
}
