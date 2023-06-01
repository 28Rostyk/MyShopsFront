import { useDispatch } from 'react-redux';
import styles from './ShopListItem.module.scss';

const ShopListItem = ({ id, name, setShop, setSelectedShop }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        className={styles.btnShop}
        onClick={() => {
          dispatch(setShop(name));
          setSelectedShop(id);
          localStorage.setItem('shop', id);
        }}
      >
        {name}
      </button>
    </li>
  );
};

export default ShopListItem;
