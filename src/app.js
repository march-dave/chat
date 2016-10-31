import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './components/Content';
// import Header from './components/Headers';

class App extends React.Component {
  render() {
    return (
        <div>
          This is the React App
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// <Header title={this.props.headerTitle} />
// <Content title={this.props.contentTitle} body={this.props.contentBody}/>
// RenderDOM.render(<App headerTitle="Welcome Header" contentTitle="Welcome Content" contentBody="Welcome Content Body"/> ,AppElement);
