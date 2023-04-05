import { useState } from 'react';
import styles from './Calculator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

import {} from '@fortawesome/free-solid-svg-icons';
export const Calculator = () => {
  const [example, setExample] = useState([]);
  const [floatExample, setFloatExample] = useState(false);
  const numberItem = item => {
    let doubleItem = example.join('').slice(-1);
    let firstItem = example.join('').slice(0, 1);
    if (
      firstItem == '' &&
      (item == '+' || item == '/' || item == '*' || item == '%' || item == '.')
    ) {
    } else {
      if (
        doubleItem == '+' ||
        doubleItem == '-' ||
        doubleItem == '/' ||
        doubleItem == '*' ||
        doubleItem == '.' ||
        doubleItem == '%'
      ) {
        if (
          item == '+' ||
          item == '-' ||
          item == '/' ||
          item == '*' ||
          item == '%' ||
          item == '.'
        ) {
        } else {
          return setExample([...example, item]);
        }
      } else {
        return setExample([...example, item]);
      }
    }
  };

  const ce = () => {
    return setExample([]);
  };

  const del = () => {
    if ([example.join('')] == 'Infinity' || [example.join('')] == 'NaN') {
      return setExample([]);
    }
    return setExample([example.join('').slice(0, -1)]);
  };

  const equally = () => {
    let input = example.join('');
    let output = '';
    for (let i = 0; i < input.length; i++) {
      let outputSign = input[i];

      if (outputSign == '%') {
        output += '*(1/100)';
      } else {
        output += outputSign;
      }
    }

    let delItem = example.join('').slice(-1);
    if (delItem == '+' || delItem == '-' || delItem == '/' || delItem == '*') {
      return setExample([eval(output.slice(0, -1))]);
    } else {
      return setExample([eval(output)]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.del}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.wrapperDisplay}>{example}</div>
      <div className={styles.wrapperTabs}>
        <div
          className={styles.tab}
          onClick={() => {
            del();
          }}>
          <FontAwesomeIcon icon={faDeleteLeft} style={{ fontSize: '20px' }} />
        </div>
        <div className={styles.tab} onClick={() => ce()}>
          AC
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem('%');
          }}>
          %
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem('/');
          }}>
          /
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(7);
          }}>
          7
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(8);
          }}>
          8
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(9);
          }}>
          9
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem('*');
          }}>
          x
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(4);
          }}>
          4
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(5);
          }}>
          5
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(6);
          }}>
          6
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem('-');
          }}>
          -
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(1);
          }}>
          1
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(2);
          }}>
          2
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(3);
          }}>
          3
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem('+');
          }}>
          +
        </div>
        <div className={styles.tab}></div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem(0);
          }}>
          0
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            numberItem('.');
          }}>
          .
        </div>
        <div
          className={styles.tab}
          onClick={() => {
            equally();
          }}>
          =
        </div>
      </div>
    </div>
  );
};
