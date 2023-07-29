import React from 'react';
import './styles.scss';

type ProfileNameProps = {
  title?: string;
  subtitle?: string;
};
const ProfileName: React.FC<ProfileNameProps> = ({
  title,
  subtitle
}: ProfileNameProps) => {
  return (
    <div className="profile-name">
      <h2>{title}</h2>
      <div className="profile-bio">{subtitle}</div>
    </div>
  );
};

export default ProfileName;
