import React, { ReactNode } from 'react';
import './styles.scss';

type ProfileNameProps = {
  title?: string;
  children?: ReactNode;
  color?: string;
};
const ProfileTitle: React.FC<ProfileNameProps> = ({
  title,
  children,
  color
}: ProfileNameProps) => {
  const colors = ` ${color}`;
  return (
    <div className="profile-name" style={{ color: colors }}>
      <h2>{title}</h2>
      <div className="profile-bio">{children}</div>
    </div>
  );
};

export default ProfileTitle;
