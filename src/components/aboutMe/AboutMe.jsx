import styles from './AboutMe.module.scss';
import meImg from './../../assets/img/aboutMe/me.jpg';
export const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={meImg} />
      </div>
      <div>AboutMe</div>
    </div>
  );
};
