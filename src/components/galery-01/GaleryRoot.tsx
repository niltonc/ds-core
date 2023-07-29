import React, { ReactNode } from 'react';
import './styles.scss';

type GaleryProps = {
  children?: ReactNode;
};
const GaleryRoot: React.FC<GaleryProps> = ({ children }: GaleryProps) => {
  return <section className="gallery">{children}</section>;
};

export default GaleryRoot;
