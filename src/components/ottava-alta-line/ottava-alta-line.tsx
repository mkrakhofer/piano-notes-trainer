import React, { ReactNode } from "react";
import "./ottava-alta-line.css";
import { Bar } from "../../classes/bar";
import { Gap } from "../gap/gap";
import { MusicNote } from "../../classes/music-note";
import { OttavaAlta } from "../ottava-alta/ottava-alta";

interface IProps {
  bars: Bar[];
}

export const OttavaAltaLine = (props: IProps) => {
  const renderOttavaAltaIndicator = () => {
    const rendered: ReactNode[] = [];
    const notes: MusicNote[] = [];
    props.bars.forEach((bar, barIndex) => {
      bar.notes.forEach((note, index) => {
        notes.push(note);
      });
    });

    const startIndexArray: number[] = [];
    notes.forEach((n, index) => {
      const isOttavaAlta = n.octave === "4LINE" || n.octave === "5LINE";
      const previousIsNotOttavaAlta =
        index === 0 ||
        (notes[index - 1].octave !== "4LINE" &&
          notes[index - 1].octave !== "5LINE");
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
            notes[nextIndex].octave === "4LINE" ||
            notes[nextIndex].octave === "5LINE"
          ) {
            length++;
          }
          index++;
        }
        console.log("OTTAVA ALTA: ", length);
        rendered.push(<OttavaAlta length={length} />);
      } else {
        rendered.push(<Gap />);
      }
    });

    return rendered;
  };

  return <div className="ottava-alta-line">{renderOttavaAltaIndicator()}</div>;
};
