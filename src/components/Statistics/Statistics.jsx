import PropTypes from 'prop-types';
import { Box } from "components/UI/Box";

export const Statistics = ( {good, neutral, bad})=>(
    <Box as='section'>
     <h2> Statistics </h2>

      <Box as='ul'>
      <li> Good:{good} </li>
      <li> Neutral:{neutral} </li>
      <li> Bad: {bad} </li>
     </Box>

     </Box>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};