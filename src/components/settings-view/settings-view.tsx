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
        </div>
        <button onClick={props.onClose}>Close</button>
      </form>
    </div>
  );
});
