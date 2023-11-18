import { Link } from 'react-router-dom';
import styles from './TourCard.module.scss';

import tourImg from '../../assets/img/photo/tour-img.jpeg';

export const TourCard = () => {
  return (
    <Link
      to="/tour"
      className={styles.tour_card}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src={tourImg} alt="Tour image" className={styles.tour_cardImg} />
      <p className={styles.tour_cardTitle}>Осенние ночи</p>
      <p className={styles.tour_cardLocation}>Россия, Санкт-Петербург</p>
      <p className={styles.tour_cardPrice}>3000 ₽</p>
    </Link>
  );
};
