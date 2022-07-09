
import {FeedbackOptions} from 'components/FeedbackOptions';
// import { Box } from 'components/UI/Box';
import {Component} from 'react';

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleOnLeaveFeedback =(option)=>{
    this.setState(prevState => {
      // console.log([option]); //key
      // console.log(prevState[option]); //value
      // good:0+1
      return {[option]:prevState[option] +1};
    })

  }

render (){
  return (
    <> 
    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleOnLeaveFeedback}/>
    </>

    //   <Box as='section'>
    //   <h2> Statistics </h2>
    //   <Box as='ul'>
    //     <p> Good: </p>
    //     <p> Neutral: </p>
    //     <p> Bad: </p>
    //   </Box>
    //   <div>
    //     <p> Total Feedback amount </p>
    //     <p> Positive Feedback Percentage </p>
    //   </div>
      
    // </Box>
    // </Box>
  )
}
 
};

export default App;