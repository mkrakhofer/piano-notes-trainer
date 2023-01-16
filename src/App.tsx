import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [access, setAccess] = useState();
  const [inputs, setInputs] = useState<Map<string, any>>(new Map());


  useEffect(() => {
    let midi = null;  // global MIDIAccess object
    function onMIDISuccess(midiAccess: any) {
      console.log("MIDI ready!");
      setAccess(midiAccess);
      setInputs(midiAccess.inputs);
      midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
    }

    function onMIDIFailure(msg: any) {
      console.error(`Failed to get MIDI access - ${msg}`);
    }

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  }, [])

  const onClick = () => {
    console.log(access);
    inputs.forEach((input) => {
      console.log(input.name); /* inherited property from MIDIPort */
      input.onmidimessage = (message: any) => {
        console.log(message.data);
      }
    })
  }

  return (
    <div className="App">
      <button onClick={onClick}>Check Inputs</button>
    </div>
  );
}

export default App;
