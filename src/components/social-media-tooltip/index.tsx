import React, { Children, ReactNode } from 'react';
import './styles.scss';
import Image from 'next/image';

type SocialMediaIconsProps = {
  type?: 'facebook' | 'twitter' | 'instagram' | 'github' | 'youtube';
  children?: ReactNode;
  icon?: any;
};

const SocialMediaIconTooltip: React.FC<SocialMediaIconsProps> = ({
  type = 'github',
  children,
  icon
}: SocialMediaIconsProps) => {
  const socialMediaClassName = `icon ${type} `;
  return (
    <ul className="wrapper">
      <li className={socialMediaClassName}>
        <span className="tooltip">{children}</span>
        <Image src={icon} width={20} height={20} alt="" />
      </li>
    </ul>
  );
};

export default SocialMediaIconTooltip;
