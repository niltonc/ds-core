import React, { ReactNode } from 'react';
import styles from './timeline.module.scss';

interface TimelineProps {
  children?: ReactNode;
}
const TimelineRoot = ({ children }: TimelineProps) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.entries}`}>{children}</div>
    </div>
  );
};
export default TimelineRoot;
