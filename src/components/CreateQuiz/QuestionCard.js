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
    this.saveChanges = this.saveChanges.bind(this);
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
    // console.log(this.state);
  }

  saveChanges() {
    // console.log(this.props.question.question_id);
    this.props.handleChange(
      this.props.question.question_id,
      this.state.question,
      this.state.answer,
      this.state.dummy_data_a,
      this.state.dummy_data_b,
      this.state.dummy_data_c
    );

    this.setState({
      flag: !this.state.flag,
      question: "",
      answer: "",
      dummy_data_a: "",
      dummy_data_b: "",
      dummy_data_c: ""
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.question.dummy_data_a ? (
          !this.state.flag ? (
            <div>
              <p>Question: {this.props.question.question}</p>
              <p>Answer: {this.props.question.answer}</p>
              <p>ID: {this.props.question.question_id}</p>
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
              <input
                placeholder="Enter new question"
                onChange={e => this.changeState("question", e.target.value)}
              />
              <input
                placeholder="Enter new answer"
                onChange={e => this.changeState("answer", e.target.value)}
              />
              <input
                placeholder="Enter new mulitple choice answer"
                onChange={e => this.changeState("dummy_data_a", e.target.value)}
              />
              <input
                placeholder="Enter new mulitple choice answer"
                onChange={e => this.changeState("dummy_data_b", e.target.value)}
              />
              <input
                placeholder="Enter new mulitple choice answer"
                onChange={e => this.changeState("dummy_data_c", e.target.value)}
              />
              <button onClick={this.saveChanges}> save changes</button>
            </div>
          )
        ) : !this.state.flag ? (
          <div>
            <p>Question: {this.props.question.question}</p>
            <p>Answer: {this.props.question.answer}</p>
            <p>ID: {this.props.question.question_id}</p>
            <button onClick={this.changeFlag}>edit question and answer</button>
            <button onClick={this.saveChanges}> save changes</button>
          </div>
        ) : (
          <div>
            <p>Question: {this.props.question.question}</p>
            <p>Answer: {this.props.question.answer}</p>
            <input
              placeholder="Enter new question"
              onChange={e => this.changeState("question", e.target.value)}
            />

            <input
              placeholder="Enter new answer"
              onChange={e => this.changeState("answer", e.target.value)}
            />
            <button onClick={this.saveChanges}> save changes</button>
          </div>
        )}
      </div>
    );
  }
}
