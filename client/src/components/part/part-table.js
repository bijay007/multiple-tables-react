import React from 'react';
import PropTypes from 'prop-types';
import FeatureTable from '../feature/feature-table';

// This dumb component receives part object containing part name and features array
// and its job is to iterate through features array so multiple tables for the part are created

const PartMainBody = (props) => {
  const { part } = props;
  return (
    <React.Fragment>
      <header>
        {part.name}
      </header>
      <main>
        {
          part.features.map(feature => (
            <FeatureTable feature={feature} key={feature.name.toString()} />
          ))
        }
      </main>
    </React.Fragment>
  );
};

export default PartMainBody;

PartMainBody.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
