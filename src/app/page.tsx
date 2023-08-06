'use client';

import ExpandCard from '@/components/ExpandCard';
import VideoCard from '@/components/video-card-hover';
import Breadcrumb from '@/components/ds-scss/breadcrumb';
import Button from '@/components/ds-scss/button';
import Divider from '@/components/ds-scss/divider';
import { Col } from '@/components/ds-scss/grid/col';
import { Row } from '@/components/ds-scss/grid/row';
import Input from '@/components/ds-scss/input';
import MultipleSelect from '@/components/ds-scss/multiple-select';
import CustomSelect from '@/components/ds-scss/select';
import Switch from '@/components/ds-scss/switch';
import { routes } from '@/mock/breadcrumb';

import { Options } from '@/mock/select-mock';
import SlidingTabs from '@/components/sliding-tabs';
import Form from '@/components/signup-form';
import AccordionItem from '@/components/react-faq-accordion';
import { useEffect, useState } from 'react';
import { Timeline } from '@/components/ui-component-kit/timeline';
import Tabs from '@/components/ui-component-kit/tab-mutiple-select-card';

export default function Home() {
  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  const onChange = (checked: any) => {
    console.log(`switch to ${checked}`);
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
      {/* <div>
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
      </div> */}
      {/* <h3>breadcrumb</h3>
      <Breadcrumb routes={routes} />
      <h3>Switch</h3>
      <Switch defaultChecked={true} onChange={onChange} /> */}
      <div>
        <Tabs />
      </div>
    </div>
  );
}
