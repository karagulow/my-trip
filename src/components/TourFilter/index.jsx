import styles from './TourFilter.module.scss';

export const TourFilter = () => {
  return (
    <div className={styles.tour_filter}>
      <div className={styles.tour_filterParams}>
        <input
          className={styles.tour_filterParams__input}
          type="text"
          placeholder="Регион"
        />
        <input
          className={styles.tour_filterParams__input}
          type="text"
          placeholder="Город"
        />
        <input
          className={styles.tour_filterParams__input}
          type="text"
          placeholder="Цена"
        />
        <input
          className={styles.tour_filterParams__input}
          type="text"
          placeholder="Месяц"
        />
        <div className={styles.tour_filterParams__local}>
          <div className={styles.tour_filterParams__localCircle}></div>
          <p className={styles.tour_filterParams__localText}>
            туры от местных жителей
          </p>
        </div>
      </div>
      <button className={styles.tour_filterBtn}>Применить</button>
    </div>
  );
};
