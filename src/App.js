// import { AboutMe } from './components/aboutMe/AboutMe';
import { Films } from './components/films/Films';
// import { Header } from './components/header/Header';
import { RandomRecipe } from './components/randomRecipe/RandomRecipe';
import { Timer } from './components/timer/Timer';
import { ToDo } from './components/toDo/ToDo';
import { Weather } from './components/weather/Weather';
import styles from './Global.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      {/* <Header /> */}
      {/* <AboutMe /> */}
      <div className={styles.wrapper}>
        <Timer />
        <Weather />
        <Films />
        <RandomRecipe />
        <ToDo />
      </div>
    </div>
  );
};

export default App;
