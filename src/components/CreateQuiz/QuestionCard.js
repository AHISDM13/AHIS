import React from "react";

export default class QuestionCard extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      question: "",
      answer: "",
      dummy_data_a: "",
      dummy_data_b: "",
      dummy_data_c: ""
    };
    this.changeFlag = this.changeFlag.bind(this);
  }

  changeFlag() {
    this.setState({
      flag: !this.state.flag
    });
  }

  changeState(prop, val) {
    this.setState({
      [prop]: val
    });
    console.log(this.state.question);
  }

  render() {
    return (
      <div>
        {this.props.question.dummy_data_a ? (
          !this.state.flag ? (
            <div>
              <p>Question: {this.props.question.question}</p>
              <p>Answer: {this.props.question.answer}</p>
              <p>
                Multiple Choice Answer 1: {this.props.question.dummy_data_a}
              </p>
              <p>
                Multiple Choice Answer 2: {this.props.question.dummy_data_b}
              </p>
              <p>
                Multiple Choice Answer 3: {this.props.question.dummy_data_c}
              </p>
              <button onClick={this.changeFlag}>
                edit question and answer
              </button>
            </div>
          ) : (
            <div>
              <input
                defaultValue={this.props.question.question}
                onChange={e => this.changeState("question", e.target.value)}
              />
              <input defaultValue={this.props.question.answer} />
              <input defaultValue={this.props.question.dummy_data_a} />
              <input defaultValue={this.props.question.dummy_data_b} />
              <input defaultValue={this.props.question.dummy_data_c} />
              <button> save changes</button>
              <button> delete question and answer</button>
            </div>
          )
        ) : !this.state.flag ? (
          <div>
            <p>Question: {this.props.question.question}</p>
            <p>Answer: {this.props.question.answer}</p>
            <button onClick={this.changeFlag}>edit question and answer</button>
            <button> save changes</button>
            <button> delete question and answer</button>
          </div>
        ) : (
          <div>
            <input defaultValue={this.props.question.question} />
            <input defaultValue={this.props.answer.answer} />
            <button> save changes</button>
            <button> delete question and answer</button>
          </div>
        )}
      </div>
    );
  }
}
