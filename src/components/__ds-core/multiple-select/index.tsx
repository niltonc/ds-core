import React, { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutSideClick';
import { CustomSelectProps, Option } from './types';
import styles from './multiple-select.module.scss';

const MultipleSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  placeholder
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const Label =
    selectedValues.length > 0 ? (
      selectedValues.map((value, index) => (
        <span key={value}>
          {options.find((option) => option.value === value)?.label}
          {index !== selectedValues.length - 1 && ', '}
        </span>
      ))
    ) : (
      <span>{placeholder}</span>
    );
  const handleSelect = (option: Option) => {
    const updatedSelectedValues = selectedValues.includes(option.value)
      ? selectedValues.filter((value) => value !== option.value)
      : [...selectedValues, option.value];

    setSelectedValues(updatedSelectedValues);
    onSelect(updatedSelectedValues);
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
              className={`${styles.selectOption} ${
                selectedValues.includes(option.value) ? styles.selected : ''
              }`}
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

export default MultipleSelect;
