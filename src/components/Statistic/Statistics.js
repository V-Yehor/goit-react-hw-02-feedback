import { StatisticInfo } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {!total && (
        <>
          <h3>There is no feedback</h3>
        </>
      )}
      {total > 0 && (
        <>
          <StatisticInfo>Good: {good}</StatisticInfo>
          <StatisticInfo>Neutral: {neutral}</StatisticInfo>
          <StatisticInfo>Bad: {bad}</StatisticInfo>
          <StatisticInfo>Total: {total}</StatisticInfo>
          <StatisticInfo>
            Positive feedback: {positivePercentage}%
          </StatisticInfo>
        </>
      )}
    </>
  );
};
