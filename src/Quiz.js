import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
import Header from "./Header";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1,
    finalErrCountObj : 0 };
  }

  showNextQuestion() {
    this.setState((state) => {
      return { quiz_position: state.quiz_position + 1 };
    });
  }

  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }

  setFinalErrors(passedErrors) {
    this.setState({ finalErrCountObj : passedErrors})
  }

  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;

    return (
      <div className="imageDiv">
        <Header />
        {isQuizEnd ? (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} 
         sendFinalErrorScore = {this.state.finalErrCountObj}//
          />
        ) : (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}

            getErrorsFromBelow={this.setFinalErrors.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
