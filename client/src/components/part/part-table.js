import React from 'react';
import PropTypes from 'prop-types';
import { partHeader, partTable } from '../../common/styles';
import FeatureTable from '../feature/feature-table';

// This dumb component iterate through features array to create multiple tables for the given part

const PartMainBody = (props) => {
  const { part } = props;
  return (
    <section>
      <header className={partHeader}>
        {part.name}
      </header>
      <section className={partTable}>
        {
          part.features.map(feature => (
            <FeatureTable feature={feature} key={feature.name.toString()} />
          ))
        }
      </section>
    </section>
  );
};

export default PartMainBody;

PartMainBody.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
