import React, { useRef, useState } from 'react';
import styles from './select.module.scss';
import { CustomSelectProps, Option } from './types';
import { useOutsideClick } from '@/hooks/useOutSideClick';

const Select: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  placeholder
}) => {
  const ref = useRef(null);
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
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, handleClickOutside);

  return (
    <div className={styles.container}>
      <div
        ref={ref}
        className={styles.selectField}
        onClick={handleToggleDropdown}
      >
        {selectedValue ? (
          options.find((option) => option.value === selectedValue)?.label
        ) : (
          <span>{placeholder}</span>
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
