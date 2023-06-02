import HistoryListItem from '../HistoryListItem/HistoryListItem';
import styles from './HistoryList.module.scss';

const HistoryList = ({ allOrders }) => {
  return (
    <ul className={styles.containerOrders}>
      <HistoryListItem allOrders={allOrders} />
    </ul>
  );
};

export default HistoryList;
