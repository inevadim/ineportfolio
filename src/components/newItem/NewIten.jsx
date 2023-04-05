import styles from './NewItem.module.scss';
import { useDispatch } from 'react-redux';
import { add, change } from './../../redux/panelSlice';
import { v4 } from 'uuid';

export const NewItem = () => {
  // const visibleModal = useSelector(state => state.panel.valueVisible);
  const dispatch = useDispatch();

  const addItem = () => {
    const obj = {
      id: v4(),
      name: 'toDo',
    };
    return dispatch(add(obj));
  };

  const changeItem = () => {
    return dispatch(change());
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.plus} onClick={() => addItem()}> */}
      <div className={styles.plus} onClick={() => changeItem()}>
        +
      </div>
    </div>
  );
};
