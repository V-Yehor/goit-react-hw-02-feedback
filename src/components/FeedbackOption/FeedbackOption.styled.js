import { styled } from 'styled-components';

export const FeedbackBtn = styled.button`
  display: inline-block;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px grey;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &::first-letter {
    text-transform: capitalize;
  }
`;
