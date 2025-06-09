import { type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { data } from "@shared/constants/common";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const Aside: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  function handleSetCalick(value: string) {
    return () => {
      navigate(`/${value}`);
    };
  }

  return (
    <div className={classNames('paper', styles.root)}>
      {data.map((item) => {
        return (
          <div
            className={classNames(styles.item, {
              [styles.selected]: params.code === item.value,
            })}
            onClick={handleSetCalick(item.value)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
