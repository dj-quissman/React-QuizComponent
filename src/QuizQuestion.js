import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = { incorrectAnswer: false, errCount: 0 };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });

      this.props.showNextQuestionHandler(); //this method is declared above
    } else {
      this.setState({
        incorrectAnswer: true,
        errCount: this.state.errCount + 1,
      });

      this.props.setFinalErrorsHandler(this.state.errCount + 1); //this method is declared above
    }
  }
  render() {
    return (
      <div>
        <main>
          <section>
            <h2 className="questionDiv">
              {this.props.quiz_question.instruction_text}
            </h2>
          </section>
          <section className="buttons">
            <ul>
              {this.props.quiz_question.answer_options.map(
                (answer_option, index) => {
                  return (
                    <QuizQuestionButton
                      key={index}
                      button_text={answer_option}
                      clickHandler={this.handleClick.bind(this)}
                    />
                  );
                }
              )}
            </ul>
          </section>
          {this.state.incorrectAnswer ? (
            <div className="errorCountDiv error">
              <div className="">Sorry, that's not right.</div>
              <div>Error count = {this.state.errCount}</div>
            </div>
          ) : null}
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
