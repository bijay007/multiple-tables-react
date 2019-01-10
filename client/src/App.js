import React, { PureComponent } from 'react';
import PartMainBody from './components/part/part-table';

export default class App extends PureComponent {
  constructor() {
    super();
    this.hi = 'hi';
  }

  render() {
    const part1 = { // hard-coded data
      name: 'Part A',
      features: [
        {
          name: 'Feature 1',
          controls: [
            {
              name: 'X',
              deviation: 0,
              deviationTotal: 0,
              tolerance: 0,
            },
            {
              name: 'Y',
              deviation: 0,
              deviationTotal: 1,
              tolerance: 0,
            },
          ],
        },
        {
          name: 'Feature 2',
          controls: [
            {
              name: 'Z',
              deviation: 1,
              deviationTotal: 0,
              tolerance: 1,
            },
          ],
        },
      ],
    };
    return (
      <div>
        <PartMainBody part={part1} />
      </div>
    );
  }
}
