import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/authOperation';
import { isUserLogin } from '../../redux/auth/authSelector';

import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.scss';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/shop" />;
  }

  return (
    <div className="container">
      <h1 className={styles.page_title}>Login page</h1>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
