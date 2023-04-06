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
import { change, add } from './redux/panelSlice';

const App = () => {
  const valuePanel = useSelector(state => state.panel.value);
  // const visibleModal = useSelector(state => state.panel.valueVisible);
  const dispatch = useDispatch();
  const [widgets, setWidgets] = useState(valuePanel);
  useEffect(() => {
    setWidgets(valuePanel);
  }, [valuePanel]);

  const addItem = name => {
    const obj = {
      id: v4(),
      name: name,
    };
    return dispatch(add(obj));
  };

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
              <Timer idItem={item.id} />
            ) : item.name == 'calculator' ? (
              <Calculator idItem={item.id} />
            ) : item.name == 'weather' ? (
              <Weather idItem={item.id} />
            ) : item.name == 'toDo' ? (
              <ToDo idItem={item.id} />
            ) : item.name == 'randomRecipe' ? (
              <RandomRecipe idItem={item.id} />
            ) : item.name == 'films' ? (
              <Films idItem={item.id} />
            ) : item.name == 'currency' ? (
              <Currency idItem={item.id} />
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
