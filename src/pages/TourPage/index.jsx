import React from 'react';
import styles from './TourPage.module.scss';

import tourPhoto from '../../assets/img/photo/tour-img-full.jpeg';
import avatar from '../../assets/img/photo/avatar.jpeg';
import { ArrowLeftBtn, ArrowRightBtn } from '../../components/ArrowBtn';
import { FeedbackItem } from '../../components/FeedbackItem';

export const TourPage = () => {
  return (
    <div className={styles.tour}>
      <div className={styles.tourTop}>
        <div className={styles.tourTop__left}>
          <ArrowLeftBtn />
          <h3 className={styles.tourTop__leftTitle}>Осенние ночи</h3>
        </div>
        <button className={styles.tourTop__btn}>Добавить в избранное</button>
      </div>

      <div className={styles.tourPhotos}>
        <div className={styles.tourPhotos__list}>
          <ArrowLeftBtn />

          <img src={tourPhoto} alt="tour" />

          <ArrowRightBtn />
        </div>
      </div>

      <div className={styles.tourAbout}>
        <div className={styles.tourAbout__left}>
          <h3 className={styles.tourAbout__leftTitle}>ЮФО, Краснодар</h3>
          <p className={styles.tourAbout__leftText}>
            Добро пожаловать в захватывающий тур "Осенние ночи" в Краснодарском
            крае! Погрузитесь в волшебство осеннего сезона и насладитесь
            незабываемыми приключениями в удивительной природе южной России.{' '}
            <br />
            <br /> Во время этого тура вы окунетесь в уютную атмосферу осенних
            дней, насыщенных золотистыми листьями, приятной прохладой и чистым
            воздухом. Вас ждут удивительные природные пейзажи, где смешиваются
            яркие краски осени с теплым солнечным светом. <br />
            <br /> В ходе тура вы посетите знаменитые достопримечательности
            Краснодарского края, такие как Горный парк "Ай-Петри", где вы
            сможете насладиться прекрасными видами на окружающие горы и море, а
            также посетить Лоохский водопад, который представляет собой
            потрясающее зрелище с шумящей водой и красивой осенней
            растительностью. <br />
            <br /> Кроме того, вы сможете отправиться на увлекательные экскурсии
            по национальным паркам Краснодарского края, таким как Сочи и
            Абхазия. Вас ожидают пешие прогулки по извилистым тропам, где вы
            сможете насладиться осенними запахами и прекрасными пейзажами. Вы
            также побываете на озере Рица, где сможете полюбоваться яркими
            осенними оттенками воды и окружающей природы. <br />
            <br /> Однако осенние ночи в Краснодарском крае не будут скучными! В
            программу тура входят вечерние прогулки по городам и поселкам, где
            вы сможете насладиться особой романтикой и загадочной атмосферой
            осеннего времени года. Опытные гиды расскажут вам увлекательные
            факты о местных обычаях, легендах и истории, чтобы вы смогли
            полностью погрузиться в атмосферу этого удивительного сезона. <br />
            <br /> Тур "Осенние ночи" в Краснодарском крае - это идеальный
            способ насладиться красотой осенней природы, открыть новые горизонты
            и проникнуться духом этого волшебного времени года. Приготовьтесь к
            незабываемым впечатлениям и запоминающимся моментам, которые
            останутся с вами навсегда.
          </p>
        </div>
        <div className={styles.tourAbout__right}>
          <div className={styles.tourAbout__rightLocal}>
            Тур от местного жителя
          </div>
          <div className={styles.tourAbout__rightOrder}>
            <h3 className={styles.tourAbout__rightOrder__price}>2000 рублей</h3>
            <p className={styles.tourAbout__rightOrder__date}>Даты</p>
            <form className={styles.tourAbout__rightOrder__form}>
              <textarea
                type="text"
                placeholder="Укажите кол-во человек (если кол-во человек больше одного, то необходимо написать ФИО и телефон для связи всех последующих людей)"
                className={styles.tourAbout__rightOrder__formInput}
              />
              <button
                type="button"
                className={styles.tourAbout__rightOrder__formBtn}
              >
                Списать с баланса
              </button>
            </form>
          </div>
          <div className={styles.tourAbout__rightContact}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.tourAbout__rightContact__img}
            />
            <div className={styles.tourAbout__rightContact__about}>
              <h3 className={styles.tourAbout__rightContact__aboutName}>
                Иванова Инна Михайловна
              </h3>
              <p className={styles.tourAbout__rightContact__aboutText}>
                Отправляйтесь в увлекательное путешествие по Краснодарскому краю
                и откройте для себя волшебство осенних ночей. Приглашаем вас на
                тур "Осенние ночи"!
              </p>
              <p className={styles.tourAbout__rightContact__aboutPhone}>
                +7 989 203 23 23
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tourFeedback}>
        <h3 className={styles.tourFeedback__title}>Отзывы</h3>
        <div className={styles.tourFeedback__list}>
          {[...Array(3)].map(() => {
            return <FeedbackItem />;
          })}
        </div>
      </div>
    </div>
  );
};
