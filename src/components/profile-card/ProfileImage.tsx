import React from 'react';
import './styles.scss';
import Image from 'next/image';

type ProfileImageProps = {
  icon?: any;
};
const ProfileImage: React.FC<ProfileImageProps> = ({
  icon
}: ProfileImageProps) => {
  return (
    <div className="profile-image">
      <Image src={icon} width={300} height={300} alt="" />
    </div>
  );
};

export default ProfileImage;
