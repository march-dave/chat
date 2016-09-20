import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return(
      <Header title={this.props.headerTitle} />
      <Content title={this.props.contenetTitle} body={this.props.contentBody} />

    );
  }
}

App.defaultProps = {
  headerTitle = "Default header Title",
  contentTitle = "Default content Title",
  contenBody = "Default content Body"
};

const appElement = docuement.getElementById('app'));
ReactDOM.render(<App />, appElement);
