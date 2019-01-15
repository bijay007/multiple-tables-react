import React from 'react';
import PropTypes from 'prop-types';
import { featureName } from '../../common/styles';

// This dumb component receives feature name and status and prints it

const FeatureHeader = (props) => {
  const { featureDetails } = props;
  const statusColor = featureDetails[1];
  return (
    <thead className={featureName} style={{ backgroundColor: statusColor }}>
      <tr>
        <td>{featureDetails[0]}</td>
      </tr>
    </thead>
  );
};

export default FeatureHeader;

FeatureHeader.propTypes = {
  featureDetails: PropTypes.arrayOf({
    featureName: PropTypes.string.isRequired,
    featureStatus: PropTypes.string.isRequired,
  }).isRequired,
};
