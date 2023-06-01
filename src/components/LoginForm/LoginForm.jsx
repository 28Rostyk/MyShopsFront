import TextField from '../../shared/TextField/TextField';

import Button from '../../shared/Button/Button';

import useForm from '../../shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import styles from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        className={styles.textField}
        value={email}
        handleChange={handleChange}
        {...fields.email}
      />
      <TextField
        className={styles.textField}
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default LoginForm;
