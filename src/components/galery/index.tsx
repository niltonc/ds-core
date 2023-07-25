import React, { InputHTMLAttributes } from 'react';
import './styles.css';
import Summer from './images/summer.jpg';
import Autumn from './images/autumn.jpg';
import Winter from './images/winter.jpg';
import Spring from './images/spring.jpg';
import Image from 'next/image';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Galery: React.FC<InputProps> = ({}: InputProps) => {
  return (
    <>
      <span className="background">
        <section className="gallery">
          <article className="card">
            <Image src={Spring} alt="Preview" />
          </article>
          <article className="card">
            <Image src={Summer} alt="Preview" />
          </article>
          <article className="card">
            <Image src={Autumn} alt="Preview" />
          </article>
          <article className="card">
            <Image src={Winter} alt="Preview" />
          </article>
        </section>
      </span>
    </>
  );
};

export default Galery;
