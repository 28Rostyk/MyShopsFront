import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/authOperation';

import { getUser } from '../../../redux/auth/authSelector';

import styles from './UserNavigation.module.scss';
import defaultAvatar from './avatar.png';
import Button from 'shared/Button/Button';

const UserNavigation = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={styles.avatar}
      />
      <span className={styles.name}>Welcome, {email}</span>

      <Button className={styles.Button} type="button" onClick={onLogout}>
        Log out
      </Button>
    </div>
  );
};

export default UserNavigation;
