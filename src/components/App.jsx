import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGoodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  updateNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  updateBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={this.updateGoodFeedback}>Good</button>
        <button onClick={this.updateNeutralFeedback}>Neutral</button>
        <button onClick={this.updateBadFeedback}>Bad</button>
        <h2>Statistics</h2>
        {!this.countTotalFeedback() && (
          <>
            <h3>There is no feedback</h3>
          </>
        )}
        {this.countTotalFeedback() > 0 && (
          <>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </>
        )}
      </>
    );
  }
}

export const App = () => {
  return (
    <div>
      <Feedback />
      <GlobalStyle />
    </div>
  );
};
