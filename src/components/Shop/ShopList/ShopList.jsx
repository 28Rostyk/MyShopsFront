import styles from './ShopList.module.scss';
import ShopListItem from '../ShopListItem';

const ShopList = ({ shop, setSelectedShop, setShop }) => {
  return (
    <ul className={styles.shopList}>
      {shop.map(({ _id, name }) => {
        return (
          <ShopListItem
            key={_id}
            id={_id}
            name={name}
            setSelectedShop={setSelectedShop}
            setShop={setShop}
          />
        );
      })}
    </ul>
  );
};

export default ShopList;
