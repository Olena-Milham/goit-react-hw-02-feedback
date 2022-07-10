
import {FeedbackOptions} from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
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
      return {[option]:prevState[option] +1};
    })
  }
  



render (){
  const { good, neutral, bad } = this.state;
  return (
    <> 
    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleOnLeaveFeedback}/>
    <Statistics 
    good={good}
    neutral={neutral}
    bad={bad}/>
    </>

    // 
    //   <div>
    //     <p> Total Feedback amount </p>
    //     <p> Positive Feedback Percentage </p>
    //   </div>
      

  )
}
 
};

export default App;



// ========== Notes ========
// ======public class property to bind the context X=()=>{}
// handleOnLeaveFeedback =(option)=>{
//   console.log('click');
//   // console.log(this);
//   this.setState(prevState => {
//     // console.log([option]); //key
//     // console.log(prevState[option]); //value

//     //=== good:0+1
//     return {[option]:prevState[option] +1};
//   })
// }