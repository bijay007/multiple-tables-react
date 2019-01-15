import React from 'react';
import PropTypes from 'prop-types';
import { featureTable, featureControls } from '../../common/styles';
import ListControls from './feature-rows';
import FeatureHeader from './feature-header';
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
    const featureName = feature.name;
    const { featureStatus } = this.state;
    return (
      <table className={featureTable}>
        <FeatureHeader featureDetails={[featureName, featureStatus]} />
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
            <ListControls listControls={feature.controls} />
          </tbody>
        }
      </table>
    );
  }
}

FeatureTable.propTypes = {
  feature: PropTypes.shape({
    name: PropTypes.string.isRequired,
    controls: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
