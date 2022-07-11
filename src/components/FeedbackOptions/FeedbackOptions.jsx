import PropTypes from 'prop-types';
import { Box } from "components/UI/Box";
import { BtnItem, BtnList, FeedbackBtn, MainTitle } from "./FeedbackOptions.styled";

export const FeedbackOptions =({ options, onLeaveFeedback })=> (
    <Box as='section'>
    <MainTitle> Please leave Feedback </MainTitle>
    <BtnList>
    {options.map(option => (
        <BtnItem key={option}>
        <FeedbackBtn type='button' onClick={() => onLeaveFeedback(option)}> {option} </FeedbackBtn>
    </BtnItem>
    ))}
    </BtnList>
    </Box>
);
   

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };





