import styles from './Films.module.scss';
import global from './../Global.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Films = () => {
  const [dataFilm, setDataFilm] = useState(null);
  const [inputText, setInputText] = useState(null);
  const [nameFilm, setNameFilm] = useState(null);
  const changeInput = data => {
    setInputText(data);
  };

  const enterFilm = () => {
    setDataFilm(null);
    setNameFilm(inputText);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://imdb-api.com/en/API/SearchMovie/k_p2dq2jr5/${nameFilm}`,
    };
    if (nameFilm !== null) {
      axios
        .request(options)
        .then(data => {
          // console.log(data.data);
          setDataFilm(data.data.results);
        })
        .catch(err => console.log(err));
    }
  }, [nameFilm]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHead}>
        <div className={global.nameApp}>Films</div>
        <div className={styles.inputApp}>
          <input
            type="text"
            placeholder="Enter Film..."
            onChange={e => {
              changeInput(e.target.value);
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                enterFilm();
              }
            }}
          />
        </div>
      </div>
      {dataFilm !== null ? (
        <div className={styles.imgFilm}>
          <img src={dataFilm[0].image} alt={dataFilm[0].description} />
          <div className={styles.titleFilm}>{dataFilm[0].title}</div>
          <div className={styles.descriptionFilm}>{dataFilm[0].description} </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
