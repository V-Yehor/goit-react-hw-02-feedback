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
      <StatisticInfo>Good: {good}</StatisticInfo>
      <StatisticInfo>Neutral: {neutral}</StatisticInfo>
      <StatisticInfo>Bad: {bad}</StatisticInfo>
      <StatisticInfo>Total: {total}</StatisticInfo>
      <StatisticInfo>Positive feedback: {positivePercentage}%</StatisticInfo>
    </>
  );
};
