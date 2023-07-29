import Image from 'next/image';
import React from 'react';
import './styles.scss';

type ProfileSocialIconProps = {
  icon?: any;
  href?: any;
  title?: string;
};
const ProfileSocialIcon: React.FC<ProfileSocialIconProps> = ({
  icon,
  href,
  title
}: ProfileSocialIconProps) => {
  return (
    <li>
      <a href={href} title={title}>
        <Image src={icon} width={25} height={25} alt="" />
      </a>
    </li>
  );
};

export default ProfileSocialIcon;
