import React, { useState } from 'react';
import styles from './tab.module.scss';

const tabs = [
  { title: 'Code', icon: 'fa fa-code', content: 'This is code section' },
  { title: 'About', icon: 'fas fa-code', content: 'This is about section' },
  {
    title: 'Services',
    icon: 'fa fa-bar-chart',
    content: 'This is services section'
  },
  {
    title: 'Contact',
    icon: 'fa fa-envelope-o',
    content: 'This is contact section'
  }
];
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabs}>
        <div className={styles.tabHeader}>
          {tabs.map((tab, index) => (
            <div>
              <div key={index} onClick={() => setActiveTab(index)}>
                {tab.title}
              </div>
              {activeTab === index && <div className={styles.tabIndicator} />}
            </div>
          ))}
        </div>
        <div className={styles.tabBody}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${activeTab === index ? styles.active : ''}`}
            >
              <h2>{tab.title}</h2>
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
