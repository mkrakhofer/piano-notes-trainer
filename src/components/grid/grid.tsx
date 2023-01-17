import React from "react";
import "./grid.css";
import { Line } from "../line/line";
import { Keys } from "../../keys";

export const Grid = () => {
  return (
    <div className="grid">
      <Line tailDir="down" assignedKey={Keys.c_____} />

      <Line
        tailDir="down"
        assignedKey={Keys.h___}
        flat={Keys.hF____}
        fourLine={Keys.h____}
      />
      <Line tailDir="down" assignedKey={Keys.a___} />
      <Line tailDir="down" assignedKey={Keys.g___} />
      <Line tailDir="down" assignedKey={Keys.f___} />
      <Line tailDir="down" assignedKey={Keys.e___} />
      <Line tailDir="down" assignedKey={Keys.d___} />
      <Line tailDir="down" assignedKey={Keys.c___} />
      <Line tailDir="down" assignedKey={Keys.h__} />
      <Line tailDir="down" assignedKey={Keys.a__} />
      <Line tailDir="down" assignedKey={Keys.g__} />

      <Line tailDir="down" assignedKey={Keys.f__} visible />
      <Line tailDir="down" assignedKey={Keys.e__} />
      <Line tailDir="down" assignedKey={Keys.d__} visible />
      <Line tailDir="down" assignedKey={Keys.c__} />
      <Line tailDir="down" assignedKey={Keys.h_} visible />
      <Line tailDir="up" assignedKey={Keys.a_} />
      <Line tailDir="up" assignedKey={Keys.g_} visible />
      <Line tailDir="up" assignedKey={Keys.f_} />
      <Line tailDir="up" assignedKey={Keys.e_} visible />

      <Line tailDir="up" assignedKey={Keys.d_} />
      <Line tailDir="up" assignedKey={Keys.c_} />
      <Line tailDir="up" assignedKey={Keys.h} />
      <Line tailDir="up" assignedKey={Keys.a} />
      <Line tailDir="up" assignedKey={Keys.g} />

      <Line tailDir="down" assignedKey={Keys.g_} />
      <Line tailDir="down" assignedKey={Keys.f_} />
      <Line tailDir="down" assignedKey={Keys.e_} />
      <Line tailDir="down" assignedKey={Keys.d_} />
      <Line tailDir="down" assignedKey={Keys.c_} />
      <Line tailDir="down" assignedKey={Keys.h} />

      <Line tailDir="down" assignedKey={Keys.a} visible />
      <Line tailDir="down" assignedKey={Keys.g} />
      <Line tailDir="down" assignedKey={Keys.f} visible />
      <Line tailDir="down" assignedKey={Keys.e} />
      <Line tailDir="down" assignedKey={Keys.d} visible />
      <Line tailDir="up" assignedKey={Keys.c} />
      <Line tailDir="up" assignedKey={Keys.H} visible />
      <Line tailDir="up" assignedKey={Keys.A} />
      <Line tailDir="up" assignedKey={Keys.G} visible />

      <Line tailDir="up" assignedKey={Keys.F} />
      <Line tailDir="up" assignedKey={Keys.E} />
      <Line tailDir="up" assignedKey={Keys.D} />
      <Line tailDir="up" assignedKey={Keys.C} />

      <Line tailDir="up" assignedKey={Keys.__H} />
      <Line tailDir="up" assignedKey={Keys.__A} />
    </div>
  );
};
