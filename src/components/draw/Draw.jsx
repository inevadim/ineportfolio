import styles from './Draw.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/panelSlice';

export const Draw = ({ idItem }) => {
  const dispatch = useDispatch();
  const deleteItems = () => {
    // setToDo(toDo.filter(el => el.id !== item));
    return dispatch(deleteItem(idItem));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.del} onClick={() => deleteItems()}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      Draw
      <canvas style={{ width: '100px', height: '100px', border: '1px solid' }}></canvas>
    </div>
  );
};
