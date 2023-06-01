import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';

import styles from './ShoppingCart.module.scss';
import {
  setCustumer,
  setPriceAll,
  setProductQuantity,
} from '../../redux/orders/ordersSlice';
import { orderProduct } from '../../redux/orders/ordersSelector';
import { useNavigate } from 'react-router-dom';
import { addOrderOp } from '../../redux/orders/ordersOperation';
import { setCoupons } from '../../redux/coupons/couponsSelector';

import ShoppingCartForm from './ShoppingCartForm/ShoppingCartForm';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector(orderProduct);
  const coupon = useSelector(setCoupons);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (order.products.length === 0) {
      navigate('/shop');
    }
    setProducts(order.products);
  }, [order, navigate]);

  const handleChange = useCallback(
    (e, data) => {
      dispatch(
        setProductQuantity({ quantity: Number(e.target.value), _id: data })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (products.length !== 0) {
      if (coupon.coupon) {
        dispatch(
          setPriceAll(
            products
              .map(product => {
                return (
                  ((product.price * product.quantity) / 100) *
                  (100 - coupon.coupon)
                );
              })
              .reduce((acc, prod) => {
                acc += prod;
                return acc;
              })
          )
        );
      } else {
        dispatch(
          setPriceAll(
            products
              .map(product => {
                return product.price * product.quantity;
              })
              .reduce((acc, prod) => {
                acc += prod;
                return acc;
              })
          )
        );
      }
    } else {
      dispatch(setPriceAll(0));
    }
  }, [handleChange, coupon, dispatch, products]);

  const productItems = products.map(product => {
    return (
      <li className={styles.productItem} key={product._id}>
        <div className={styles.containerImg}>
          <img className={styles.img} src={product.imgProd} alt="" />
        </div>
        <div className={styles.containerQuantity}>
          <p className={styles.text}>{product.nameProduct}</p>
          <p className={styles.text}>Price: {product.price} ₴</p>
          <label>
            Quantity: {product.quantity}
            <input
              type="range"
              name="quantity"
              min="1"
              max="10"
              value={product.quantity}
              step="1"
              onChange={e => handleChange(e, product._id)}
            />
            {coupon.coupon ? (
              <p className={styles.text}>
                Price for {product.quantity} products with diskont{' '}
                {coupon.coupon} %:
                {((product.price * product.quantity) / 100) *
                  (100 - coupon.coupon)}{' '}
                ₴
              </p>
            ) : (
              <p className={styles.text}>
                Price for {product.quantity} products:
                {product.price * product.quantity} ₴
              </p>
            )}
          </label>
        </div>
      </li>
    );
  });

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'customerLocation':
        dispatch(setCustumer({ customerLocation: value }));
        break;
      case 'email':
        dispatch(setCustumer({ owner: value }));
        break;
      case 'customerPhone':
        dispatch(setCustumer({ customerPhone: value }));
        break;
      case 'customerName':
        dispatch(setCustumer({ customerName: value }));
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addOrderOp(order));

    dispatch(
      setCustumer({
        customerName: '',
        customerPhone: '',
        owner: '',
        customerLocation: '',
      })
    );
    navigate('/shop');
  };

  return (
    <ShoppingCartForm
      handleSubmit={handleSubmit}
      onChange={onChange}
      productItems={productItems}
      order={order}
      navigate={navigate}
      coupon={coupon}
      products={products}
    />
  );
};

export default ShoppingCart;
