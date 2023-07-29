import React from 'react';
import Image from 'next/image';
import './styles.scss';

type GaleryProps = {
  icon?: any;
};
const GaleryArticle: React.FC<GaleryProps> = ({ icon }: GaleryProps) => {
  return (
    <article className="card">
      <Image src={icon} width={250} height={200} alt="" />
    </article>
  );
};

export default GaleryArticle;
