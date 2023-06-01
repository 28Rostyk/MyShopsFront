import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';

import styles from './ShoppingCartPage.module.scss';
import {
  setCustumer,
  setPriceAll,
  setProductQuantity,
} from '../../redux/orders/ordersSlice';
import { orderProduct } from '../../redux/orders/ordersSelector';
import { useNavigate } from 'react-router-dom';
import { addOrderOp } from 'redux/orders/ordersOperation';
import { setCoupons } from '../../redux/coupons/couponsSelector';

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
      console.log(coupon.coupon);
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

  // useEffect(() => {
  //   if (diskont.diskont) {
  //     console.log("diskont diskont")
  //     dispatch(
  //       setPriceAll(
  //         ((order.priceAll / 100) * (100 - diskont.diskont)).toFixed(2)
  //       )
  //     );
  //   }
  //   console.log(order)
  // },[diskont.diskont])

  const productItems = products.map(product => {
    return (
      <li className={styles.productLi} key={product._id}>
        <div
          className={styles.imgP}
          style={{
            backgroundImage: `url(${product.imgProd})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className={styles.divProductAndQuantity}>
          <p className={styles.productP}>{product.nameProduct}</p>
          <p className={styles.productP}>Price: {product.price} $</p>
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
              <p className={styles.productP}>
                Price for {product.quantity} products with diskont{' '}
                {coupon.coupon} %:
                {((product.price * product.quantity) / 100) *
                  (100 - coupon.coupon)}{' '}
                $
              </p>
            ) : (
              <p className={styles.productP}>
                Price for {product.quantity} products:{' '}
                {product.price * product.quantity} $
              </p>
            )}
          </label>
        </div>
      </li>
    );
  });

  const onHandleChange = ({ target: { name, value } }) => {
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
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.containerShop}>
        <div></div>
        <ul className={styles.productUl}>
          <li className={styles.formLi}>
            <label className={styles.formLabel}>
              Email:
              <input
                className={styles.formInput}
                type="text"
                name="email"
                placeholder="User email"
                value={order.owner}
                onChange={onHandleChange}
                required
              />
            </label>
          </li>
          <li className={styles.formLi}>
            <label className={styles.formLabel}>
              Address:
              <input
                className={styles.formInput}
                type="text"
                name="customerLocation"
                placeholder="Address"
                value={order.customerLocation}
                onChange={onHandleChange}
                required
              />
            </label>
          </li>

          <li className={styles.formLi}>
            <label className={styles.formLabel}>
              Phone:
              <input
                className={styles.formInput}
                type="text"
                name="customerPhone"
                placeholder="Phone"
                value={order.customerPhone}
                onChange={onHandleChange}
                required
              />
            </label>
          </li>
          <li className={styles.formLi}>
            <label className={styles.formLabel}>
              Name:
              <input
                className={styles.formInput}
                type="text"
                name="customerName"
                placeholder="Name"
                value={order.customerName}
                onChange={onHandleChange}
                required
              />
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.containerProductAndSubmit}>
        <div className={styles.containerProduct}>
          {products && <ul className={styles.productUl}>{productItems}</ul>}
        </div>
        <div>
          {coupon.coupon ? (
            <p>
              Total price with diskont {coupon.coupon} %: {order.priceAll} $
            </p>
          ) : (
            <p>Total price: {order.priceAll} $</p>
          )}

          <button type="button" onClick={() => navigate('/coupons')}>
            Coupons
          </button>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ShoppingCart;
