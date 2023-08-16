import React from 'react';
import styles from './divider.module.scss';

interface DividerProps {
  type?: 'solid' | 'dotted' | 'dashed';
}
const Divider: React.FC<DividerProps> = ({ type = 'solid' }: DividerProps) => {
  const borderType = `${styles.divider} ${styles[type]}`;
  return <div className={borderType} />;
};

export default Divider;
