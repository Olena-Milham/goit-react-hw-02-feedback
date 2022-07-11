import PropTypes from 'prop-types';
import { Box } from "components/UI/Box";
import { Notification } from 'components/Statistics/Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import { Item, List, Title } from './Statistics.styled';

export const Statistics = ( {good, neutral, bad, total, positivePercentage})=>(
    <Box as='section'>
     <Title> Statistics </Title>

      <List>
      <Item> Good:{good} </Item>
      <Item> Neutral:{neutral} </Item>
      <Item> Bad: {bad} </Item>
     </List>

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