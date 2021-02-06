import React, { Component } from "react";

class QuizEnd extends Component {

handleResetClick() {
this.props.resetClickHandler()
}
  render() {
    return (
      <div className="quizEndDiv">
        <p>Thanks for playing!</p>
        <p>You made {this.props.sendFinalErrerScore} errors.</p>

        <a href="" onClick={this.handleResetClick.bind(this)}> Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;
