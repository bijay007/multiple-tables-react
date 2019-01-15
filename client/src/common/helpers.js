/** Commonly used helper methods */

const checkFeatureStatus = (index, arrControls) => {
  const randomControl = arrControls[index];
  let status = '';
  if (randomControl.deviationTotal > randomControl.tolerance) {
    status = 'Red';
  } else if (randomControl.deviationTotal === randomControl.tolerance) {
    status = 'Yellow';
  } else {
    status = 'Green';
  }
  return status;
};

module.exports = checkFeatureStatus;
