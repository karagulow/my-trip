import styles from './Home.module.scss';

import { Search } from '../../components/Search';
import { TourCard } from '../../components/TourCard';
import { TourFilter } from '../../components/TourFilter';

export const Home = () => {
  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.topTitle}>
          Вы когда-нибудь мечтали о том, чтобы путешествовать по миру не как
          турист, а как друг местных жителей?
        </h1>
        <div className={styles.topAdvantages}>
          <div className={styles.topAdvantages__item}>
            <div className={styles.topAdvantages__itemIcon}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="material-symbols:tour-outline">
                  <path
                    id="Vector"
                    d="M5 22.5V2.5H7V4.5H21L19 9.5L21 14.5H7V22.5H5ZM12.5 11.5C13.05 11.5 13.521 11.304 13.913 10.912C14.305 10.52 14.5007 10.0493 14.5 9.5C14.5 8.95 14.304 8.479 13.912 8.087C13.52 7.695 13.0493 7.49933 12.5 7.5C11.95 7.5 11.479 7.696 11.087 8.088C10.695 8.48 10.4993 8.95067 10.5 9.5C10.5 10.05 10.696 10.521 11.088 10.913C11.48 11.305 11.9507 11.5007 12.5 11.5ZM7 12.5H18.05L16.85 9.5L18.05 6.5H7V12.5Z"
                    fill="#6FFC2D"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.topAdvantages__itemText}>
              Найдите тур по любому городу России
            </div>
          </div>
          <div className={styles.topAdvantages__item}>
            <div className={styles.topAdvantages__itemIcon}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="uil:create-dashboard">
                  <path
                    id="Vector"
                    d="M10 13.5H4C3.73478 13.5 3.48043 13.6054 3.29289 13.7929C3.10536 13.9804 3 14.2348 3 14.5V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H10C10.2652 21.5 10.5196 21.3946 10.7071 21.2071C10.8946 21.0196 11 20.7652 11 20.5V14.5C11 14.2348 10.8946 13.9804 10.7071 13.7929C10.5196 13.6054 10.2652 13.5 10 13.5ZM9 19.5H5V15.5H9V19.5ZM20 3.5H14C13.7348 3.5 13.4804 3.60536 13.2929 3.79289C13.1054 3.98043 13 4.23478 13 4.5V10.5C13 10.7652 13.1054 11.0196 13.2929 11.2071C13.4804 11.3946 13.7348 11.5 14 11.5H20C20.2652 11.5 20.5196 11.3946 20.7071 11.2071C20.8946 11.0196 21 10.7652 21 10.5V4.5C21 4.23478 20.8946 3.98043 20.7071 3.79289C20.5196 3.60536 20.2652 3.5 20 3.5ZM19 9.5H15V5.5H19V9.5ZM20 16.5H18V14.5C18 14.2348 17.8946 13.9804 17.7071 13.7929C17.5196 13.6054 17.2652 13.5 17 13.5C16.7348 13.5 16.4804 13.6054 16.2929 13.7929C16.1054 13.9804 16 14.2348 16 14.5V16.5H14C13.7348 16.5 13.4804 16.6054 13.2929 16.7929C13.1054 16.9804 13 17.2348 13 17.5C13 17.7652 13.1054 18.0196 13.2929 18.2071C13.4804 18.3946 13.7348 18.5 14 18.5H16V20.5C16 20.7652 16.1054 21.0196 16.2929 21.2071C16.4804 21.3946 16.7348 21.5 17 21.5C17.2652 21.5 17.5196 21.3946 17.7071 21.2071C17.8946 21.0196 18 20.7652 18 20.5V18.5H20C20.2652 18.5 20.5196 18.3946 20.7071 18.2071C20.8946 18.0196 21 17.7652 21 17.5C21 17.2348 20.8946 16.9804 20.7071 16.7929C20.5196 16.6054 20.2652 16.5 20 16.5ZM10 3.5H4C3.73478 3.5 3.48043 3.60536 3.29289 3.79289C3.10536 3.98043 3 4.23478 3 4.5V10.5C3 10.7652 3.10536 11.0196 3.29289 11.2071C3.48043 11.3946 3.73478 11.5 4 11.5H10C10.2652 11.5 10.5196 11.3946 10.7071 11.2071C10.8946 11.0196 11 10.7652 11 10.5V4.5C11 4.23478 10.8946 3.98043 10.7071 3.79289C10.5196 3.60536 10.2652 3.5 10 3.5ZM9 9.5H5V5.5H9V9.5Z"
                    fill="#6FFC2D"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.topAdvantages__itemText}>
              Создайте свой уникальный тур
            </div>
          </div>
          <div className={styles.topAdvantages__item}>
            <div className={styles.topAdvantages__itemIcon}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="fluent-mdl2:add-friend" clip-path="url(#clip0_37_1352)">
                  <path
                    id="Vector"
                    d="M18 18.5H17.8477C17.668 17.625 17.3516 16.8203 16.8984 16.0859C16.4453 15.3516 15.8945 14.7188 15.2461 14.1875C14.5977 13.6562 13.8672 13.2422 13.0547 12.9453C12.2422 12.6484 11.3906 12.5 10.5 12.5C9.8125 12.5 9.14844 12.5898 8.50781 12.7695C7.86719 12.9492 7.26953 13.1992 6.71484 13.5195C6.16016 13.8398 5.65625 14.2305 5.20312 14.6914C4.75 15.1523 4.35938 15.6602 4.03125 16.2148C3.70312 16.7695 3.44922 17.3672 3.26953 18.0078C3.08984 18.6484 3 19.3125 3 20H1.5C1.5 19.0625 1.63672 18.1602 1.91016 17.293C2.18359 16.4258 2.57812 15.625 3.09375 14.8906C3.60938 14.1562 4.21875 13.5039 4.92188 12.9336C5.625 12.3633 6.42188 11.9141 7.3125 11.5859C6.42969 11.0078 5.74219 10.2812 5.25 9.40625C4.75781 8.53125 4.50781 7.5625 4.5 6.5C4.5 5.67188 4.65625 4.89453 4.96875 4.16797C5.28125 3.44141 5.70703 2.80469 6.24609 2.25781C6.78516 1.71094 7.42188 1.28125 8.15625 0.96875C8.89062 0.65625 9.67188 0.5 10.5 0.5C11.3281 0.5 12.1055 0.65625 12.832 0.96875C13.5586 1.28125 14.1953 1.70703 14.7422 2.24609C15.2891 2.78516 15.7188 3.42188 16.0312 4.15625C16.3438 4.89062 16.5 5.67188 16.5 6.5C16.5 7.01562 16.4375 7.51953 16.3125 8.01172C16.1875 8.50391 16 8.96875 15.75 9.40625C15.5 9.84375 15.207 10.2461 14.8711 10.6133C14.5352 10.9805 14.1406 11.3047 13.6875 11.5859C14.5625 11.9219 15.3672 12.3828 16.1016 12.9688C16.8359 13.5547 17.4688 14.2422 18 15.0312V18.5ZM6 6.5C6 7.125 6.11719 7.70703 6.35156 8.24609C6.58594 8.78516 6.90625 9.26172 7.3125 9.67578C7.71875 10.0898 8.19531 10.4141 8.74219 10.6484C9.28906 10.8828 9.875 11 10.5 11C11.1172 11 11.6992 10.8828 12.2461 10.6484C12.793 10.4141 13.2695 10.0938 13.6758 9.6875C14.082 9.28125 14.4062 8.80469 14.6484 8.25781C14.8906 7.71094 15.0078 7.125 15 6.5C15 5.88281 14.8828 5.30078 14.6484 4.75391C14.4141 4.20703 14.0938 3.73047 13.6875 3.32422C13.2812 2.91797 12.8008 2.59375 12.2461 2.35156C11.6914 2.10938 11.1094 1.99219 10.5 2C9.875 2 9.29297 2.11719 8.75391 2.35156C8.21484 2.58594 7.73828 2.90625 7.32422 3.3125C6.91016 3.71875 6.58594 4.19922 6.35156 4.75391C6.11719 5.30859 6 5.89062 6 6.5ZM21 20H24V21.5H21V24.5H19.5V21.5H16.5V20H19.5V17H21V20Z"
                    fill="#6FFC2D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_37_1352">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.topAdvantages__itemText}>
              Выберите местного гида, который станет Вашим другом и помощником
              во время путешествия
            </div>
          </div>
          <div className={styles.topAdvantages__item}>
            <div className={styles.topAdvantages__itemIcon}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="tdesign:city">
                  <path
                    id="Vector"
                    d="M2 2L10 5.333V10.5H22V22.5H2V2ZM10 12.5V20.5H12V15.5H18V20.5H20V12.5H10ZM16 20.5V17.5H14V20.5H16ZM8 20.5V6.667L4 5V20.5H8Z"
                    fill="#6FFC2D"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.topAdvantages__itemText}>
              Насладитесь атмосферой и культурой места, которое посетите
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tours}>
        <div className={styles.toursTop}>
          <h2 className={styles.toursTop__title}>Наши туры</h2>
          <div className={styles.toursTop__search}>
            <Search />
            <div className={styles.toursTop__searchClick}>
              <p className={styles.toursTop__searchClick__text}>Фильтры</p>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ion:filter-sharp">
                  <path
                    id="Vector"
                    d="M0.9375 7.53125H29.0625V10.3438H0.9375V7.53125ZM5.625 14.0938H24.375V16.9062H5.625V14.0938ZM11.25 20.6562H18.75V23.4688H11.25V20.6562Z"
                    fill="#6FFC2D"
                  />
                </g>
              </svg>
              <TourFilter />
            </div>
          </div>
        </div>
        <div className={styles.toursList}>
          {[...Array(8)].map(() => {
            return <TourCard />;
          })}
        </div>
      </div>

      <div className={styles.your_tour}>
        <h2 className={styles.your_tourText}>
          Готовы поделиться своими знаниями о незабываемых местах?
        </h2>
        <h1 className={styles.your_tourTitle}>Создайте свой тур!</h1>
        <div className={styles.your_tourAbout}>
          <div className={styles.your_tourAbout__stat}>
            <div className={styles.your_tourAbout__statItem}>
              <h1 className={styles.your_tourAbout__statItem__title}>250</h1>
              <p className={styles.your_tourAbout__statItem__text}>
                туров создано на нашем сайте
              </p>
            </div>
            <div className={styles.your_tourAbout__statItem}>
              <h1 className={styles.your_tourAbout__statItem__title}>65</h1>
              <p className={styles.your_tourAbout__statItem__text}>
                гидов нам доверяют нашем сайте
              </p>
            </div>
            <div className={styles.your_tourAbout__statItem}>
              <h1 className={styles.your_tourAbout__statItem__title}>55</h1>
              <p className={styles.your_tourAbout__statItem__text}>
                туров проведено за год
              </p>
            </div>
            <div className={styles.your_tourAbout__statItem}>
              <h1 className={styles.your_tourAbout__statItem__title}>+20%</h1>
              <p className={styles.your_tourAbout__statItem__text}>
                рост клиентов в год
              </p>
            </div>
          </div>
          <div className={styles.your_tourAbout__advantages}>
            <ul className={styles.your_tourAbout__advantagesList}>
              <li className={styles.your_tourAbout__advantagesList__item}>
                <h6
                  className={styles.your_tourAbout__advantagesList__itemTitle}
                >
                  Зарабатывайте деньги, делая то, что вам нравится.
                </h6>
                <p className={styles.your_tourAbout__advantagesList__itemText}>
                  Устанавливайте свою цену за тур и получайте оплату от
                  туристов, которые выберут ваш тур.
                </p>
              </li>
              <li className={styles.your_tourAbout__advantagesList__item}>
                <h6
                  className={styles.your_tourAbout__advantagesList__itemTitle}
                >
                  Покажите свой город и свою страну с лучшей стороны.
                </h6>
                <p className={styles.your_tourAbout__advantagesList__itemText}>
                  Расскажите о своих любимых местах, историях и традициях,
                  которые делают ваш город уникальным и привлекательным.
                </p>
              </li>
              <li className={styles.your_tourAbout__advantagesList__item}>
                <h6
                  className={styles.your_tourAbout__advantagesList__itemTitle}
                >
                  Знакомьтесь с новыми людьми со всего мира.
                </h6>
                <p className={styles.your_tourAbout__advantagesList__itemText}>
                  Общайтесь с туристами, узнавайте об их культуре и интересах,
                  делитесь своим опытом и впечатлениями.
                </p>
              </li>
              <li className={styles.your_tourAbout__advantagesList__item}>
                <h6
                  className={styles.your_tourAbout__advantagesList__itemTitle}
                >
                  Развивайте и улучшайте языки.
                </h6>
                <p className={styles.your_tourAbout__advantagesList__itemText}>
                  А также навыки общения и презентации, знания о своем городе и
                  стране.
                </p>
              </li>
            </ul>
            <button className={styles.your_tourAbout__advantagesBtn}>
              Создать
            </button>
          </div>
        </div>
      </div>

      <div className={styles.connection}>
        <h2 className={styles.connectionTitle}>
          Напишите нам, если у вас остались вопросы
        </h2>
        <form className={styles.connectionForm}>
          <input type="text" placeholder="ФИО" />
          <input type="text" placeholder="Электронная почта" />
          <textarea placeholder="Ваш вопрос"></textarea>
          <button type="button" className={styles.connectionForm__btn}>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};
