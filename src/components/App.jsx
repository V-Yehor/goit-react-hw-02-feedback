import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import { Section } from './Section/Section';

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="good"
            onLeaveFeedback={this.updateGoodFeedback}
          />
          <FeedbackOptions
            options="neutral"
            onLeaveFeedback={this.updateNeutralFeedback}
          />
          <FeedbackOptions
            options="bad"
            onLeaveFeedback={this.updateBadFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
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
