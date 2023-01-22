import React, { ReactNode } from "react";
import "./line.css";
import clsx from "clsx";
import { Note } from "../note/note";
import { observer } from "mobx-react-lite";
import { getNotesStore } from "../../stores/notes-store";
import { MusicNote } from "../../classes/music-note";
import { Bar } from "../../classes/bar";
import { Gap } from "../gap/gap";

interface IProps {
  // note
  n: MusicNote;
  // subcontra
  sc?: MusicNote;
  // fourline
  fl?: MusicNote;
  // sharp
  s?: MusicNote;
  // fourline sharp
  fls?: MusicNote;
  // subcontra sharp
  scs?: MusicNote;
  // flat
  f?: MusicNote;
  // fourline flat
  flf?: MusicNote;
  // subcontra flat
  scf?: MusicNote;
  // note tail direction (up / down)
  d: "u" | "d";
  // visible
  v?: boolean;
  bars: Bar[];
  // border on the left / right
  b?: boolean;
  // required elper lines for notes
  h?: number;
  // helper line offset required?
  ho?: boolean;
  treble?: boolean;
  bass?: boolean;
  // top most visible line
  tm?: boolean;
}

export const Line = observer((props: IProps) => {
  console.log("RENDER LINE: ", props.bars);

  const className = clsx("line", {
    visible: props.v,
  });

  const renderBars = () => {
    const rendered: ReactNode[] = [];

    props.bars.forEach((bar, barIndex) => {
      bar.notes.forEach((note, index) => {
        const startOfBar = props.tm && index === 0;
        const endOfLastBar =
            props.tm &&
            barIndex === props.bars.length - 1 &&
            index === bar.notes.length - 1;

        if (
            (props.treble && getNotesStore().currentPreferredClef === "BASS") ||
            (props.bass && getNotesStore().currentPreferredClef === "TREBLE")
        ) {
          rendered.push(
              <Gap
                  key={`${barIndex}-${index}`}
                  startOfBar={startOfBar}
                  endOfLastBar={endOfLastBar}
              />
          );
          return;
        }
        //console.log("NOTE: ", note);
        const isCurrent =
            barIndex === getNotesStore().currentBarIndex &&
            index === getNotesStore().currentNoteIndex;
        const isSuccess =
            barIndex < getNotesStore().currentBarIndex ||
            (barIndex === getNotesStore().currentBarIndex &&
                index < getNotesStore().currentNoteIndex);
        const isNote = note.equals(props.n);
        const isSharp = note.equals(props.s);
        const isFlat = note.equals(props.f);
        const isSubcontra = note.equals(props.sc);
        const isSubcontraSharp = note.equals(props.scs);
        const isSubcontraFlat = note.equals(props.scf);
        const isFourLine = note.equals(props.fl);
        const isFourLineSharp = note.equals(props.fls);
        const isFourLineFlat = note.equals(props.flf);

        if (
            isNote ||
            isSharp ||
            isFlat ||
            isSubcontra ||
            isSubcontraSharp ||
            isSubcontraFlat ||
            isFourLine ||
            isFourLineSharp ||
            isFourLineFlat
        ) {
          rendered.push(
              <Note
                  helperOffset={props.ho}
                  helperLines={props.h}
                  note={note}
                  taildir={props.d}
                  modifier={
                    isSharp || isSubcontraSharp || isFourLineSharp
                        ? "s"
                        : isFlat || isSubcontraFlat || isFourLineFlat
                            ? "f"
                            : undefined
                  }
                  isCurrent={isCurrent}
                  isSuccess={isSuccess}
                  startOfBar={startOfBar}
                  endOfLastBar={endOfLastBar}
                  key={`${barIndex}-${index}`}
              />
          );
          return;
        }
        rendered.push(
            <Gap
                key={`${barIndex}-${index}`}
                startOfBar={startOfBar}
                endOfLastBar={endOfLastBar}
            />
        );
      });
    });

    return rendered;
  };

  return (
      <div className={className}>
        {props.b && <div className="border-left"/>}
        {props.b && <div className="border-right"/>}
        {renderBars()}
      </div>
  );
});
