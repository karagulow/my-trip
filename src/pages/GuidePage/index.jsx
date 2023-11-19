import { useNavigate, Link } from 'react-router-dom';

import styles from './GuidePage.module.scss';
import avatar from '../../assets/img/photo/avatar.jpeg';
import { ArrowLeftBtn } from '../../components/ArrowBtn';
import { TourList } from '../../components/TourList';

export const GuidePage = () => {
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
            >
              Баланс: <span>4000 руб</span>
            </Link>
          </div>
        </div>
        <button className={styles.accountAbout__btn}>Создать тур</button>
      </div>
      <div className={styles.accountTours}>
        <div className={styles.accountTours__analytics}>
          <h3 className={styles.accountTours__analyticsTitle}>Анализ данных</h3>
          <ul className={styles.accountTours__analyticsList}>
            <li className={styles.accountTours__analyticsList__item}>
              <p className={styles.accountTours__analyticsList__itemCount}>0</p>
              <p className={styles.accountTours__analyticsList__itemText}>
                Туров проведено за весь период
              </p>
            </li>
            <li className={styles.accountTours__analyticsList__item}>
              <p className={styles.accountTours__analyticsList__itemCount}>0</p>
              <p className={styles.accountTours__analyticsList__itemText}>
                Туров создано за весь период
              </p>
            </li>
            <li className={styles.accountTours__analyticsList__item}>
              <p className={styles.accountTours__analyticsList__itemCount}>0</p>
              <p className={styles.accountTours__analyticsList__itemText}>
                Рублей заработано за весь период
              </p>
            </li>
          </ul>
        </div>
        <TourList title="Избранное" />
      </div>

      <div className={styles.accountClients}>
        <h3 className={styles.accountClients__title}>Клиенты</h3>
        <ul className={styles.accountClients__list}>
          <li className={styles.accountClients__listItem}>
            <div className={styles.accountClients__listItem__left}>
              <p className={styles.accountClients__listItem__leftTitle}>
                Осенние ночи
              </p>
              <p className={styles.accountClients__listItem__leftName}>
                Антипов Эдуард Игоревич
              </p>
            </div>
            <div className={styles.accountClients__listItem__right}>
              <p className={styles.accountClients__listItem__rightDate}>
                20.02.2024 - 28.02.2024
              </p>
              <p className={styles.accountClients__listItem__rightPhone}>
                +7 989 504 34 23
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
