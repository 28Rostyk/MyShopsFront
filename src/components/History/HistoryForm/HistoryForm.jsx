import styles from './HistoryForm.module.scss';

const HistoryForm = ({ onHandleChange, email, phone }) => {
  return (
    <div className={styles.container_shop}>
      <ul className={styles.form_list}>
        <li className={styles.form_list_item}>
          <label className={styles.form_label}>
            Email:
            <input
              className={styles.form_input}
              type="text"
              name="email"
              placeholder="User email"
              value={email}
              onChange={onHandleChange}
              required
            />
          </label>
        </li>
        <li className={styles.form_list_item}>
          <label className={styles.form_label}>
            Phone:
            <input
              className={styles.form_input}
              type="text"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={onHandleChange}
              required
            />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default HistoryForm;
