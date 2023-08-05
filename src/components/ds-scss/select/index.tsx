import React, { useState } from 'react';
import styles from './select.module.scss';
import { CustomSelectProps, Option } from './types';

const Select: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectField} onClick={handleToggleDropdown}>
        {selectedValue ? (
          options.find((option) => option.value === selectedValue)?.label
        ) : (
          <span>Selecione uma opção</span>
        )}
      </div>
      {isOpen && (
        <div className={styles.selectDropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.selectOption}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
