import { useState, useEffect } from 'react';
import styles from './RandomRecipe.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [mass, setMass] = useState(null);
  const [visibleIngredients, setVisibleIngredients] = useState(false);
  const [visibleInstructions, setVisibleInstructions] = useState(false);

  useEffect(() => {
    // if (recipe !== null) {
    const options = {
      method: 'GET',
      url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
      headers: {
        'X-RapidAPI-Key': '6744c97864msh6d1f932c42a4b40p1e873bjsn1e9092fe971a',
        'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMass(response.data[0]);
        // console.log(response.data[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
    // }
  }, [recipe]);
  return (
    <div className={styles.wrapper} onClick={() => setRecipe(Math.random())}>
      <div className={styles.del} onClick={e => e.stopPropagation()}>
        <div className={styles.wrapDel}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      {(visibleIngredients === false) & (visibleInstructions === false) ? (
        <div>
          <div className={styles.imgItem}>{mass !== null && <img src={mass.image} />}</div>
          <div className={styles.wrapperItem}>
            <div className={styles.titleItem}>{mass !== null && mass.title}</div>
            <div className={styles.timeItem}>
              {mass !== null && mass.times.length > 0 && 'time:'}
              {mass !== null && mass.times[0]}
            </div>
            <div className={styles.buttonWrapper} onClick={e => e.stopPropagation()}>
              <div
                className={styles.ingredientsButton}
                onClick={() => {
                  setVisibleIngredients(true);
                }}>
                Ingredients
              </div>
              <div
                className={styles.instructionsButton}
                onClick={() => setVisibleInstructions(true)}>
                Instructions
              </div>
            </div>
          </div>
        </div>
      ) : visibleIngredients === true ? (
        <div className={styles.wrapperStopPropagation} onClick={e => e.stopPropagation()}>
          <div
            className={styles.ingredientsItem}
            onClick={() => {
              setVisibleIngredients(false);
            }}>
            <div className={styles.nameItem}>Ingredients: </div>
            {mass !== null && (
              <div className={styles.ingredientsItemWrapper}>
                {mass.ingredients.map(item => (
                  <div className={styles.item} key={item}>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.wrapperStopPropagation} onClick={e => e.stopPropagation()}>
          <div
            className={styles.ingredientsItem}
            onClick={() => {
              setVisibleInstructions(false);
            }}>
            <div className={styles.nameItem}>Instruction: </div>
            {mass !== null && (
              <div className={styles.ingredientsItemWrapper}>
                {mass.instructions.map(item => (
                  <div className={styles.item} key={item.text}>
                    {item.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
