import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './CreateTour.module.scss';
import { ArrowLeftBtn } from '../../components/ArrowBtn';

export const CreateTour = () => {
  const navigate = useNavigate();

  const [isLocal, setIsLocal] = React.useState(true);
  const [isNotLocal, setIsNotLocal] = React.useState(false);

  return (
    <div className={styles.create_tour}>
      <div className={styles.create_tourTop}>
        <div
          onClick={() => {
            navigate(-1);
            window.scrollTo(0, 0);
          }}
        >
          <ArrowLeftBtn />
        </div>
        <h3 className={styles.create_tourTop__title}>Создать тур</h3>
      </div>
      <form className={styles.create_tourForm}>
        <div className={styles.create_tourFormBlock}>
          <h6 className={styles.create_tourFormBlock__title}>
            Заполните анкету
          </h6>
          <input
            className={styles.create_tourFormBlock__input}
            type="text"
            placeholder="Название тура"
          />
          <input
            className={styles.create_tourFormBlock__input}
            type="text"
            placeholder="Регион тура"
          />
          <input
            className={styles.create_tourFormBlock__input}
            type="text"
            placeholder="Город тура"
          />
        </div>

        <div className={styles.create_tourFormBlock}>
          <h6 className={styles.create_tourFormBlock__title}>Добавьте фото</h6>
          <p className={styles.create_tourFormBlock__text}>
            Поддерживаемые форматы: JPG, JPEG, PNG, WEBP. Рекомендуемое
            минимальное разрешение 960x720 px. Размер файла до 10MB
          </p>
          <div className={styles.create_tourFormBlock__file}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_63_5699)">
                <path
                  d="M21.8117 7.9803L21.8117 18.1881L31.9666 18.1881C32.1981 18.1808 32.4287 18.2205 32.6446 18.3045C32.8604 18.3886 33.0571 18.5154 33.2227 18.6773C33.5734 19.028 33.7704 19.5036 33.7704 19.9995C33.7704 20.4955 33.5734 20.9711 33.2227 21.3218C33.0637 21.487 32.8726 21.6179 32.6611 21.7066C32.4497 21.7953 32.2223 21.8398 31.993 21.8375L21.772 21.7714V32.0585C21.7768 32.4896 21.6158 32.9061 21.3225 33.222C20.9718 33.5727 20.4962 33.7697 20.0002 33.7697C19.5043 33.7697 19.0287 33.5727 18.678 33.222C18.5025 33.0605 18.3625 32.8643 18.2669 32.6457C18.1713 32.4272 18.1221 32.1912 18.1226 31.9527L18.1887 21.811H8.00741C7.7803 21.8147 7.5547 21.7734 7.34364 21.6894C7.13258 21.6054 6.94024 21.4805 6.77772 21.3218C6.42704 20.9711 6.23003 20.4955 6.23003 19.9995C6.23003 19.5036 6.42704 19.028 6.77772 18.6773C6.93675 18.5121 7.12786 18.3812 7.33932 18.2925C7.55078 18.2038 7.77813 18.1593 8.00741 18.1616L18.2284 18.2277L18.2284 7.94063C18.2237 7.50951 18.3846 7.09301 18.678 6.77705C19.0286 6.42637 19.5043 6.22936 20.0002 6.22936C20.4962 6.22936 20.9718 6.42637 21.3225 6.77705C21.6358 7.09836 21.8117 7.53074 21.8117 7.9803Z"
                  fill="#6FFC2D"
                />
              </g>
              <defs>
                <clipPath id="clip0_63_5699">
                  <rect
                    width="28.0491"
                    height="28.0491"
                    fill="white"
                    transform="translate(20 0.16626) rotate(45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input
            className={styles.create_tourFormBlock__input}
            type="text"
            placeholder="Общее кол-во человек на тур"
          />
        </div>

        <div className={styles.create_tourFormBlock}>
          <h6 className={styles.create_tourFormBlock__title}>Общее описание</h6>
          <textarea
            className={styles.create_tourFormBlock__big_input}
            placeholder="Введите текст"
          ></textarea>
          <textarea
            className={styles.create_tourFormBlock__middle_input}
            placeholder="Напишите немного о себе"
          ></textarea>
        </div>

        <div className={styles.create_tourFormBlock}>
          <div className={styles.create_tourFormBlock__local}>
            <p className={styles.create_tourFormBlock__localText}>
              Вы являетесь местным жителем?
            </p>
            <button
              className={isLocal && styles.create_tourFormBlock__localBtn}
              type="button"
              onClick={() => {
                setIsLocal(true);
                setIsNotLocal(false);
              }}
            >
              Да
            </button>
            <button
              className={isNotLocal && styles.create_tourFormBlock__localBtn}
              type="button"
              onClick={() => {
                setIsLocal(false);
                setIsNotLocal(true);
              }}
            >
              Нет
            </button>
          </div>
          <input
            className={styles.create_tourFormBlock__input}
            type="text"
            placeholder="Общее кол-во человек на тур"
          />
          <div className={styles.create_tourFormBlock__warning}>
            <div className={styles.create_tourFormBlock__warningIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_63_5720)">
                  <path
                    d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15ZM12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63_5720">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className={styles.create_tourFormBlock__warningText}>
              После публикации внести изменение в карточку тура будет
              невозможно. Проверьте все данные перед публикацией. При разовом
              размещении тура будет удерживаться 10% с каждой продажи. Если вы
              хотите разместить разместить более одного тура, то у вас есть
              возможность оформить подписку за 1499 руб/ мес. Чтобы оформить
              подписку, вам необходимо пополнить баланс в личном кабинете
            </p>
          </div>
        </div>
        <button className={styles.create_tourFormBtn} type="button">
          Опубликовать тур
        </button>
      </form>
    </div>
  );
};
