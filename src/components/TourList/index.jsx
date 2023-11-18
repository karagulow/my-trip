import styles from './TourList.module.scss';
import { ArrowLeftBtn, ArrowRightBtn } from '../ArrowBtn';
import { TourCard } from '../TourCard';

export const TourList = () => {
  return (
    <div className={styles.tours}>
      <div className={styles.toursTop}>
        <p className={styles.toursTop__title}>Купленные туры</p>
        <input
          type="text"
          placeholder="Поиск"
          className={styles.toursTop__input}
        />
      </div>
      <div className={styles.toursList}>
        <ArrowLeftBtn />
        <TourCard />
        <ArrowRightBtn />
      </div>
    </div>
  );
};
