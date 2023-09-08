import React, { useState } from 'react';
import { styled, css } from 'styled-components';

interface ISelectParams {
  active?: boolean;
  isVisible?: boolean;
  isDisabled?: boolean;
  isFoscus?: boolean;
  height?: number;
}

export const Ul = styled.ul`
  /* position: absolute; */
  max-height: 20vmax;
  min-width: 100%;
  padding: 0.4rem;
  /* flex-direction: column; */
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0px 1px 2px rgba(37, 37, 39, 0.06);
  border-radius: 4px;
  transition: max-height 0.2s ease;
  /* z-index: 1; */
  display: block;
`;

export const SelectContainer = styled.div<ISelectParams>`
  position: relative;
  width: 100%;
`;

export const Li = styled.li`
  font-family: 'Figtree';
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  input[type='radio'] {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  /* &:has(input:checked),
  &:hover {
    border-bottom: 1px solid #252529;
    background-color: #252529;
  } */

  &:has(input:focus) {
    background-color: #f7f7f8;
    color: #636574;
    outline: none;
    border-radius: 4px;
  }
`;

export const SelectButton = styled.div<ISelectParams>`
  width: 100%;
  cursor: pointer;
  color: #636574;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 25px;
  background: #ffffff;
  border: 1px solid #636574;
  background-repeat: no-repeat;
  background-position: calc(100% - 5px);
  height: ${(props) => props.height}px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgMTAuMDYwN0w3LjU2MDY2IDlMMTIuMDMwMyAxMy40Njk3TDE2LjUgOUwxNy41NjA3IDEwLjA2MDdMMTIuMDMwMyAxNS41OTFMNi41IDEwLjA2MDdaIiBmaWxsPSIjNjM2NTc0Ii8+Cjwvc3ZnPgo=);
  &:hover {
    border: 1px solid #1c77cf;
  }
`;

export const SelectInputOptions = styled.input`
  inset: 0;
  all: unset;
  z-index: 3;
  cursor: pointer;
  position: absolute;

  &:focus + ${SelectButton} {
    outline: 0;
    border: 2px solid #1c77cf;
    border-inline-end-width: 1px;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
  }
`;

export const CategorySelect = styled.div`
  position: relative;
`;

export const Span = styled.span`
  /* font-family: 'Figtree'; */
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #636574;
`;

export const SelectValue = styled.div`
  /* font-family: 'Figtree'; */
  height: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #636574;
  overflow: hidden;
  line-height: 21px;
  font-style: normal;
  align-items: center;
`;

export const ScrollFlow = styled.div`
  overflow-y: scroll;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b8b8b8;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f7f7f8;
    border-radius: 3px;
  }
`;

export const Exception = styled.div`
  font-family: 'Figtree';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  top: 8px;
  right: 35px;
  display: flex;
  align-items: center;
  letter-spacing: 0.12px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 1px 8px;
  width: 73px;
  height: 20px;
  background: #c75300;
  border-radius: 16px;
`;

export const Change = styled.div`
  font-family: 'Figtree';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  top: 8px;
  right: 35px;
  display: flex;
  align-items: center;
  letter-spacing: 0.12px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 1px 8px;
  width: 60px;
  height: 20px;
  background: #1c77cf;
  border-radius: 16px;
`;

export interface ExceptionOption {
  value: string;
  text: string;
  visible?: boolean;
  _id: string;
  labelValue: string;
}

interface DropdownSelect {
  options?: ExceptionOption[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  height?: number;
  disabled?: boolean;
}

const DropdownSelectSC: React.FC<DropdownSelect> = ({
  options,
  height = 36,
  placeholder = '',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Selecione a categoria');

  const handleOptionClick = (event: any) => {
    setSelectedLabel(event.target.dataset.label);
    setIsOpen(false);
  };

  const handleOptionsButtonClick = () => {
    console.log(!isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <SelectContainer role="select" onClick={handleOptionsButtonClick}>
      <CategorySelect role="category-select">
        <SelectInputOptions type="checkbox" role="options-view-button" />
        <SelectButton id="select-button" height={height}>
          <SelectValue role="selected-value" placeholder={placeholder}>
            {selectedLabel}
          </SelectValue>
        </SelectButton>
      </CategorySelect>

      <Ul role="options">
        <ScrollFlow role="scroll">
          {options?.map((item: ExceptionOption) => (
            <Li className="option">
              <input
                type="radio"
                // name="category"
                // value="bakery"
                data-label={item?.value}
                key={item?._id}
                onClick={handleOptionClick}
              />
              <Span role="label">{item?.labelValue ?? item?.text}</Span>
            </Li>
          ))}
        </ScrollFlow>
      </Ul>
    </SelectContainer>
  );
};

export default DropdownSelectSC;
