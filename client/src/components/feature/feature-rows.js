import React from 'react';
import { featureControls } from '../../common/styles';

// This dumb component creates the rows with control measurements for a feature table

const ListControls = (props) => {
  const { listControls } = props;
  const randomizeBits = () => Math.round(Math.random());
  return (
    listControls.map(control => (
      <tr className={featureControls} key={Math.random().toString(10).substr(2, 6)}>
        <td>{control.name}</td>
        <td>{control.deviation || randomizeBits()}</td>
        <td>{control.deviationTotal || randomizeBits()}</td>
        <td>{control.tolerance || randomizeBits()}</td>
      </tr>
    ))
  );
};

export default ListControls;
