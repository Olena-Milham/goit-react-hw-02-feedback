import PropTypes from 'prop-types';
import { BtnItem, BtnList, FeedbackBtn } from "./FeedbackOptions.styled";
import { Section } from 'components/UI/Section';

export const FeedbackOptions =({ options, onLeaveFeedback })=> (
    <Section title='Please leave Feedback'>
    <BtnList>
    {options.map(option => (
        <BtnItem key={option}>
        <FeedbackBtn type='button' onClick={() => onLeaveFeedback(option)}> {option} </FeedbackBtn>
    </BtnItem>
    ))}
    </BtnList>
    </Section>
);
   

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
