import React, { Component } from "react";

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
  render() {
    return (
      <div>
        <main>
          <section>
            <p>{this.props.quiz_position}</p>
          </section>
          <section className="buttons">
            <ul>
                <li>{this.state.quiz_position}</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
