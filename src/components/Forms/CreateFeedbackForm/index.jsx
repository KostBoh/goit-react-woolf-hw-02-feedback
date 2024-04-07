import { Component } from 'react';

class CreateFeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <div className="container">
          <h2>Please leave feedback</h2>
          <button
            className="feedbackButton"
            type="button"
            name="good"
            onClick={() => this.handleClick('good')}
          >
            Good
          </button>
          <button
            className="feedbackButton"
            type="button"
            name="neutral"
            onClick={() => this.handleClick('neutral')}
          >
            Neutral
          </button>
          <button
            className="feedbackButton"
            type="button"
            name="bad"
            onClick={() => this.handleClick('bad')}
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
          <p>Total feedback: {totalFeedback}</p>
          <p>Positive feedback percentage: {positivePercentage}%</p>
        </div>
      </div>
    );
  }
}

export default CreateFeedbackForm;
