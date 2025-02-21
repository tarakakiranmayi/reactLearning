import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App(props) {
  
  const [text,setText] = useState("Enter Your Text Here");
  const [cnt,setCnt] = useState(5);
  const countIncrement = (val) => {
    console.log(typeof val);
    setCnt(cnt+Number(val));
  }
  const countDecrement = (event) => {
    setCnt(cnt-event.target.value);
  }
  
  return (
    <div className="App">
     <h1>Form {props.title}</h1>
     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={cnt}></textarea>
     <div className="col col-mb-6" > 
      <input type="number"  onChange={(e) =>countIncrement(e.target.value) } />
     
     </div>
    
    </div>
  );
}

export default App;
