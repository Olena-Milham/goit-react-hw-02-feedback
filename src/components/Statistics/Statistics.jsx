import PropTypes from 'prop-types';
import { Box } from "components/UI/Box";
import { Notification } from 'components/Notification/Notification';
import { Feedback } from './Feedback';

export const Statistics = ( {good, neutral, bad, total, positivePercentage})=>(
    <Box as='section'>
     <h2> Statistics </h2>

      <Box as='ul'>
      <li> Good:{good} </li>
      <li> Neutral:{neutral} </li>
      <li> Bad: {bad} </li>
     </Box>

        {total ===0 ? (<Notification message="There is no feedback" />) :
       (
       <Feedback total={total}  positivePercentage={positivePercentage}/>)
        }
      
     </Box>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};