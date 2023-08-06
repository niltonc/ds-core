import React, { ReactNode } from 'react';
import styles from './timeline.module.scss';

interface TimelineItemProps {
  title: string;
  children?: ReactNode;
}
const TimelineItem = ({ title, children }: TimelineItemProps) => {
  return (
    <div className={`${styles.entry}`}>
      <div className={`${styles.title}`}>{title}</div>
      <div className={`${styles.body}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
