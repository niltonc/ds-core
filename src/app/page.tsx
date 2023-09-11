'use client';
import DropdownSelect from '@/components/ds-core/dropdown-select';
import './../styles/global.scss';
import Select from '@/components/ds-core/select';
import DropdownSelectSC from '@/components/ds-core/dropdown-select-sc';

export default function Home() {
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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

  const options = [
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
      <div style={{ padding: 30 }}>
        {/* <DropdownSelect options={array} /> */}

        <DropdownSelectSC
          options={array}
          placeholder="Selecione uma opção"
          disabled
        />

        {/* <Select
          options={options}
          onSelect={handleSelect}
          placeholder="Selecione uma opção"
        /> */}
      </div>
    </div>
  );
}
