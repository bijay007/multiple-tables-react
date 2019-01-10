import React from 'react';

// This dumb component receives an array of control objects (control name + it's measurements)
// and its only job is to create the rows for feature table

const ControlMeasurements = (props) => {
  const { listControls } = props;
  return (
    listControls.map(control => (
      <tr key={control.name.toString()}>
        <td>{control.name || 'Control'}</td>
        <td>{control.deviation || 0}</td>
        <td>{control.deviationTotal || 0}</td>
        <td>{control.tolerance || 0}</td>
      </tr>
    ))
  );
};

export default ControlMeasurements;
