import { useEffect, useState } from 'react';
import styles from './Currency.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/panelSlice';

export const Currency = ({ idItem }) => {
  const [currencyUsd, setCurrencyUsd] = useState([]);
  const [currencyEur, setCurrencyEur] = useState([]);
  const [currencyPln, setCurrencyPln] = useState([]);
  const [currencyRub, setCurrencyRub] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://www.nbrb.by/api/exrates/rates?periodicity=0',
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);

        setCurrencyUsd(response.data[7]);
        setCurrencyEur(response.data[9]);
        setCurrencyPln(response.data[10]);
        setCurrencyRub(response.data[21]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const deleteItems = () => {
    // setToDo(toDo.filter(el => el.id !== item));
    return dispatch(deleteItem(idItem));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.del} onClick={() => deleteItems()}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.wrapperCurrency}>
        <div className={styles.wrapperCurrencyItem}>
          <div>{currencyUsd.Cur_Abbreviation}</div>
          {/* <div>{currencyUsd.Cur_Name}</div> */}
          <div className={styles.price}>{currencyUsd.Cur_OfficialRate}</div>
          {/* <div>{currencyUsd.Date}</div> */}
        </div>

        <div className={styles.wrapperCurrencyItem}>
          <div>{currencyPln.Cur_Abbreviation}</div>
          {/* <div>{currencyPln.Cur_Name}</div> */}
          <div className={styles.price}>{currencyPln.Cur_OfficialRate}</div>
          {/* <div>{currencyPln.Date.slice(0, 10)}</div> */}
        </div>

        <div className={styles.wrapperCurrencyItem}>
          <div>{currencyEur.Cur_Abbreviation}</div>
          {/* <div>{currencyEur.Cur_Name}</div> */}
          <div className={styles.price}>{currencyEur.Cur_OfficialRate}</div>
          {/* <div>{currencyEur.Date.slice(0, 10)}</div> */}
        </div>

        <div className={styles.wrapperCurrencyItem}>
          <div>{currencyRub.Cur_Abbreviation}</div>
          {/* <div>{currencyRub.Cur_Name}</div> */}
          <div className={styles.price}>{currencyRub.Cur_OfficialRate}</div>
          {/* <div>{currencyRub.Date.slice(0, 10)}</div> */}
        </div>
      </div>
    </div>
  );
};
