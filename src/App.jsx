
import FeedbackOptions from 'components/FeedbackOptions';
import {Component} from 'react';
class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
render (){
  return (
    <> 
      <h1> Please leave Feedback </h1>
    <FeedbackOptions />
    <div>
      <h2> Statistics </h2>
      <div>
        <p> Good: </p>
        <p> Neutral: </p>
        <p> Bad: </p>
      </div>
      <div>
        <p> Total Feedback amount </p>
        <p> Positive Feedback Percentage </p>
      </div>
      
    </div>
    </>
  )
}
 
};

export default App;

// export const App = () => {
  // return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    
    // </div>

  // );
// };
