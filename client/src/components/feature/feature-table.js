import React from 'react';
import PropTypes from 'prop-types';
import { featureTable, featureName, featureControls } from '../../common/styles';
import ControlMeasurements from './feature-rows';

// This dumb component creates outer table and passes a control list to table body component

const FeatureTable = (props) => {
  const { feature } = props;
  return (
    <table className={featureTable}>
      <thead className={featureName}>
        <tr>
          <td>{feature.name}</td>
        </tr>
      </thead>
      <thead>
        <tr className={featureControls}>
          <th>Control</th>
          <th>Dev</th>
          <th>Dev Out</th>
          <th>Tol</th>
        </tr>
      </thead>
      {
        <tbody>
          <ControlMeasurements listControls={feature.controls} />
        </tbody>
      }
    </table>
  );
};

export default FeatureTable;

FeatureTable.propTypes = {
  feature: PropTypes.shape({
    name: PropTypes.string.isRequired,
    controls: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
