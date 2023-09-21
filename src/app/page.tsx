'use client';
import DropdownSelect from '@/components/ds-core/dropdown-select';
import './../styles/global.scss';
import Select from '@/components/ds-core/select';
import DropdownSelectSC from '@/components/ds-core/dropdown-select-sc';
import Button from '@/components/ds-core/button';
import Spinner from '@/components/ds-core/spinner';

export default function Home() {
  const array = [
    {
      _id: '1',
      text: 'approved',
      value: 'approved',
      labelValue: 'approved1'
    },
    {
      _id: '2',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'components'
    },
    {
      _id: '3',
      text: 'approved',
      value: 'approved',
      labelValue: 'button'
    },
    {
      _id: '4',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'dropdown'
    },
    {
      _id: '5',
      text: 'approved',
      value: 'approved',
      labelValue: '12314'
    },
    {
      _id: '6',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'asfafasf'
    },
    {
      _id: '7',
      text: 'approved',
      value: 'approved',
      labelValue: 'teteu'
    },
    {
      _id: '8',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'text qwqwqq'
    },
    {
      _id: '9',
      text: 'approved',
      value: 'approved',
      labelValue: 'approved ssssss'
    },
    {
      _id: '10',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'rejected 1111'
    },
    {
      _id: '11',
      text: 'approved',
      value: 'approved',
      labelValue: 'approved 333333s'
    },
    {
      _id: '12',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'rejected 1231231241'
    },
    {
      _id: '13',
      text: 'approved',
      value: 'approved',
      labelValue: 'approved'
    },
    {
      _id: '14',
      text: 'rejected',
      value: 'rejected',
      labelValue: 'rejected asdqwrqr1241'
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

        {/* <Button onClick={() => console.log('oi')}>iu</Button> */}
        {/* <Select
          options={options}
          onSelect={handleSelect}
          placeholder="Selecione uma opção"
        /> */}

        <Spinner />
      </div>
    </div>
  );
}
