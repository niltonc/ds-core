import React, { ReactNode } from 'react';
import './styles.scss';

type SocialMediaIconsProps = {
  type?: 'facebook' | 'twitter' | 'instagram' | 'github' | 'youtube';
  children?: ReactNode;
  tooltip?: string;
};

const IconTooltip: React.FC<SocialMediaIconsProps> = ({
  type = 'github',
  children,
  tooltip
}: SocialMediaIconsProps) => {
  const socialMediaClassName = `icon ${type} `;
  return (
    <ul className="wrapper">
      <li className={socialMediaClassName}>
        <span className="tooltip">{tooltip}</span>
        {children}
      </li>
    </ul>
  );
};

export default IconTooltip;
