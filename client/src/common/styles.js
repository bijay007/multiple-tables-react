/** Contains common and global styles for reusuable components */

import { css } from 'emotion';

const appContainer = css({
  display: 'flex',
  justifyContent: 'center',
  margin: '40px auto',
  width: '80%',
  maxWidth: '85rem',
});

const partBody = css({
  display: 'flex',
  flexFlow: 'column nowrap',
});

const partHeader = css({
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '10px',
});

const partTable = css({
  display: 'flex',
  padding: '10px',
  width: '100%',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
});

const featureTable = css({
  boxShadow: '0px 0px 0.5px 0.5px',
});

const featureName = css({
  backgroundColor: 'green',
});


export {
  appContainer,
  partBody,
  partHeader,
  partTable,
  featureTable,
  featureName,
};
