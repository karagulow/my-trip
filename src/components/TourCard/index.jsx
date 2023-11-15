import styles from './TourCard.module.scss';

import tourImg from '../../assets/img/photo/tour-img.jpeg';

export const TourCard = () => {
  return (
    <div className={styles.tour_card}>
      <img src={tourImg} alt="Tour image" className={styles.tour_cardImg} />
      <p className={styles.tour_cardTitle}>Осенние ночи</p>
      <p className={styles.tour_cardLocation}>Россия, Санкт-Петербург</p>
      <p className={styles.tour_cardPrice}>3000 ₽</p>
    </div>
  );
};
