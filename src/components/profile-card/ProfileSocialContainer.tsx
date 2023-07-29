import React, { ReactNode } from 'react';
import './styles.scss';

type ProfileSocialProps = {
  children?: ReactNode;
};
const ProfileSocialContainer: React.FC<ProfileSocialProps> = ({
  children
}: ProfileSocialProps) => {
  return <ul className="social-icons">{children}</ul>;
};

export default ProfileSocialContainer;
