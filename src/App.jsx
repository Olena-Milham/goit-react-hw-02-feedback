
import {FeedbackOptions} from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Box } from 'components/UI/Box';
import {Component} from 'react';

class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleLeaveFeedback =(option)=>{
    this.setState(prevState => {
    return {[option]:prevState[option] +1};
    })
  }

  countTotalFeedback = () => {
    const  { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage=()=>{
    const total=this.countTotalFeedback();
    const {good}=this.state;
    const positiveFeedback=total !== 0 ? Math.round((good * 100) / total) : 0;
    return positiveFeedback
}

  render (){
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage=this.countPositiveFeedbackPercentage()
    const options =Object.keys(this.state)
    return (
      <Box as='main' pl={5} pt={5} width='50%'> 
      <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback}/>
      <Statistics 
         good={good}
         neutral={neutral}
         bad={bad}
         total={total}
         positivePercentage={percentage}
      />
      </Box>
  );
}
};

export default App;





// ===== when there are a lot of items 
  // countTotalFeedback=()=>{
  //   let total = Object.values(this.state).reduce((acc, value) => {
  //     return acc + value;
  //   }, 0);
  //   return total;
  // }

