import React, { Component } from 'react';
import axios from 'axios';

export default class Fib extends Component {
  state = {
    values: {},
    seenIndexes: [],
    index: '',
  };

  componentDidMount = () => {
    this.fetchIndexes();
    this.fetchValues();
  };

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const indexes = await axios.get('/api/values/all');
    this.setState({ seenIndexes: indexes.data });
  }

  renderSeenIndexes = () => {
    console.log(this.state.seenIndexes);
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  };

  renderValues = () => {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} | calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/value', {
      index: this.state.index,
    });
    this.setState({ values: '' });
  };

  render() {
    return (
      <div style={{ margin: '10%' }}>
        <form action='POST' onSubmit={this.handleOnSubmit}>
          <label htmlFor='indexes'>Enter the index value:</label>
          <input
            type='text'
            name='indexes'
            id='indexes'
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button type='submit'>Submit</button>
        </form>
        <div>
          <h3>Indexes you've seen</h3>
          <p>{this.renderSeenIndexes()}</p>

          <h3>Calculated values</h3>
          {this.renderValues()}
        </div>
      </div>
    );
  }
}
