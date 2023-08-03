import { useState, useEffect } from 'react';
import './_styles.scss';

interface Option {
  id: number | string;
  value: string;
  label: string;
}

const options: Option[] = [
  { id: 1, value: 'option1', label: 'Opção 1' },
  { id: 2, value: 'option2', label: 'Opção 2' },
  { id: 3, value: 'option3', label: 'Opção 3' }
];

const Select: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    setSelectedOption(options[0]?.value);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.id} value={option.value} className="custom-option">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
