'use client';

import Dropdown from '@/components/ui-kit/DropDown-Searchbox/Dropdown';
import './../styles/global.scss';
import YourComponent from '@/components/ui-kit/Dropdown-list/DropDown';
import Select from '@/components/ds-core/select';

export default function Home() {
  const options = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' }
  ];

  const handleSelect = (value: string) => {
    console.log(`Opção selecionada: ${value}`);
  };

  return (
    <div>
      <div style={{ width: 300, padding: 30 }}>
        <Select
          options={options}
          onSelect={handleSelect}
          placeholder="Selecione uma opção"
        />
      </div>
    </div>
  );
}
