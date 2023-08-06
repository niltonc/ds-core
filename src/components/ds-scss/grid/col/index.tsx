import React from 'react';
import styles from './col.module.scss';

interface ColProps {
  span?: number;
  align?: 'start' | 'center' | 'flex-end' | 'space-between ' | 'space-around ';
  alignVertical?: 'top' | 'middle' | 'bottom';
  order?: 'first' | 'last';
  children?: React.ReactNode;
}

export const Col = ({
  span = 24,
  align = 'start',
  alignVertical = 'middle',
  order = 'first',
  children,
  ...rest
}: ColProps) => {
  const classNames = [
    styles.gridCol,
    span && `${styles.gridSpan} ${styles[`span-${span}`]}`,
    align && `${styles.gridAlign} ${styles[align]}`,
    alignVertical && `${styles.gridAlignVertical} ${styles[alignVertical]}`,
    order && `${styles.gridOrder} ${styles[order]}`
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};
