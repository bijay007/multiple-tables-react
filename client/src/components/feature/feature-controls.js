import React from 'react';
import { featureControls } from '../../common/styles';
// This dumb component creates the rows with control measurements for a feature table

const FeatureControls = (props) => {
  const { listControls } = props;
  const randomizeBits = () => Math.round(Math.random());
  return (
    listControls.map(control => (
      <div key={Math.random().toString(10).substr(2, 6)} className={featureControls}>
        <div>{control.name}</div>
        <div>{control.deviation || randomizeBits()}</div>
        <div>{control.deviationTotal || randomizeBits()}</div>
        <div>{control.tolerance || randomizeBits()}</div>
      </div>
    ))
  );
};

export default FeatureControls;
