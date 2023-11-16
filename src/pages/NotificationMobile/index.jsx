import styles from './NotificationMobile.module.scss';

export const NotificationMobile = () => {
  return (
    <ul className={styles.notificationList}>
      {[...Array(3)].map(() => {
        return (
          <li className={styles.notificationList__item}>
            <div className={styles.notificationList__itemRow}>
              <div className={styles.notificationList__itemRow__checked}>
                <div
                  className={styles.notificationList__itemRow__checkedCircle}
                ></div>
                <p className={styles.notificationList__itemRow__checkedText}>
                  Непрочитанное
                </p>
              </div>
              <p className={styles.notificationList__itemRow__date}>Сегодня</p>
            </div>
            <div className={styles.notificationList__itemRow}>
              <p className={styles.notificationList__itemRow__text}>
                Здравствуйте, вам следует зарегистрироваться
              </p>
              <p className={styles.notificationList__itemRow__time}>8:00</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
