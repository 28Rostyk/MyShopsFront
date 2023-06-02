import { useEffect, useState } from 'react';
import styles from './History.module.scss';
import { getAllOrders } from '../../services/API';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelector';
import { getUser } from 'redux/auth/authSelector';
import HistoryList from './HistoryList';
import HistoryForm from './HistoryForm';

const History = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const isLogin = useSelector(isUserLogin);
  const user = useSelector(getUser);

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        if (email && phone) {
          const data = await getAllOrders({
            owner: email,
            customerPhone: phone,
          });
          setAllOrders([...data.data]);
        }
        if (email && !phone) {
          const data = await getAllOrders({
            owner: email,
          });
          setAllOrders([...data.data]);
        }
        if (!email && phone) {
          const data = await getAllOrders({
            customerPhone: phone,
          });
          setAllOrders([...data.data]);
        }

        if (isLogin) {
          const data = await getAllOrders({
            owner: user.email,
          });
          setAllOrders([...data.data]);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [email, phone, isLogin, user]);

  return (
    <div className={styles.container}>
      {!isLogin && (
        <HistoryForm
          onHandleChange={onHandleChange}
          email={email}
          phone={phone}
        />
      )}
      {loading || <HistoryList allOrders={allOrders} />}
    </div>
  );
};

export default History;
