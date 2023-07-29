import React from 'react';
import Image from 'next/image';
import './styles.scss';

type GaleryArticleProps = {
  icon?: any;
};
const GaleryArticle: React.FC<GaleryArticleProps> = ({
  icon
}: GaleryArticleProps) => {
  return (
    <article className="card">
      <Image src={icon} width={250} height={200} alt="" />
    </article>
  );
};

export default GaleryArticle;
