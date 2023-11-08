import { FeedbackBtn } from '../FeedbackOption/FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => (
        <FeedbackBtn key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </FeedbackBtn>
      ))}
    </>
  );
};
