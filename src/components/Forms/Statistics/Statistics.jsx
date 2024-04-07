const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {this.state.good}</p>
      <p>Neutral: {this.state.neutral}</p>
      <p>Bad: {this.state.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
