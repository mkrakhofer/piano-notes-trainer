import React from "react";
import "./settings-view.css";
import { getNotesStore } from "../../stores/notes-store";
import { observer } from "mobx-react-lite";

interface IProps {
  onClose: () => void;
}

export const SettingsView = observer((props: IProps) => {
  const store = getNotesStore();
  return (
    <div className="settings-view">
      <form>
        <h2>Which octaves should be included?</h2>
        <div className="form-row">
          <input
            checked={store.subContraAndContraActive}
            onChange={(e) =>
              (store.subContraAndContraActive = e.target.checked)
            }
            type={"checkbox"}
          />
          <label>Subcontra- and Contra octave</label>
        </div>
        <div className="form-row">
          <input
            checked={store.greatActive}
            onChange={(e) => (store.greatActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Great octave</label>
        </div>
        <div className="form-row">
          <input
            checked={store.smallActive}
            onChange={(e) => (store.smallActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Small octave</label>
        </div>
        <div className="form-row">
          <input
            checked={store.oneLineActive}
            onChange={(e) => (store.oneLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>One line octave</label>
        </div>
        <div className="form-row">
          <input
            checked={store.twoLineActive}
            onChange={(e) => (store.twoLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Two line octave</label>
        </div>
        <div className="form-row">
          <input
            checked={store.threeLineActive}
            onChange={(e) => (store.threeLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Three line octave</label>
        </div>
        <div className="form-row">
          <input
            checked={store.fourAndFiveLineActive}
            onChange={(e) => (store.fourAndFiveLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Four- and Five line octave</label>
          <h2>Amount of sharps and flats that should appear?</h2>
          <select
            name="flats-sharps-amount"
            value={store.amountOfFlatsAndSharps}
            onChange={(e) => {
              // todo: any
              store.amountOfFlatsAndSharps = e.target.value as any;
            }}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
          <h2>
            Which clef should be used for small- and one line octave notes?
          </h2>
          <select
            name="preferred-clef"
            value={store.preferredClefSetting}
            onChange={(e) => {
              // todo: any
              store.preferredClefSetting = e.target.value as any;
            }}
          >
            <option value="RANDOM">Random</option>
            <option value="TREBLE">Treble</option>
            <option value="BASS">Bass</option>
          </select>
        </div>
        <button onClick={props.onClose}>Close</button>
      </form>
    </div>
  );
});
