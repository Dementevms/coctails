import type { FC, PropsWithChildren } from 'react';

import { Aside } from '@features/Aside/Aside';

import styles from './styles.module.scss';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Aside />
      {children}
    </div>
  );
};
