import styles from './button.module.css';

const Button = ({ children, type = 'submit', onClick }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
