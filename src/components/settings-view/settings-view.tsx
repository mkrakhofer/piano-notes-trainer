import React from "react";
import "./settings-view.css";
import { observer } from "mobx-react-lite";
import { getSettingsStore } from "../../stores/settings-store";

interface IProps {
  onClose: () => void;
}

export const SettingsView = observer((props: IProps) => {
  const settingsStore = getSettingsStore();
  return (
    <div className="settings-view">
      <form>
        <h2>Which octaves should be included?</h2>
        <div className="form-row">
          <input
            checked={settingsStore.subContraAndContraActive}
            onChange={(e) =>
              (settingsStore.subContraAndContraActive = e.target.checked)
            }
            type={"checkbox"}
          />
          <label>Subcontra- and Contra octave</label>
        </div>
        <div className="form-row">
          <input
            checked={settingsStore.greatActive}
            onChange={(e) => (settingsStore.greatActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Great octave</label>
        </div>
        <div className="form-row">
          <input
            checked={settingsStore.smallActive}
            onChange={(e) => (settingsStore.smallActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Small octave</label>
        </div>
        <div className="form-row">
          <input
            checked={settingsStore.oneLineActive}
            onChange={(e) => (settingsStore.oneLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>One line octave</label>
        </div>
        <div className="form-row">
          <input
            checked={settingsStore.twoLineActive}
            onChange={(e) => (settingsStore.twoLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Two line octave</label>
        </div>
        <div className="form-row">
          <input
            checked={settingsStore.threeLineActive}
            onChange={(e) => (settingsStore.threeLineActive = e.target.checked)}
            type={"checkbox"}
          />
          <label>Three line octave</label>
        </div>
        <div className="form-row">
          <input
            checked={settingsStore.fourAndFiveLineActive}
            onChange={(e) =>
              (settingsStore.fourAndFiveLineActive = e.target.checked)
            }
            type={"checkbox"}
          />
          <label>Four- and Five line octave</label>
          <h2>Amount of sharps and flats that should appear?</h2>
          <select
            name="flats-sharps-amount"
            value={settingsStore.amountOfFlatsAndSharps}
            onChange={(e) => {
              // todo: any
              settingsStore.amountOfFlatsAndSharps = e.target.value as any;
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
            value={settingsStore.preferredClefSetting}
            onChange={(e) => {
              // todo: any
              settingsStore.preferredClefSetting = e.target.value as any;
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
