import profileIcon from '@/assets/profile-icon.png';
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
      alt='Profile Icon'
    />
  );
}

export default ProfileIcon;
