import { Component } from 'react';

class CreateFeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Please leave feedback</h2>
          <button
            className="feedbackButton"
            type="button"
            name="good"
            onClick={this.handleClick}
          >
            Good
          </button>
          <button
            className="feedbackButton"
            type="button"
            name="neutral"
            onClick={this.handleClick}
          >
            Neutral
          </button>
          <button
            className="feedbackButton"
            type="button"
            name="bad"
            onClick={this.handleClick}
          >
            Bad
          </button>
        </div>
        <hr />
        <hr />
        <div className="container">
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default CreateFeedbackForm;
