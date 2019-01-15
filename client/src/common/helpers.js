/** Commonly used helper methods */

const checkFeatureStatus = (index, arrControls) => {
  const randomControl = arrControls[index];
  let status = '';
  if (randomControl.deviationTotal > randomControl.tolerance) {
    status = 'red';
  } else if (randomControl.deviationTotal === randomControl.tolerance) {
    status = 'yellow';
  } else {
    status = 'green';
  }
  return status;
};

module.exports = checkFeatureStatus;
