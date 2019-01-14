import React from 'react';
import { featureControls } from '../../common/styles';

// This dumb component receives an array of control objects (control name + it's measurements)
// and its only job is to create the rows for feature table

const ControlMeasurements = (props) => {
  const { listControls } = props;
  return (
    listControls.map(control => (
      <tr className={featureControls} key={Math.random().toString(10).substr(2, 6)}>
        <td>{control.name}</td>
        <td>{control.deviation || 0}</td>
        <td>{control.deviationTotal || 0}</td>
        <td>{control.tolerance || 0}</td>
      </tr>
    ))
  );
};

export default ControlMeasurements;
