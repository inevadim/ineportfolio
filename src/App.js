import { Currency } from './components/currency/Currency';
import { Calculator } from './components/calculator/Calculator';
import { Films } from './components/films/Films';
// import { Header } from './components/header/Header';
import { RandomRecipe } from './components/randomRecipe/RandomRecipe';
import { Timer } from './components/timer/Timer';
import { ToDo } from './components/toDo/ToDo';
import { Weather } from './components/weather/Weather';
import styles from './Global.module.scss';
import { NewItem } from './components/newItem/NewIten';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const valuePanel = useSelector(state => state.panel.value);
  const dispatch = useDispatch();

  const [widgets, setWidgets] = useState([
    <Timer />,
    <Weather />,
    <Films />,
    <RandomRecipe />,
    <ToDo />,
    <Calculator />,
    <Currency />,
  ]);
  return (
    <div className={styles.app}>
      {/* <Timer /> */}
      {/* {widgets.map(item => item)} */}
      <div className={styles.wrapper}>
        {widgets.map(item => (
          <div key={v4()}>{item}</div>
        ))}
        <NewItem />
        {/* <Timer />
        <Weather />
        <Films />
        <RandomRecipe />
        <ToDo />
        <Calculator />
        <Currency />
        <NewItem /> */}
      </div>
    </div>
  );
};

export default App;
