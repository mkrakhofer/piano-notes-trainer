import React from "react";
import "./grid.css";
import { Line } from "../line/line";
import { N } from "../../n";
import { INote } from "../../notemap";
import treble from "../../icons/treble-clef.svg";
import bass from "../../icons/bass-clef.svg";

interface IProps {
  notes: INote[];
}

export const Grid = (props: IProps) => {
  return (
    <div className="grid">
      <img src={treble} className="treble" alt="logo" />
      <img src={bass} className="bass" alt="logo" />
      <Line notes={props.notes} d="d" n={N.c_____} />

      <Line
        notes={props.notes}
        d="d"
        n={N.h___}
        f={N.hF___}
        fl={N.h____}
        flf={N.hF____}
      />
      <Line
        notes={props.notes}
        d="d"
        n={N.a___}
        s={N.aS___}
        f={N.aF___}
        fl={N.a____}
        fls={N.aS____}
        flf={N.aF____}
      />
      <Line
        notes={props.notes}
        d="d"
        n={N.g___}
        s={N.gS___}
        f={N.gF___}
        fl={N.g____}
        fls={N.gS____}
        flf={N.gF____}
      />
      <Line
        notes={props.notes}
        d="d"
        n={N.f___}
        s={N.fS___}
        fl={N.f____}
        fls={N.fS____}
      />
      <Line
        notes={props.notes}
        d="d"
        n={N.e___}
        f={N.eF___}
        fl={N.e____}
        flf={N.eF____}
      />
      <Line
        notes={props.notes}
        d="d"
        n={N.d___}
        s={N.dS___}
        f={N.dF___}
        fl={N.d____}
        fls={N.dS____}
        flf={N.dF____}
      />
      <Line
        notes={props.notes}
        d="d"
        n={N.c___}
        s={N.cS___}
        fl={N.c____}
        fls={N.cS____}
      />
      <Line notes={props.notes} d="d" n={N.h__} f={N.hF__} />
      <Line notes={props.notes} d="d" n={N.a__} s={N.aS__} f={N.aF__} />
      <Line notes={props.notes} d="d" n={N.g__} s={N.gS__} f={N.gF__} />

      <Line notes={props.notes} d="d" n={N.f__} s={N.fS__} v b />
      <Line notes={props.notes} d="d" n={N.e__} f={N.eF__} />
      <Line notes={props.notes} d="d" n={N.d__} s={N.dS__} f={N.dF__} v b />
      <Line notes={props.notes} d="d" n={N.c__} s={N.cS__} />
      <Line notes={props.notes} d="d" n={N.h_} f={N.hF_} v b />
      <Line notes={props.notes} d="u" n={N.a_} s={N.aS_} f={N.aF_} />
      <Line notes={props.notes} d="u" n={N.g_} s={N.gS_} f={N.gF_} v b />
      <Line notes={props.notes} d="u" n={N.f_} s={N.fS_} />
      <Line notes={props.notes} d="u" n={N.e_} f={N.eF_} v />

      <Line notes={props.notes} d="u" n={N.d_} s={N.dS_} f={N.dF_} />
      <Line notes={props.notes} d="u" n={N.c_} s={N.cS_} />
      <Line notes={props.notes} d="u" n={N.h} f={N.hF} />
      <Line notes={props.notes} d="u" n={N.a} s={N.aS} f={N.aF} />
      <Line notes={props.notes} d="u" n={N.g} s={N.gS} f={N.gF} />

      <Line notes={props.notes} d="d" n={N.g_} s={N.gS_} f={N.gF_} />
      <Line notes={props.notes} d="d" n={N.f_} s={N.fS_} />
      <Line notes={props.notes} d="d" n={N.e_} f={N.eF_} />
      <Line notes={props.notes} d="d" n={N.d_} s={N.dS_} f={N.dF_} />
      <Line notes={props.notes} d="d" n={N.c_} s={N.cS_} />
      <Line notes={props.notes} d="d" n={N.h} f={N.hF} />

      <Line notes={props.notes} d="d" n={N.a} s={N.aS} f={N.aF} v b />
      <Line notes={props.notes} d="d" n={N.g} s={N.gS} f={N.gF} />
      <Line notes={props.notes} d="d" n={N.f} s={N.fS} v b />
      <Line notes={props.notes} d="d" n={N.e} f={N.eF} />
      <Line notes={props.notes} d="d" n={N.d} s={N.dS} f={N.dF} v b />
      <Line notes={props.notes} d="u" n={N.c} s={N.cS} />
      <Line
        notes={props.notes}
        d="u"
        n={N.H}
        sc={N._H}
        f={N.HF}
        scf={N._HF}
        v
        b
      />
      <Line
        notes={props.notes}
        d="u"
        n={N.A}
        sc={N._A}
        s={N.AS}
        scs={N._AS}
        f={N.AF}
        scf={N._AF}
      />
      <Line
        notes={props.notes}
        d="u"
        n={N.G}
        sc={N._G}
        s={N.GS}
        scs={N._GS}
        f={N.GF}
        scf={N._GF}
        v
      />

      <Line notes={props.notes} d="u" n={N.F} sc={N._F} s={N.FS} scs={N._FS} />
      <Line notes={props.notes} d="u" n={N.E} sc={N._E} f={N.EF} scf={N._EF} />
      <Line
        notes={props.notes}
        d="u"
        n={N.D}
        sc={N._D}
        s={N.DS}
        scs={N._DS}
        f={N.DF}
        scf={N._DF}
      />
      <Line notes={props.notes} d="u" n={N.C} sc={N._C} s={N.CS} scs={N._CS} />

      <Line notes={props.notes} d="u" n={N.__H} f={N.__HF} />
      <Line notes={props.notes} d="u" n={N.__A} s={N.__AS} />
    </div>
  );
};
