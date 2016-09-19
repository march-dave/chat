import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content title={this.props.contentTitle} body={this.props.contentBody} />
      </div>
    )
  }
}

ReactDOM.render(<App headerTitle="Welcome!" contentTitle="Here is a ContenetTitle" contentBody="I am ContenetBody"/> , document.getElementById('app') );
