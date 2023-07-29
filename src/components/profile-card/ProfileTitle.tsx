import React, { ReactNode } from 'react';
import './styles.scss';

type ProfileNameProps = {
  title?: string;
  children?: ReactNode;
};
const ProfileTitle: React.FC<ProfileNameProps> = ({
  title,
  children
}: ProfileNameProps) => {
  return (
    <div className="profile-name">
      <h2>{title}</h2>
      <div className="profile-bio">{children}</div>
    </div>
  );
};

export default ProfileTitle;
