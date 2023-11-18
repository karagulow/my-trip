import styles from './TourList.module.scss';
import { ArrowLeftBtn, ArrowRightBtn } from '../ArrowBtn';
import { TourCard } from '../TourCard';

export const TourList = ({ title, isBought }) => {
  return (
    <div className={styles.tours}>
      <div className={styles.toursTop}>
        <p className={styles.toursTop__title}>{title}</p>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.toursTop__input}
        />
      </div>
      <div className={styles.toursList}>
        <ArrowLeftBtn />
        <TourCard isBought={isBought} />
        <ArrowRightBtn />
      </div>
    </div>
  );
};
