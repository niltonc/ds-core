import React from 'react';
import styles from './row.module.scss';

interface RowProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Row: React.FC<RowProps> = ({ children, ...rest }: RowProps) => (
  <div className={`${styles.gridRow}`} {...rest}>
    {children}
  </div>
);
