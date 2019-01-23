import React from 'react';
import PropTypes from 'prop-types';
import { featureName } from '../../common/styles';

// This dumb component receives feature name and status and prints it

const FeatureName = (props) => {
  const { featureDetails } = props;
  const statusColor = featureDetails[1];
  return (
    <div className={featureName} style={{ backgroundColor: statusColor }}>
      {featureDetails[0]}
    </div>
  );
};

export default FeatureName;

FeatureName.propTypes = PropTypes.arrayOf({
  featureName: PropTypes.string.isRequired,
  featureStatus: PropTypes.string.isRequired,
}).isRequired;
