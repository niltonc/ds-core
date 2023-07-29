import React, { SourceHTMLAttributes } from 'react';
import Image from 'next/image';
import './styles.scss';

type GaleryArticleProps = {
  icon?: any;
  size?: number;
};
const GaleryArticle: React.FC<GaleryArticleProps> = ({
  icon,
  size = 110
}: GaleryArticleProps) => {
  const s = `${size}px`;
  const h = `${size * 1.45}px`;
  const wi = size * 1.5;
  const hi = size * 2.5;
  return (
    <article className="card-one" style={{ width: s, height: h }}>
      <Image src={icon} width={hi} height={wi} alt="" />
    </article>
  );
};

export default GaleryArticle;
