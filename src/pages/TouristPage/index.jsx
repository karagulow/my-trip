import { useNavigate, Link } from 'react-router-dom';

import styles from './TouristPage.module.scss';
import avatar from '../../assets/img/photo/avatar.jpeg';
import { ArrowLeftBtn } from '../../components/ArrowBtn';
import { TourList } from '../../components/TourList';

export const TouristPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.account}>
      <div className={styles.accountTop}>
        <div
          onClick={() => {
            navigate(-1);
            window.scrollTo(0, 0);
          }}
        >
          <ArrowLeftBtn />
        </div>
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
            <Link
              to="/lk/tourist/balance"
              className={styles.accountAbout__dataRight__balance}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Баланс: <span>4000 руб</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.accountTours}>
        <TourList title="Купленные туры" isBought={true} />
        <TourList title="Избранное" />
      </div>
    </div>
  );
};
