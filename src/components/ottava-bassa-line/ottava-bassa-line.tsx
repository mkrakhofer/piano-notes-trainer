import React, { ReactNode } from "react";
import "./ottava-bassa-line.css";
import { Bar } from "../../classes/bar";
import { Gap } from "../gap/gap";
import { MusicNote } from "../../classes/music-note";
import { OttavaBassa } from "../ottava-bassa/ottava-bassa";

interface IProps {
  bars: Bar[];
}

export const OttavaBassaLine = (props: IProps) => {
  const renderOttavaBassaIndicator = () => {
    const rendered: ReactNode[] = [];
    const notes: MusicNote[] = [];
    props.bars.forEach((bar, barIndex) => {
      bar.notes.forEach((note, index) => {
        notes.push(note);
      });
    });

    const startIndexArray: number[] = [];
    notes.forEach((n, index) => {
      const isOttavaAlta = n.octave === "SUBCONTRA" || n.octave === "CONTRA";
      const previousIsNotOttavaAlta =
        index === 0 ||
        (notes[index - 1].octave !== "SUBCONTRA" &&
          notes[index - 1].octave !== "CONTRA");
      if (isOttavaAlta && previousIsNotOttavaAlta) {
        startIndexArray.push(index);
      }
    });

    notes.forEach((note, index) => {
      if (startIndexArray.includes(index)) {
        let length = 1;
        while (index + 1 < notes.length) {
          const nextIndex = index + 1;
          if (
            notes[nextIndex].octave === "SUBCONTRA" ||
            notes[nextIndex].octave === "CONTRA"
          ) {
            length++;
          }
          index++;
        }
        console.log("OTTAVA BASSA: ", length);
        rendered.push(<OttavaBassa length={length} />);
      } else {
        rendered.push(<Gap />);
      }
    });

    return rendered;
  };

  return (
    <div className="ottava-bassa-line">{renderOttavaBassaIndicator()}</div>
  );
};
