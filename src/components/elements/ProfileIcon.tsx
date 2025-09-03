import profileIcon from '@/assets/profile-icon.png';
import profileIcon2x from '@/assets/profile-icon@2x.png';
import type { ReactElement } from 'react';

interface ProfileProps {
  className?: string;
}

function ProfileIcon({ className }: ProfileProps): ReactElement {
  return (
    <img
      width={28}
      height={28}
      className={className}
      src={profileIcon}
      srcSet={`${profileIcon2x} 2x`}
      alt='Profile Icon'
    />
  );
}

export default ProfileIcon;
