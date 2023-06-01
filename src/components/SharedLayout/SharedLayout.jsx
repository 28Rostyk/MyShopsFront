import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
