import React, { ReactNode } from 'react';
import './styles.scss';

type ProfileProps = {
  children?: ReactNode;
  size?: number;
};
const ProfileRoot: React.FC<ProfileProps> = ({
  children,
  size = 350
}: ProfileProps) => {
  const s = `${size}px`;
  const h = `${size * 1.28}px`;
  return (
    <div className="profile" style={{ width: s, height: h }}>
      {children}
    </div>
  );
};

export default ProfileRoot;
