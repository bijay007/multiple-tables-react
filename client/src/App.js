import React, { PureComponent } from 'react';
import axios from 'axios';
import PartMainBody from './components/part/part-table';
import { appContainer } from './common/styles';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      partNum: 0,
      partDetails: {},
    };
    this.getNextPartNum = this.getNextPartNum.bind(this);
    this.fetchJson = this.fetchJson.bind(this);
  }

  componentDidMount() {
    this.intervalFunc = setInterval(() => this.fetchJson(), 10000);
    this.fetchJson();
  }

  componentWillUnmount() {
    clearInterval(this.intervalFunc);
  }

  getNextPartNum() { // basic mock function to switch between the 2 available files
    const { partNum } = this.state;
    if (partNum === 1) {
      return 2;
    }
    return 1;
  }

  fetchJson() {
    axios.get(`client/public/assets/part${this.getNextPartNum()}-data.json`)
      .then(data => this.setState({
        partDetails: data.data,
        partNum: this.getNextPartNum(),
      }))
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
