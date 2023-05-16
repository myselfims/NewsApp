import React, { Component } from 'react';
import loading from './loading.gif';

export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} width='100' alt="loading" />
      </div>
    )
  }
}
