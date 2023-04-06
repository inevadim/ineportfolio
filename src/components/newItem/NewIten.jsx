import styles from './NewItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { add, change } from './../../redux/panelSlice';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faCloud,
  faXmark,
  faClock,
  faDollarSign,
  faPhotoFilm,
  faUtensils,
  faCalculator,
} from '@fortawesome/free-solid-svg-icons';

export const NewItem = () => {
  // const visibleModal = useSelector(state => state.panel.valueVisible);
  const visibleModal = useSelector(state => state.panel.valueVisible);
  const dispatch = useDispatch();

  const addItem = name => {
    const obj = {
      id: v4(),
      name: name,
    };
    return dispatch(add(obj));
  };

  const changeItem = () => {
    return dispatch(change());
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.plus} onClick={() => addItem()}> */}

      {visibleModal ? (
        <div className={styles.modalAdd} onClick={() => changeItem()}>
          <div className={styles.wrapperModal}>
            <div className={styles.item} onClick={() => addItem('toDo')}>
              <div>
                <FontAwesomeIcon icon={faList} />
              </div>
              <div> toDo</div>
            </div>
            <div className={styles.item} onClick={() => addItem('timer')}>
              <div>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div> timer</div>
            </div>
            <div className={styles.item} onClick={() => addItem('currency')}>
              <div>
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <div> currency</div>
            </div>
            <div className={styles.item} onClick={() => addItem('films')}>
              <div>
                <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
              <div>films</div>
            </div>
            <div className={styles.item} onClick={() => addItem('randomRecipe')}>
              <div>
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <div>Recipe</div>
            </div>
            <div className={styles.item} onClick={() => addItem('calculator')}>
              <div>
                <FontAwesomeIcon icon={faCalculator} />
              </div>
              <div>calc</div>
            </div>
            <div className={styles.item} onClick={() => addItem('weather')}>
              <div>
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <div>weather</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.plus} onClick={() => changeItem()}>
          +
        </div>
      )}
    </div>
  );
};
