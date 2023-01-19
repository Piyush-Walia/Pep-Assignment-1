import './App.css';
import {useState} from 'react';
import Welcome from './Welcome';

function App() {
    const [name , setName] = useState("")
    const [submit , setSubmit] = useState(false)

    return (
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div className='login-page'>
        <div>
            <label>Enter Your Name -</label>
            &nbsp;&nbsp;
            <input
            placeholder ="Your name"
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{setSubmit(!submit)}}>Submit</button>
            </div> 
            
            {(submit && name) && <Welcome name={name}></Welcome>}

            <div>
              <p>Assignment done by Piyush Walia 12018859</p>
            </div>
        </div>
      </div>

        
    );

}

export default App;
