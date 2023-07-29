import React, { SourceHTMLAttributes } from 'react';
import Image from 'next/image';
import './styles.scss';

type GaleryArticleProps = {
  icon?: any;
};
const GaleryArticle: React.FC<GaleryArticleProps> = ({
  icon
}: GaleryArticleProps) => {
  const width = 110;
  const height = 160;
  return (
    <article className="card" style={{ width: width, height: height }}>
      <Image src={icon} width={200} height={200} alt="" />
    </article>
  );
};

export default GaleryArticle;
