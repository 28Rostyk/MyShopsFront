import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { register } from '../../redux/auth/authOperation';
import { isUserLogin } from '../../redux/auth/authSelector';

import RegisterForm from '../../components/RegisterForm';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();

  const handleSignup = data => {
    console.log(data);
    dispatch(register(data));
  };

  if (isLogin) {
    return <Navigate to="/shop" />;
  }

  return (
    <div className="container">
      <h1 className={styles.page_title}>Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
