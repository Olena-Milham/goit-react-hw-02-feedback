import PropTypes from 'prop-types';
import { BtnItem, BtnList, FeedbackBtn } from "./FeedbackOptions.styled";
import { Section } from 'components/UI/Section/Section';

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


// ======== Notes =======
// anonymous function is needed if we need 
// to pass an argument or do smth extra 
// {() => onLeaveFeedback(option)}>
// <FeedbackBtn type='button' onClick={() => onLeaveFeedback(option)}> {option} </FeedbackBtn>
// otherwise just pass the function link : onClick= onLeaveFeedback

//    <MainTitle> Please leave Feedback </MainTitle>
//    <h1> Please leave Feedback </h1> 
//   <Section title='Please leave Feedback'>