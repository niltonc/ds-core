'use client';

import Button from '@/components/ds-scss/button';
import Divider from '@/components/ds-scss/divider';
import { Col } from '@/components/ds-scss/grid/col';
import { Row } from '@/components/ds-scss/grid/row';
import Input from '@/components/ds-scss/input';
import MultipleSelect from '@/components/ds-scss/multiple-select';
import CustomSelect from '@/components/ds-scss/select';

import { Options } from '@/mock/select-mock';

export default function Home() {
  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <div
      style={{
        gap: 5,
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h3>Button</h3>
      <Button>PRIMARY</Button>
      <Button disabled>PRIMARY</Button>
      <Button variant="outline">OUTLINE</Button>
      <Button disabled variant="outline">
        OUTLINE
      </Button>
      <Button variant="text">TEXT</Button>
      <Button size="large">Large Button</Button>
      <Button size="middle">Middle Button</Button>
      <Button size="small">Small Button</Button>
      <h3>Input / TextField</h3>
      <Input placeholder="Basic Input / large" />
      <Input placeholder="Password Input" type="password" />
      <Input variant="middle" placeholder="Middle" />
      <Input variant="small" placeholder="Small" />
      <h3>Select / Multiple Select</h3>
      <CustomSelect
        options={Options}
        onSelect={handleSelect}
        placeholder="Selecione uma opção"
      />
      <MultipleSelect
        options={Options}
        onSelect={handleSelect}
        placeholder="Multiple select"
      />
      <h3>Divier</h3>
      solid:
      <Divider />
      dotted:
      <Divider type="dotted" />
      dashed:
      <Divider type="dashed" />
      <h3>Grid</h3>
      <div>
        <Row style={{ background: 'purple' }}>
          <Col span={24} align="flex-end" alignVertical="bottom" order="last">
            col
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ background: 'yellow' }}>
            col-12
          </Col>
          <Col span={12} style={{ background: 'red' }}>
            col-12
          </Col>
        </Row>
        <Row>
          <Col span={8} style={{ background: 'blue' }}>
            col-8
          </Col>
          <Col span={8} style={{ background: 'green' }}>
            col-8
          </Col>
          <Col span={8} style={{ background: 'yellow' }}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={6} style={{ background: 'purple' }}>
            col-6
          </Col>
          <Col span={6} style={{ background: 'red' }}>
            col-6
          </Col>
          <Col span={6} style={{ background: 'blue' }}>
            col-6
          </Col>
          <Col span={6} style={{ background: 'green' }}>
            col-6
          </Col>
        </Row>
      </div>
    </div>
  );
}
