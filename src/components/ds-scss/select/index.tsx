import React, { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutSideClick';
import { CustomSelectProps, Option } from './types';
import styles from './select.module.scss';

const Select: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  placeholder
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const Label = selectedValue ? (
    options.find((option) => option.value === selectedValue)?.label
  ) : (
    <span>{placeholder}</span>
  );

  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    onSelect(option.value);
    setIsOpen(false);
  };

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div className={styles.container}>
      <div
        ref={ref}
        className={styles.selectField}
        onClick={() => setIsOpen(!isOpen)}
      >
        {Label}
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
