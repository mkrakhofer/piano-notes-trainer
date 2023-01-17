import React, { useEffect, useState } from "react";
import "./App.css";
import { IKey, Keymap } from "./keymap";
import { Grid } from "./components/grid/grid";

type MIDIAccess = WebMidi.MIDIAccess;
type MIDIInputMap = WebMidi.MIDIInputMap;
type MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Based on https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message
 * @constructor
 */
function App() {
  const [inputs, setInputs] = useState<MIDIInputMap>(new Map());

  useEffect(() => {
    reconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    inputs.forEach((input) => {
      input.onmidimessage = handleMIDIMessage;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  const toBinString = (bytes: Uint8Array): string =>
    bytes.reduce((str, byte) => str + byte.toString(2).padStart(8, "0"), "");

  const handleMIDIMessage = (message: MIDIMessageEvent) => {
    //console.log(message); /* inherited property from MIDIPort */
    const data = message.data;
    const binString = toBinString(data);
    //console.log(binString);
    if (binString.startsWith("1001")) {
      handleNoteOn(binString);
    }
  };

  const handleNoteOn = (noteOnBinString: string) => {
    /*
            e.g.: 10010000 00111100 01001101
            10010000 -> "Note on"
            00111100 -> Key
            01001101 -> Velocity
         */
    const key = noteOnBinString.substring(8, 16);
    console.log("KEY: ", getKeyByBinString(key));
  };

  const reconnect = () => {
    disconnect();
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  };

  const disconnect = () => {
    inputs.forEach((input) => {
      input.close();
    });
  };

  const getKeyByBinString = (binString: string): IKey => {
    return Keymap.get(binString)!;
  };

  const onMIDISuccess = (midiAccess: MIDIAccess) => {
    console.log("MIDI ready!");
    setInputs(midiAccess.inputs);
  };

  const onMIDIFailure = () => {
    console.error(`Failed to get MIDI access.`);
  };

  return (
    <div className="App">
      Connections: {inputs.size}
      <button onClick={reconnect}>Reset Connection</button>
      <Grid />
    </div>
  );
}

export default App;
