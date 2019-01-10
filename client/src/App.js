import React, { PureComponent } from 'react';
import axios from 'axios';
import PartMainBody from './components/part/part-table';
import { appContainer } from './common/styles';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      partDetails: {},
    };
  }

  componentDidMount() {
    const partNum = 1;
    axios.get(`client/public/assets/part${partNum}-data.json`)
      .then(data => this.setState({ partDetails: data.data }))
      .catch(error => console.error(error));
  }

  render() {
    const { partDetails } = this.state;
    if (partDetails.name) {
      return (
        <main className={appContainer}>
          {
            <PartMainBody part={partDetails} />
          }
        </main>
      );
    }
    return null;
  }
}
