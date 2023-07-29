import React from 'react';
import Image from 'next/image';
import './styles.scss';

type GaleryArticleProps = {
  icon?: any;
  size?: number;
};
const GaleryArticle: React.FC<GaleryArticleProps> = ({
  icon,
  size = 80
}: GaleryArticleProps) => {
  const s = `${size}px`;
  const h = `${size * 4}px`;
  const wi = size * 3.125;
  const hi = size * 2.5;

  return (
    <article className="card-two" style={{ width: s, height: h }}>
      <Image src={icon} width={wi} height={hi} alt="" />
    </article>
  );
};

export default GaleryArticle;
