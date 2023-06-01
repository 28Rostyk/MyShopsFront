import TextField from '../../shared/TextField/TextField';
import Button from '../../shared/Button/Button';

import useForm from '../../shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import css from './register-form.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      {/* <TextField
        className={css.textField}
        value={name}
        handleChange={handleChange}
        {...fields.name}
      /> */}
      <TextField
        className={css.textField}
        value={email}
        handleChange={handleChange}
        {...fields.email}
      />
      <TextField
        className={css.textField}
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
