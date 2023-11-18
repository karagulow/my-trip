import { Link } from 'react-router-dom';
import styles from './TourCard.module.scss';

import tourImg from '../../assets/img/photo/tour-img.jpeg';

export const TourCard = ({ isBought }) => {
  return (
    <div className={styles.tour_card}>
      <img src={tourImg} alt="Tour image" className={styles.tour_cardImg} />
      <Link
        to="/tour"
        className={styles.tour_cardTitle}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Осенние ночи
      </Link>
      <p className={styles.tour_cardLocation}>Россия, Санкт-Петербург</p>
      <p className={styles.tour_cardPrice}>3000 ₽</p>
      {isBought && (
        <div className={styles.is_bought}>
          <button className={styles.is_boughtBtn}>Оставить отзыв</button>
        </div>
      )}
    </div>
  );
};
