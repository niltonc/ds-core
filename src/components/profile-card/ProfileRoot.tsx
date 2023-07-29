import React, { ReactNode } from 'react';
import './styles.scss';

type ProfileProps = {
  children?: ReactNode;
};
const ProfileRoot: React.FC<ProfileProps> = ({ children }: ProfileProps) => {
  return (
    <div className="container">
      <div className="profile-wrapper">
        <div className="profile">{children}</div>
      </div>
    </div>
  );
};

export default ProfileRoot;
