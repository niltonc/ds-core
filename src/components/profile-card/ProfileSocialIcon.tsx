import React, { AnchorHTMLAttributes, ClassAttributes } from 'react';
import './styles.scss';
import Image from 'next/image';

type ref = ClassAttributes<HTMLAnchorElement>;

type ProfileSocialProps = {
  icon?: any;
  href?: any;
  title?: string;
};
const ProfileSocialIcon: React.FC<ProfileSocialProps> = ({
  icon,
  href,
  title
}: ProfileSocialProps) => {
  return (
    <li>
      <a href={href} title={title}>
        <Image src={icon} width={25} height={25} alt="" />
      </a>
    </li>
  );
};

export default ProfileSocialIcon;
