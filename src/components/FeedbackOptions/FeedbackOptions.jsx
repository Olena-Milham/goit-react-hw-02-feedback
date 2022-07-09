import PropTypes from 'prop-types';
import { Box } from "components/UI/Box";
import { FeedbackBtn } from "./FeedbackOptions.styled";

export const FeedbackOptions =({ options, onLeaveFeedback })=> (
    <Box as='section'>
    <h1> Please leave Feedback </h1>
    <ul>
    {options.map(option => (
        <li key={option}>
        <FeedbackBtn type='button' onClick={() => onLeaveFeedback(option)}> {option} </FeedbackBtn>
    </li>
    ))}
    </ul>
    </Box>
);
   

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };





