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
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
// import { add } from './redux/panelSlice';

const App = () => {
  const valuePanel = useSelector(state => state.panel.value);
  const dispatch = useDispatch();
  const [widgets, setWidgets] = useState(valuePanel);
  useEffect(() => {
    setWidgets(valuePanel);
  }, [valuePanel]);

  // const [widgets, setWidgets] = useState([
  //   <Timer />,
  //   <Weather />,
  //   <Films />,
  //   <RandomRecipe />,
  //   <ToDo />,
  //   <Calculator />,
  //   <Currency />,
  // ]);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        {widgets.map(item => (
          <div key={v4()}>
            {item.name == 'timer' ? (
              <Timer />
            ) : item.name == 'calculator' ? (
              <Calculator />
            ) : item.name == 'weather' ? (
              <Weather />
            ) : item.name == 'toDo' ? (
              <ToDo idItem={item.id} />
            ) : item.name == 'randomRecipe' ? (
              <RandomRecipe />
            ) : item.name == 'films' ? (
              <Films />
            ) : item.name == 'currency' ? (
              <Currency />
            ) : (
              ''
            )}
          </div>
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
      {console.log(valuePanel)}
    </div>
  );
};

export default App;
