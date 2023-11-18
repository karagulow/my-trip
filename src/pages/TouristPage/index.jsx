import styles from './TouristPage.module.scss';
import avatar from '../../assets/img/photo/avatar.jpeg';
import { ArrowLeftBtn } from '../../components/ArrowBtn';
import { TourList } from '../../components/TourList';

export const TouristPage = () => {
  return (
    <div className={styles.account}>
      <div className={styles.accountTop}>
        <ArrowLeftBtn />
        <h3 className={styles.accountTop__title}>Личный кабинет</h3>
      </div>
      <div className={styles.accountAbout}>
        <div className={styles.accountAbout__data}>
          <img
            src={avatar}
            alt="avatar"
            className={styles.accountAbout__dataAvatar}
          />
          <div className={styles.accountAbout__dataRight}>
            <p className={styles.accountAbout__dataRight__name}>
              Иванова Инна Михайловна
            </p>
            <p className={styles.accountAbout__dataRight__balance}>
              Баланс: <span>0 руб</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.accountTours}>
        <TourList />
        <TourList />
      </div>
    </div>
  );
};
