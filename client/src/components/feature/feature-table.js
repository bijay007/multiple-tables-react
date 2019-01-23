import React from 'react';
import PropTypes from 'prop-types';
import { featureTable } from '../../common/styles';
import FeatureName from './feature-name';
import FeatureHeader from './feature-header';
import FeatureControls from './feature-controls';
import checkFeatureStatus from '../../common/helpers';

// This component passes data to feature-header and feature-row component

export default class FeatureTable extends React.Component {
  constructor() {
    super();
    this.state = {
      featureStatus: '',
    };
    this.getFeatureStatus = this.getFeatureStatus.bind(this);
  }

  componentDidMount() {
    this.getFeatureStatus();
  }

  componentWillReceiveProps() {
    this.getFeatureStatus();
  }

  getFeatureStatus() {
    const { feature } = this.props;
    // using random control (minsize is 4) to decide feature status (for mocking purpose)
    const randomControl = Math.round(Math.random() * 3);
    const statusColor = checkFeatureStatus(randomControl, feature.controls);
    this.setState({ featureStatus: statusColor });
  }

  render() {
    const { feature } = this.props;
    const { featureStatus } = this.state;
    const featureName = feature.name;
    return (
      <div className={featureTable}>
        <FeatureName featureDetails={[featureName, featureStatus]} />
        <FeatureHeader />
        <FeatureControls listControls={feature.controls} />
      </div>
    );
  }
}

FeatureTable.propTypes = {
  feature: PropTypes.shape({
    name: PropTypes.string.isRequired,
    controls: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
