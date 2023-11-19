import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './GuideBalance.module.scss';
import { ArrowLeftBtn } from '../../components/ArrowBtn';
import { BalanceReplenishment } from '../../components/BalanceReplenishment';
import { BalanceReplenishmentCheck } from '../../components/BalanceReplenishmentCheck';

export const GuideBalance = () => {
  const navigate = useNavigate();

  const [balanceReplenishmentOpen, setBalanceReplenishmentOpen] =
    React.useState(false);
  const [balanceReplenishmentCheckOpen, setBalanceReplenishmentCheckOpen] =
    React.useState(false);

  const [subsActive, setSubsActive] = React.useState(false);

  balanceReplenishmentOpen || balanceReplenishmentCheckOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return (
    <div className={styles.balance}>
      <div className={styles.balanceTop}>
        <div
          onClick={() => {
            navigate(-1);
            window.scrollTo(0, 0);
          }}
        >
          <ArrowLeftBtn />
        </div>
        <h3 className={styles.balanceTop__title}>Баланс</h3>
      </div>

      <div className={styles.balanceBlock}>
        <div className={styles.balanceBlock__about}>
          <div className={styles.balanceBlock__aboutItem}>
            <h3 className={styles.balanceBlock__aboutItem__text}>
              Баланс: <span>4000 руб</span>
            </h3>
            <button
              className={styles.balanceBlock__aboutItem__replenish}
              onClick={() => {
                setBalanceReplenishmentOpen(true);
              }}
            >
              Пополнить
            </button>

            {balanceReplenishmentOpen && (
              <BalanceReplenishment
                setBalanceReplenishmentOpen={setBalanceReplenishmentOpen}
                setBalanceReplenishmentCheckOpen={
                  setBalanceReplenishmentCheckOpen
                }
              />
            )}
            {balanceReplenishmentCheckOpen && (
              <BalanceReplenishmentCheck
                setBalanceReplenishmentCheckOpen={
                  setBalanceReplenishmentCheckOpen
                }
              />
            )}

            <button className={styles.balanceBlock__aboutItem__withdraw}>
              Вывести деньги
            </button>
            <div className={styles.balanceBlock__aboutItem__subs}>
              <h3 className={styles.balanceBlock__aboutItem__subsTitle}>
                Подписка:
                {subsActive ? (
                  <span
                    className={
                      styles.balanceBlock__aboutItem__subsTitle__active
                    }
                  >
                    активна
                  </span>
                ) : (
                  <span
                    className={
                      styles.balanceBlock__aboutItem__subsTitle__not_active
                    }
                  >
                    неактивна
                  </span>
                )}
              </h3>
              {subsActive ? (
                <button
                  className={styles.balanceBlock__aboutItem__subsBtn_active}
                  onClick={() => {
                    setSubsActive(false);
                  }}
                >
                  Отменить подписку
                </button>
              ) : (
                <button
                  className={styles.balanceBlock__aboutItem__subsBtn_not_active}
                  onClick={() => {
                    setSubsActive(true);
                  }}
                >
                  Подключить подписку
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.balanceBlock__history}>
          <h3 className={styles.balanceBlock__historyTitle}>История</h3>
          <ul className={styles.balanceBlock__historyList}>
            {[...Array(2)].map(() => {
              return (
                <li className={styles.balanceBlock__historyList__item}>
                  <div className={styles.balanceBlock__historyList__itemAbout}>
                    <p
                      className={
                        styles.balanceBlock__historyList__itemAbout__text
                      }
                    >
                      <p
                        className={
                          styles.balanceBlock__historyList__itemAbout__text
                        }
                      >
                        Пополнение баланса
                      </p>
                    </p>
                    <p
                      className={
                        styles.balanceBlock__historyList__itemAbout__date
                      }
                    >
                      20.02.2024
                    </p>
                  </div>
                  <p className={styles.balanceBlock__historyList__itemNumber}>
                    +2000 руб
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
