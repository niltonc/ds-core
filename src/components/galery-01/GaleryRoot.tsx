import React, { ReactNode } from 'react';
import './styles.scss';

type GaleryRootProps = {
  children?: ReactNode;
};
const GaleryRoot: React.FC<GaleryRootProps> = ({
  children
}: GaleryRootProps) => {
  return <section className="gallery">{children}</section>;
};

export default GaleryRoot;
