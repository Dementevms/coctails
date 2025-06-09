import type { Cocktail } from "@shared/types/common";
import { type FC, type ReactNode } from "react";
import { useParams } from "react-router-dom";

import { useGetCocktailsQuery } from "@store/index";

import styles from "./styles.module.scss";

export const Cocktails: FC = () => {
  const params = useParams();
  const { data } = useGetCocktailsQuery(params.code || "margarita")

  function renderIngredient(cocktail: Cocktail) {
    const store: { counter: number; items: Array<ReactNode> } = {
      counter: 1,
      items: [],
    };
    while (store.counter !== 0) {
      const keyIngredient = `strIngredient${store.counter}` as keyof Cocktail;
      const keyMeasure = `strMeasure${store.counter}` as keyof Cocktail;
      if (cocktail[keyIngredient] && cocktail[keyMeasure]) {
        store.items.push(
          <div className={styles.ingredient}>
            <div className={styles.ingredientLeftSide}>
              {cocktail[keyIngredient]}:
            </div>
            <div className={styles.ingredientRightSide}>
              {cocktail[keyMeasure]}
            </div>
          </div>
        );
        store.counter++;
      } else {
        store.counter = 0;
      }
    }

    return store.items;
  }

  if (!data) return null;

  return (
    <div className={styles.root}>
      {data.drinks.map((cocktail) => {
        return (
          <div className={styles.item}>
            <div className={styles.itemLeftSide}>
              <div className={styles.title}>{cocktail.strDrink}</div>
              <div>{cocktail.strCategory}</div>
              <div>{cocktail.strAlcoholic}</div>
              <div>{cocktail.strGlass}</div>
              <div className={styles.subtitle}>Instructions:</div>
              <div>{cocktail.strInstructions}</div>
              <div className={styles.subtitle}>List of ingredients:</div>
              <div>{renderIngredient(cocktail)}</div>
            </div>
            <div className={styles.itemRightSide}>
              <div className={styles.image}>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} loading="lazy" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
