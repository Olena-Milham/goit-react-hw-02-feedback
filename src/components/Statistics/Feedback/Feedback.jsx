import PropTypes from 'prop-types';
import { FeedbackResult } from './Feedback.styled';
export const Feedback=({ total, positivePercentage})=>(
    <>
    <FeedbackResult> Total Feedback amount: {total} </FeedbackResult>
    <FeedbackResult> Positive Feedback Percentage: {positivePercentage} % </FeedbackResult>
</>
);

Feedback.propTypes={
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}