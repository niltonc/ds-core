// Switch.js (React Component)
import React, { useState } from 'react';
import './Switch.scss';

interface SwitchProps {
  defaultChecked: boolean;
  onChange?: () => void;
}
const Switch: React.FC<SwitchProps> = ({
  defaultChecked = false,
  onChange
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  const handleToggle = () => {
    const newState = !checked;
    setChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div className={`switch ${checked ? 'active' : ''}`} onClick={handleToggle}>
      <div className="switch-inner"></div>
    </div>
  );
};

export default Switch;
