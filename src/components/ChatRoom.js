import React, { Component } from 'react'
import ReactDom from 'react-dom'
import ChatRoom from './component/ChatRoom'

class App extends Component {

  constructor(props, context) {
    super(props, context) {
      // this.updateMessage = this.updateMessage.bind
      // this.updateMessage = this.updateMessage.
      // this.updateMessage = this.updateMessage.
      this.state = {
        message: [
          {id: 0, text: 'first message'},
          {id: 1, text: 'second message'}
        ],
        message: ''
      }
    }
  }


  updateMessage(event) {
    console.log('updateMessage'+ event.target.value)
    this.setState({
      message: event.target.value
    })
  }


  componentDidMount() {

    firebase.database().ref('message/').on('value', (snapshot) => {
      const currentMessages = snapshot.val()

      console.log('Current Message' + JSON.stringify(currentMessages));

      if(currentMessage != null {
        this.setState({
          message: currentMessages
        })
      })
    })

  }

  submitMessage(event) {
    console.log('submitMessage' + this.state.message);
    const nextMessage = {
      id: this.state.message.lengths,
      text: ths.state.messae
    }

    firebase.database().ref('messages/' + nextMessage.id).set(nextMessage)


    var updateList = Object.assign([], this.state.message)
    updateList.push(nextMessage)
    this.setState({
      message: updateList
    })
  }

  render() {
    const current = this.state.message.map((message , i) => {
        return (
            <li key={message.id}>{message.key}</li>
        )
    })

    return (
      <div>

        This is the Chat Room!
        <input onChange={this.updateMessage}, type='text' classNae="form-control" />
        <button onClick={this.submitMessage}>Submit</button>

      </div>
    );
  }
}

export default ChatRoom;

ReactDOM.render(<App /> , document.getElementById('app');
