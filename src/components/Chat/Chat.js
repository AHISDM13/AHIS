import React from "react";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: []
    };
    this.socket = io("localhost:3001");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: "" });
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="card-title">Class Chat</div>
            <hr />
            <div className="messages" />
          </div>
          <div className="card-footer">
            {/* THIS NEEDS TO GRAB USER FROM USER REDUCER??? */}
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={ev => this.setState({ username: ev.target.value })}
            />
            <br />
            <input
              type="text"
              placeholder="Message"
              value={this.state.message}
              onChange={ev => this.setState({ message: ev.target.value })}
            />
            <br />
            <button onClick={this.sendMessage}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
