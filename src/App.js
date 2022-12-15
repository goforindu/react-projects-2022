import React, {useState} from 'react';
import './App.css';

function App() {
  const[nationality, setNationality]=useState();
  const[name, setName]=useState("");
  const[counter, setCounter]=useState(0);
  const[isVisible, setIsVisible]=useState(false);
  const [names, setNames]=useState([]);
  const showName=()=>{
    setNationality("Indian");
    console.log(name);
  }
  const increment=()=>{
     setCounter(counter+1);
  }
  const decrement=()=>{
    setCounter(counter-1);
  }

  const toggleText=()=>{
    setIsVisible(!isVisible);
  }
  const addUser=(e)=>{
    e.preventDefault();
    setNames([...names,{id:names.length, name}]);
   
  }
  return (
    <div className="App">
      <h1>I am, {nationality}</h1>
      <button onClick={showName}>Click me</button>
      <hr/>
     
      <button onClick={increment}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <hr/>
      {isVisible && <p>Now you can see me</p> }
      <button onClick={toggleText}>ToggleDisplay</button>
      <hr/>
      <form onSubmit={addUser}>
      <input type="text" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}}/>
      <button>AddUser</button>
      </form>
     <hr/>
     {names.map((item)=>{
     return <li key={item.id}>{item.name}</li>
     })}
    </div>
   

   
  );
}

export default App;
