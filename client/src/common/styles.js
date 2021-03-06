/** Contains common and global styles for reusuable components */

import { css } from 'emotion';

const appContainer = css({
  boxSizing: 'border-box',
  margin: '40px auto',
  width: '90%',
  maxWidth: '100rem',
});

const partHeader = css({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.5rem',
});

const partTable = css({
  display: 'grid',
  gridGap: '0.25rem',
  gridTemplateRows: 'minmax(15rem, auto)',
  gridTemplateColumns: 'repeat(auto-fill, minmax(13rem, max-content))',
  gridColumnStart: 'auto',
  gridRowStart: 'auto',
  gridAutoFlow: 'row',
  alignItems: 'baseline',
  padding: '0.5rem',
});

const featureTable = css({
  display: 'grid',
  boxShadow: '0px 0px 0.5px 0.5px',
});

const featureName = css({
  padding: '0.2rem',
  color: '#fff',
});

const featureControls = css({
  '& th': {
    padding: '0.5rem',
  },
  '& th:first-child': {
    paddingRight: '0.75rem',
  },
  '& td': {
    padding: '0.9rem',
  },
});

export {
  appContainer,
  partHeader,
  partTable,
  featureTable,
  featureName,
  featureControls,
};
