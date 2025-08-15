import { useState } from 'react' // hooks 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setcounter] = useState(25) // array return hoga  // agr parameter kavya hota toh => [kavya, setkavya] // usestate ke andr kuch bhi daal slte ho {},[],0,(),kavya,true
  //let counter = 25;

  const addvalue = () => {
    counter= counter+1;
    setcounter(counter);
    console.log("clicked" , counter);
  }

  const removeValue = ()=>{
    setcounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
