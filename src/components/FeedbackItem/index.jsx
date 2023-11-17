import styles from './FeedbackItem.module.scss';

import avatar from '../../assets/img/photo/avatar.jpeg';

export const FeedbackItem = () => {
  return (
    <div className={styles.feedback_item}>
      <div className={styles.feedback_itemTop}>
        <img
          src={avatar}
          alt="avatar"
          className={styles.feedback_itemTop__img}
        />
        <h3 className={styles.feedback_itemTop__name}>
          Иванова Инна Михайловна
        </h3>
      </div>
      <p className={styles.feedback_itemText}>
        Тур "Осенние ночи" в Краснодарском крае был просто потрясающим! Я
        полностью погрузился в атмосферу осенней природы и ощутил всю ее
        красоту. Незабываемые моменты и впечатления, которые оставятся совсем
        надолго!
      </p>
    </div>
  );
};
