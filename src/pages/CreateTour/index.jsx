import { useNavigate } from 'react-router-dom';

import styles from './CreateTour.module.scss';
import { ArrowLeftBtn } from '../../components/ArrowBtn';

export const CreateTour = () => {
  const navigate = useNavigate();

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
      </div>
    </div>
  );
};
