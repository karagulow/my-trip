import styles from './Search.module.scss';

export const Search = () => {
  return <input className={styles.searchBox} type="text" placeholder="Поиск" />;
};
