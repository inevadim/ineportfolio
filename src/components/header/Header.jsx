import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSailboat } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      {' '}
      <FontAwesomeIcon icon={faSailboat} /> InePanel
    </div>
  );
};
