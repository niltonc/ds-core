import React from 'react';
import styles from './card.module.scss';

import Facebook from '@/assets/svgs/facebook-white.svg';
import Twitter from '@/assets/svgs/twitter-white.svg';
import Instagram from '@/assets/svgs/instagram.svg';
import Github from '@/assets/svgs/githib-white.svg';
import Image from 'next/image';

export default function CardContainer() {
  const imageUrl =
    'https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80';
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <h2>North</h2>
        <p>a lonely trip.</p>
        <div
          className={`${styles.pic}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className={`${styles.social}`}>
          <Image src={Facebook} width={15} height={15} alt="" />
          <Image src={Twitter} width={15} height={15} alt="" />
          <Image src={Instagram} width={15} height={15} alt="" />
          <Image src={Github} width={15} height={15} alt="" />
        </div>
        <button></button>
      </div>
    </div>
  );
}
