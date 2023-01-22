import React from "react";
import "./line.css";
import clsx from "clsx";
import { Note } from "../note/note";
import { observer } from "mobx-react-lite";
import { MusicNote } from "../../n";
import { getNotesStore } from "../../stores/notes-store";

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
  notes: MusicNote[];
  // border on the left / right
  b?: boolean;
  // required elper lines for notes
  h?: number;
  // helper line offset required?
  ho?: boolean;
  treble?: boolean;
  bass?: boolean;
}

export const Line = observer((props: IProps) => {
  const className = clsx("line", {
    visible: props.v,
  });

  return (
    <div className={className}>
      {props.b && <div className="border-left" />}
      {props.b && <div className="border-right" />}
      {props.notes.map((note, index) => {
        if (
          (props.treble && getNotesStore().currentPreferredClef === "BASS") ||
          (props.bass && getNotesStore().currentPreferredClef === "TREBLE")
        ) {
          return <div key={index} className="gap" />;
        }

        const isCurrent = index === getNotesStore().currentNoteIndex;
        const isSuccess = index < getNotesStore().currentNoteIndex;
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
          return (
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
              key={index}
            />
          );
        }
        return <div key={index} className="gap" />;
      })}
    </div>
  );
});
