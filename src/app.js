import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return(
      <Header title={this.props.headerTitle} />
    );
  }


}



ReactDOM.render(<App headerTitle="Welcome!"/>, docuement.getElementById('app'));
