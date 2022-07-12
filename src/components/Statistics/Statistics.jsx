import PropTypes from 'prop-types';
import { Notification } from 'components/Statistics/Notification';
import { Feedback } from './Feedback';
import { Item, List} from './Statistics.styled';
import { Section } from 'components/UI/Section';

export const Statistics = ( {good, neutral, bad, total, positivePercentage})=>(
    <Section title='Statistics'>     
      <List>
      <Item> Good:{good} </Item>
      <Item> Neutral:{neutral} </Item>
      <Item> Bad: {bad} </Item>
     </List>

        {total ===0 ? (<Notification message="There is no feedback" />) :
       (
       <Feedback total={total}  positivePercentage={positivePercentage}/>)
        }
     </Section>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};