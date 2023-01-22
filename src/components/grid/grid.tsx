import React from "react";
import "./grid.css";
import { Line } from "../line/line";
import { N } from "../../classes/n";
import treble from "../../icons/treble-clef.svg";
import bass from "../../icons/bass-clef.svg";
import { observer } from "mobx-react-lite";
import { Bar } from "../../classes/bar";
import { OttavaAltaLine } from "../ottava-alta-line/ottava-alta-line";

interface IProps {
  bars: Bar[];
}

export const Grid = observer((props: IProps) => {
  return (
    <div className="grid">
      <OttavaAltaLine bars={props.bars} />
      <img src={treble} className="treble" alt="logo" />
      <img src={bass} className="bass" alt="logo" />

      <Line bars={props.bars} d="d" n={N.c_____} h={5} ho />

      <Line
        bars={props.bars}
        d="d"
        n={N.h___}
        f={N.hF___}
        fl={N.h____}
        flf={N.hF____}
        h={5}
      />
      <Line
        bars={props.bars}
        d="d"
        n={N.a___}
        s={N.aS___}
        f={N.aF___}
        fl={N.a____}
        fls={N.aS____}
        flf={N.aF____}
        h={4}
        ho
      />
      <Line
        bars={props.bars}
        d="d"
        n={N.g___}
        s={N.gS___}
        f={N.gF___}
        fl={N.g____}
        fls={N.gS____}
        flf={N.gF____}
        h={4}
      />
      <Line
        bars={props.bars}
        d="d"
        n={N.f___}
        s={N.fS___}
        fl={N.f____}
        fls={N.fS____}
        h={3}
        ho
      />
      <Line
        bars={props.bars}
        d="d"
        n={N.e___}
        f={N.eF___}
        fl={N.e____}
        flf={N.eF____}
        h={3}
      />
      <Line
        bars={props.bars}
        d="d"
        n={N.d___}
        s={N.dS___}
        f={N.dF___}
        fl={N.d____}
        fls={N.dS____}
        flf={N.dF____}
        h={2}
        ho
      />
      <Line
        bars={props.bars}
        d="d"
        n={N.c___}
        s={N.cS___}
        fl={N.c____}
        fls={N.cS____}
        h={2}
      />
      <Line bars={props.bars} d="d" n={N.h__} f={N.hF__} h={1} ho />
      <Line bars={props.bars} d="d" n={N.a__} s={N.aS__} f={N.aF__} h={1} />
      <Line bars={props.bars} d="d" n={N.g__} s={N.gS__} f={N.gF__} />

      <Line bars={props.bars} d="d" n={N.f__} s={N.fS__} v b tm />
      <Line bars={props.bars} d="d" n={N.e__} f={N.eF__} />
      <Line bars={props.bars} d="d" n={N.d__} s={N.dS__} f={N.dF__} v b />
      <Line bars={props.bars} d="d" n={N.c__} s={N.cS__} />
      <Line bars={props.bars} d="d" n={N.h_} f={N.hF_} v b />
      <Line bars={props.bars} d="u" n={N.a_} s={N.aS_} f={N.aF_} />
      <Line bars={props.bars} d="u" n={N.g_} s={N.gS_} f={N.gF_} v b treble />
      <Line bars={props.bars} d="u" n={N.f_} s={N.fS_} treble />
      <Line bars={props.bars} d="u" n={N.e_} f={N.eF_} v treble />

      <Line bars={props.bars} d="u" n={N.d_} s={N.dS_} f={N.dF_} treble />
      <Line bars={props.bars} d="u" n={N.c_} s={N.cS_} h={1} treble />
      <Line bars={props.bars} d="u" n={N.h} f={N.hF} h={1} ho treble />
      <Line bars={props.bars} d="u" n={N.a} s={N.aS} f={N.aF} h={2} treble />
      <Line bars={props.bars} d="u" n={N.g} s={N.gS} f={N.gF} h={2} ho treble />

      <Line bars={props.bars} d="d" n={N.g_} s={N.gS_} f={N.gF_} h={3} bass />
      <Line bars={props.bars} d="d" n={N.f_} s={N.fS_} h={2} ho bass />
      <Line bars={props.bars} d="d" n={N.e_} f={N.eF_} h={2} bass />
      <Line
        bars={props.bars}
        d="d"
        n={N.d_}
        s={N.dS_}
        f={N.dF_}
        h={1}
        ho
        bass
      />
      <Line bars={props.bars} d="d" n={N.c_} s={N.cS_} h={1} bass />
      <Line bars={props.bars} d="d" n={N.h} f={N.hF} bass />

      <Line bars={props.bars} d="d" n={N.a} s={N.aS} f={N.aF} v b bass />
      <Line bars={props.bars} d="d" n={N.g} s={N.gS} f={N.gF} bass />
      <Line bars={props.bars} d="d" n={N.f} s={N.fS} v b />
      <Line bars={props.bars} d="d" n={N.e} f={N.eF} />
      <Line bars={props.bars} d="d" n={N.d} s={N.dS} f={N.dF} v b />
      <Line bars={props.bars} d="u" n={N.c} s={N.cS} />
      <Line
        bars={props.bars}
        d="u"
        n={N.H}
        sc={N._H}
        f={N.HF}
        scf={N._HF}
        v
        b
      />
      <Line
        bars={props.bars}
        d="u"
        n={N.A}
        sc={N._A}
        s={N.AS}
        scs={N._AS}
        f={N.AF}
        scf={N._AF}
      />
      <Line
        bars={props.bars}
        d="u"
        n={N.G}
        sc={N._G}
        s={N.GS}
        scs={N._GS}
        f={N.GF}
        scf={N._GF}
        v
      />

      <Line bars={props.bars} d="u" n={N.F} sc={N._F} s={N.FS} scs={N._FS} />
      <Line
        bars={props.bars}
        d="u"
        n={N.E}
        sc={N._E}
        f={N.EF}
        scf={N._EF}
        h={1}
      />
      <Line
        bars={props.bars}
        d="u"
        n={N.D}
        sc={N._D}
        s={N.DS}
        scs={N._DS}
        f={N.DF}
        scf={N._DF}
        h={1}
        ho
      />
      <Line
        bars={props.bars}
        d="u"
        n={N.C}
        sc={N._C}
        s={N.CS}
        scs={N._CS}
        h={2}
      />

      <Line bars={props.bars} d="u" n={N.__H} f={N.__HF} h={2} ho />
      <Line bars={props.bars} d="u" n={N.__A} s={N.__AS} h={3} />
    </div>
  );
});
