import { Currency } from './components/currency/Currency';
import { Calculator } from './components/calculator/Calculator';
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
        <Calculator />
        <Currency />
      </div>
    </div>
  );
};

export default App;
