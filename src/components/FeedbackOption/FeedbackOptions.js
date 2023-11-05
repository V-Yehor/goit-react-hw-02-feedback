import { FeedbackBtn } from '../FeedbackOption/FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackBtn onClick={onLeaveFeedback}>{options}</FeedbackBtn>
    </>
  );
};
