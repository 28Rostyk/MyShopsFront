import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAllShops } from '../../redux/shops/shopsSelector';
import { fetchAllShops } from '../../redux/shops/shopsOperation';
import { fetchProducts } from '../../redux/products/productsOperation';
import { selectProducts } from '../../redux/products/productsSelector';
import ShopList from './ShopList';
import ProductList from './ProductList';

import styles from './Shops.module.scss';
import {
  deleteProducts,
  setProducts,
  setProductsLocal,
  setShop,
} from '../../redux/orders/ordersSlice';
import { orderProduct } from '../../redux/orders/ordersSelector';

const Shops = () => {
  const dispatch = useDispatch();
  const [selectedShop, setSelectedShop] = useState(null);
  const [product, setProduct] = useState([]);

  const shopsItems = useSelector(selectAllShops);
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (
      localStorage.getItem('products') !== null &&
      localStorage.getItem('products').length !== 0
    ) {
      const localProduct = JSON.parse(localStorage.getItem('products'));
      const localShop = localStorage.getItem('shop');
      const localShopName = localStorage.getItem('shopName');
      dispatch(setProductsLocal(localProduct));
      dispatch(setShop(localShopName));

      setSelectedShop(localShop);
      setProduct([...localProduct.map(el => el._id)]);
    }
    if (shopsItems.length === 0) {
      dispatch(fetchAllShops());
    }
  }, [dispatch, shopsItems]);
  const { products: orderProducts } = useSelector(orderProduct);

  useEffect(() => {
    if (orderProducts.length === 0) {
      dispatch(fetchProducts(selectedShop));
    } else {
      dispatch(fetchProducts(selectedShop));
      setProduct([...orderProducts.map(el => el._id)]);
    }
  }, [selectedShop, dispatch, orderProducts]);

  const handlTakeProduct = data => {
    dispatch(setProducts(data));
    setProduct([...product, data._id]);
  };

  const handlRemoveProduct = data => {
    dispatch(deleteProducts(data));
    product.splice(product.indexOf(data._id), 1);
    setProduct(product.filter(el => el._id !== data._id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_shop}>
        <p>Shops:</p>
        {product.length === 0 && (
          <ShopList
            shop={shopsItems}
            setSelectedShop={setSelectedShop}
            setShop={setShop}
          />
        )}
        {product.length === 0 || (
          <p className={styles.text}>
            You have selected a store. if you want to go back click delete
            product
          </p>
        )}
      </div>
      <div className={styles.container_prod}>
        <p>Products:</p>
        {products && (
          <ProductList
            products={products}
            productItem={product}
            handlRemoveProduct={handlRemoveProduct}
            handlTakeProduct={handlTakeProduct}
          />
        )}
      </div>
    </div>
  );
};

export default Shops;
