import React from 'react';
import { IMaskInput } from 'react-imask';
import styles from './TourFilter.module.scss';

export const TourFilter = () => {
  const priceMask = '000000';

  const [localResTours, setLocalResTours] = React.useState(false);

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
        <div className={styles.tour_filterParams__double}>
          <div>
            <IMaskInput
              className={styles.tour_filterParams__input}
              mask={priceMask}
              type="text"
              placeholder="0"
            />
            <span>от</span>
          </div>

          <div>
            <IMaskInput
              className={styles.tour_filterParams__input}
              mask={priceMask}
              type="text"
              placeholder="0"
            />
            <span>до</span>
          </div>
        </div>
        <input
          className={styles.tour_filterParams__input}
          type="text"
          placeholder="Месяц"
        />
        <div
          className={styles.tour_filterParams__local}
          onClick={() => {
            setLocalResTours(!localResTours);
          }}
        >
          <div
            className={`${styles.tour_filterParams__localCircle} ${
              localResTours && styles.active
            }`}
          ></div>
          <p className={styles.tour_filterParams__localText}>
            туры от местных жителей
          </p>
        </div>
      </div>
      <button className={styles.tour_filterBtn}>Применить</button>
    </div>
  );
};
