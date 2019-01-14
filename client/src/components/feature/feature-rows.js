import React from 'react';
import { featureControls } from '../../common/styles';

// This dumb component creates the rows with control measurements for a feature table

const ControlMeasurements = (props) => {
  const { listControls } = props;
  return (
    listControls.map(control => (
      <tr className={featureControls} key={Math.random().toString(10).substr(2, 6)}>
        <td>{control.name}</td>
        <td>{control.deviation}</td>
        <td>{control.deviationTotal}</td>
        <td>{control.tolerance}</td>
      </tr>
    ))
  );
};

export default ControlMeasurements;
