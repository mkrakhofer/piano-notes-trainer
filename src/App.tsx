import React, {useEffect, useState} from 'react';
import './App.css';

type MIDIAccess = WebMidi.MIDIAccess;
type MIDIInputMap = WebMidi.MIDIInputMap;
type MIDIMessageEvent = WebMidi.MIDIMessageEvent;

function App() {
    const [access, setAccess] = useState<MIDIAccess>();
    const [inputs, setInputs] = useState<MIDIInputMap>(new Map());

    useEffect(() => {
        reconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        inputs.forEach((input) => {
            console.log(input.name); /* inherited property from MIDIPort */
            input.onmidimessage = (message: MIDIMessageEvent) => {
                console.log(message.data);
            }
        })
    }, [inputs])

    const reconnect = () => {
        disconnect();
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
        inputs.forEach((input) => {
            console.log(input.name); /* inherited property from MIDIPort */
            input.onmidimessage = (message: MIDIMessageEvent) => {
                console.log(message.data);
            }
        })
    }

    const disconnect = () => {
        inputs.forEach((input) => {
            input.close();
        })
    }

    const onMIDISuccess = (midiAccess: MIDIAccess) => {
        console.log("MIDI ready!");
        setAccess(midiAccess);
        setInputs(midiAccess.inputs);
    }

    const onMIDIFailure = () => {
        console.error(`Failed to get MIDI access.`);
    }

    return (
        <div className="App">
            Connections: {inputs.size}
            <button onClick={reconnect}>Check Inputs</button>
        </div>
    );
}

export default App;
