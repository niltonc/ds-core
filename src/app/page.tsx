'use client';
import DropdownSelect from '@/components/ds-core/dropdown-select';
import './../styles/global.scss';
import Select from '@/components/ds-core/select';

export default function Home() {
  const options = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' }
  ];

  const array = [
    {
      _id: '1',
      text: 'approved',
      value: 'approved',
      labelValue: 'approved'
    },
    {
      _id: '2',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'rejected'
    }
  ];

  const handleSelect = (value: string) => {
    console.log(`Opção selecionada: ${value}`);
  };

  return (
    <div>
      {/* <div style={{ width: 300, padding: 30 }}>
        <Select
          options={options}
          onSelect={handleSelect}
          placeholder="Selecione uma opção"
        />
      </div> */}

      <DropdownSelect options={array} />
    </div>
  );
}
