import styles from './NewItem.module.scss';
import { useDispatch } from 'react-redux';
import { add } from './../../redux/panelSlice';
import { v4 } from 'uuid';

export const NewItem = () => {
  // const valuePanel = useSelector(state => state.panel.value);
  const dispatch = useDispatch();

  const addItem = () => {
    const obj = {
      id: v4(),
      name: 'toDo',
    };
    return dispatch(add(obj));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.plus} onClick={() => addItem()}>
        +
      </div>
    </div>
  );
};
