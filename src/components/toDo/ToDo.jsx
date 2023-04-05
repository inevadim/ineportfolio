import styles from './ToDo.module.scss';
import global from './../Global.module.scss';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export const ToDo = () => {
  const [toDo, setToDo] = useState(JSON.parse(localStorage.getItem('toDo')) || []);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    return localStorage.setItem('toDo', JSON.stringify(toDo));
  }, [toDo]);

  const changeInput = text => {
    setInputValue(text);
  };
  //   const v4 = uuid();
  const enterToDo = () => {
    // console.log(inputValue);
    setToDo([
      ...toDo,
      {
        id: v4(),
        checked: false,
        value: inputValue,
      },
    ]);
    // console.log(toDo);
  };

  const checkedItem = id => {
    setToDo(toDo.map(e => (e.id === id ? { ...e, checked: !e.checked } : e)));
  };

  const removeToDo = id => {
    setToDo(toDo.filter(item => item.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHead}>
        <div className={global.nameApp}>ToDo</div>
        <div className={styles.inputApp}>
          <input
            type="text"
            placeholder="Enter..."
            onChange={e => {
              changeInput(e.target.value);
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                enterToDo();
              }
            }}
          />
        </div>
      </div>

      <div className={styles.wrapperItems}>
        {toDo.map(item => (
          <div className={styles.wrapperItem} key={item.id}>
            <div
              className={item.checked ? styles.unItem : styles.item}
              onClick={() => checkedItem(item.id)}>
              {item.value}
            </div>
            <div className={styles.closeItem}>
              <div className={styles.closeItemHover}>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => {
                    removeToDo(item.id);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
