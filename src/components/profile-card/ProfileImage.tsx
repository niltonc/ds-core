import React, { ReactNode } from 'react';
import './styles.scss';

type ProfileImageProps = {
  children?: ReactNode;
};
const ProfileImage: React.FC<ProfileImageProps> = ({
  children
}: ProfileImageProps) => {
  return <div className="profile-image">{children}</div>;
};

export default ProfileImage;
