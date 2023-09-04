// Import React and CSS
import React, { useState } from 'react';
import './styles.scss';

interface DropdownSelect {
  options: ExceptionOption[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

export interface ExceptionOption {
  value: string;
  text: string;
  visible: boolean;
  _id: string;
  labelValue: string;
}

const DropdownSelect: React.FC<DropdownSelect> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Selecione a categoria');

  const handleOptionClick = (event: any) => {
    setSelectedLabel(event.target.dataset.label);
    setIsOpen(false);
  };

  const handleOptionsButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select">
      <div id="category-select">
        <label htmlFor="options-view-button">Categoria</label>
        <input
          type="checkbox"
          name=""
          id="options-view-button"
          onClick={handleOptionsButtonClick}
        />

        <div id="select-button">
          <div id="selected-value">{selectedLabel}</div>

          <div id="chevrons">
            <i data-lucide="chevron-down"></i>
            <i data-lucide="chevron-up"></i>
          </div>
        </div>
      </div>

      <ul id="options" className={isOpen ? 'open' : ''}>
        {options?.map((item: ExceptionOption) => (
          <li className="option">
            <input
              type="radio"
              name="category"
              value="bakery"
              data-label={item?.value}
              key={item?._id}
              onClick={handleOptionClick}
            />
            <span className="label">{item?.labelValue ?? item?.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
