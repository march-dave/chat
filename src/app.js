import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
// import Header from './components/Headers';

class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

  render() {
    return (
        <div>
          This is the React App
        <Content headerPros={this.props.contentProp}/>
          <input type='text' value={this.state.data} onChange={this.updateState} />
          <h4>{this.state.data}</h4>

          <h5>{this.props.appHeaderProp}</h5>

        </div>
    );
  }
}

ReactDOM.render(<App appHeaderProp="header Props" contentProp="I am the Content Props" />, document.getElementById('app'));

// <Header title={this.props.headerTitle} />
// <Content title={this.props.contentTitle} body={this.props.contentBody}/>
// ReactDOM.render(<App contentTitle="Welcome Content" contentBody="Welcome Content Body"/> , document.getElementById('app'));
