import React from 'react';
import './styles.css';
export default function SwitchButton() {
  return (
    <div>
      <div className="container">
        <input id="checkbox" name="checkbox" type="checkbox" />
        <label className="label" htmlFor="checkbox"></label>
      </div>
    </div>
  );
}
