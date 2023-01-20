type Key = "C" | "D" | "E" | "F" | "G" | "A" | "H";
type Octave =
  | "SUBCONTRA"
  | "CONTRA"
  | "GREAT"
  | "SMALL"
  | "1LINE"
  | "2LINE"
  | "3LINE"
  | "4LINE"
  | "5LINE";

export class PianoNote {
  key: Key;
  octave: Octave;
  modifier?: "sharp" | "flat";

  constructor(key: Key, octave: Octave, modifier?: "sharp" | "flat") {
    this.key = key;
    this.octave = octave;
    this.modifier = modifier;
  }

  public equals(other: PianoNote | undefined) {
    if (!other) {
      return false;
    }

    return (
      this.key === other.key &&
      this.octave === other.octave &&
      this.modifier === other.modifier
    );
  }
}

export class N {
  static readonly __A: PianoNote = new PianoNote("A", "SUBCONTRA");
  static readonly __AS: PianoNote = new PianoNote("A", "SUBCONTRA", "sharp");
  static readonly __H: PianoNote = new PianoNote("H", "SUBCONTRA");
  static readonly _C: PianoNote = new PianoNote("C", "CONTRA");
  static readonly _CS: PianoNote = new PianoNote("C", "CONTRA", "sharp");
  static readonly _D: PianoNote = new PianoNote("D", "CONTRA");
  static readonly _DS: PianoNote = new PianoNote("D", "CONTRA", "sharp");
  static readonly _E: PianoNote = new PianoNote("E", "CONTRA");
  static readonly _F: PianoNote = new PianoNote("F", "CONTRA");
  static readonly _FS: PianoNote = new PianoNote("F", "CONTRA", "sharp");
  static readonly _G: PianoNote = new PianoNote("G", "CONTRA");
  static readonly _GS: PianoNote = new PianoNote("G", "CONTRA", "sharp");
  static readonly _A: PianoNote = new PianoNote("A", "CONTRA");
  static readonly _AS: PianoNote = new PianoNote("A", "CONTRA", "sharp");
  static readonly _H: PianoNote = new PianoNote("H", "CONTRA");

  static readonly C: PianoNote = new PianoNote("C", "GREAT");
  static readonly CS: PianoNote = new PianoNote("C", "GREAT", "sharp");
  static readonly D: PianoNote = new PianoNote("D", "GREAT");
  static readonly DS: PianoNote = new PianoNote("D", "GREAT", "sharp");
  static readonly E: PianoNote = new PianoNote("E", "GREAT");
  static readonly F: PianoNote = new PianoNote("F", "GREAT");
  static readonly FS: PianoNote = new PianoNote("F", "GREAT", "sharp");
  static readonly G: PianoNote = new PianoNote("G", "GREAT");
  static readonly GS: PianoNote = new PianoNote("G", "GREAT", "sharp");
  static readonly A: PianoNote = new PianoNote("A", "GREAT");
  static readonly AS: PianoNote = new PianoNote("A", "GREAT", "sharp");
  static readonly H: PianoNote = new PianoNote("H", "GREAT");

  static readonly c: PianoNote = new PianoNote("C", "SMALL");
  static readonly cS: PianoNote = new PianoNote("C", "SMALL", "sharp");
  static readonly d: PianoNote = new PianoNote("D", "SMALL");
  static readonly dS: PianoNote = new PianoNote("D", "SMALL", "sharp");
  static readonly e: PianoNote = new PianoNote("E", "SMALL");
  static readonly f: PianoNote = new PianoNote("F", "SMALL");
  static readonly fS: PianoNote = new PianoNote("F", "SMALL", "sharp");
  static readonly g: PianoNote = new PianoNote("G", "SMALL");
  static readonly gS: PianoNote = new PianoNote("G", "SMALL", "sharp");
  static readonly a: PianoNote = new PianoNote("A", "SMALL");
  static readonly aS: PianoNote = new PianoNote("A", "SMALL", "sharp");
  static readonly h: PianoNote = new PianoNote("H", "SMALL");

  static readonly c_: PianoNote = new PianoNote("C", "1LINE");
  static readonly cS_: PianoNote = new PianoNote("C", "1LINE", "sharp");
  static readonly d_: PianoNote = new PianoNote("D", "1LINE");
  static readonly dS_: PianoNote = new PianoNote("D", "1LINE", "sharp");
  static readonly e_: PianoNote = new PianoNote("E", "1LINE");
  static readonly f_: PianoNote = new PianoNote("F", "1LINE");
  static readonly fS_: PianoNote = new PianoNote("F", "1LINE", "sharp");
  static readonly g_: PianoNote = new PianoNote("G", "1LINE");
  static readonly gS_: PianoNote = new PianoNote("G", "1LINE", "sharp");
  static readonly a_: PianoNote = new PianoNote("A", "1LINE");
  static readonly aS_: PianoNote = new PianoNote("A", "1LINE", "sharp");
  static readonly h_: PianoNote = new PianoNote("H", "1LINE");

  static readonly c__: PianoNote = new PianoNote("C", "2LINE");
  static readonly cS__: PianoNote = new PianoNote("C", "2LINE", "sharp");
  static readonly d__: PianoNote = new PianoNote("D", "2LINE");
  static readonly dS__: PianoNote = new PianoNote("D", "2LINE", "sharp");
  static readonly e__: PianoNote = new PianoNote("E", "2LINE");
  static readonly f__: PianoNote = new PianoNote("F", "2LINE");
  static readonly fS__: PianoNote = new PianoNote("F", "2LINE", "sharp");
  static readonly g__: PianoNote = new PianoNote("G", "2LINE");
  static readonly gS__: PianoNote = new PianoNote("G", "2LINE", "sharp");
  static readonly a__: PianoNote = new PianoNote("A", "2LINE");
  static readonly aS__: PianoNote = new PianoNote("A", "2LINE", "sharp");
  static readonly h__: PianoNote = new PianoNote("H", "2LINE");

  static readonly c___: PianoNote = new PianoNote("C", "3LINE");
  static readonly cS___: PianoNote = new PianoNote("C", "3LINE", "sharp");
  static readonly d___: PianoNote = new PianoNote("D", "3LINE");
  static readonly dS___: PianoNote = new PianoNote("D", "3LINE", "sharp");
  static readonly e___: PianoNote = new PianoNote("E", "3LINE");
  static readonly f___: PianoNote = new PianoNote("F", "3LINE");
  static readonly fS___: PianoNote = new PianoNote("F", "3LINE", "sharp");
  static readonly g___: PianoNote = new PianoNote("G", "3LINE");
  static readonly gS___: PianoNote = new PianoNote("G", "3LINE", "sharp");
  static readonly a___: PianoNote = new PianoNote("A", "3LINE");
  static readonly aS___: PianoNote = new PianoNote("A", "3LINE", "sharp");
  static readonly h___: PianoNote = new PianoNote("H", "3LINE");

  static readonly c____: PianoNote = new PianoNote("C", "4LINE");
  static readonly cS____: PianoNote = new PianoNote("C", "4LINE", "sharp");
  static readonly d____: PianoNote = new PianoNote("D", "4LINE");
  static readonly dS____: PianoNote = new PianoNote("D", "4LINE", "sharp");
  static readonly e____: PianoNote = new PianoNote("E", "4LINE");
  static readonly f____: PianoNote = new PianoNote("F", "4LINE");
  static readonly fS____: PianoNote = new PianoNote("F", "4LINE", "sharp");
  static readonly g____: PianoNote = new PianoNote("G", "4LINE");
  static readonly gS____: PianoNote = new PianoNote("G", "4LINE", "sharp");
  static readonly a____: PianoNote = new PianoNote("A", "4LINE");
  static readonly aS____: PianoNote = new PianoNote("A", "4LINE", "sharp");
  static readonly h____: PianoNote = new PianoNote("H", "4LINE");

  static readonly c_____: PianoNote = new PianoNote("C", "5LINE");

  // ALIAS

  // __AS
  static readonly __HF: PianoNote = new PianoNote("H", "SUBCONTRA", "flat");

  // _CS
  static readonly _DF: PianoNote = new PianoNote("D", "CONTRA", "flat");

  // _DS
  static readonly _EF: PianoNote = new PianoNote("E", "CONTRA", "flat");

  // _FS
  static readonly _GF: PianoNote = new PianoNote("G", "CONTRA", "flat");

  // _GS
  static readonly _AF: PianoNote = new PianoNote("A", "CONTRA", "flat");

  // _AS
  static readonly _HF: PianoNote = new PianoNote("H", "CONTRA", "flat");

  // CS
  static readonly DF: PianoNote = new PianoNote("D", "GREAT", "flat");

  // DS
  static readonly EF: PianoNote = new PianoNote("E", "GREAT", "flat");

  // FS
  static readonly GF: PianoNote = new PianoNote("G", "GREAT", "flat");

  // GS
  static readonly AF: PianoNote = new PianoNote("A", "GREAT", "flat");

  // AS
  static readonly HF: PianoNote = new PianoNote("H", "GREAT", "flat");

  // cS
  static readonly dF: PianoNote = new PianoNote("D", "SMALL", "flat");

  // dS
  static readonly eF: PianoNote = new PianoNote("E", "SMALL", "flat");

  // fS
  static readonly gF: PianoNote = new PianoNote("G", "SMALL", "flat");

  // gS
  static readonly aF: PianoNote = new PianoNote("A", "SMALL", "flat");

  // aS
  static readonly hF: PianoNote = new PianoNote("H", "SMALL", "flat");

  // cS_
  static readonly dF_: PianoNote = new PianoNote("D", "1LINE", "flat");

  //dS_
  static readonly eF_: PianoNote = new PianoNote("E", "1LINE", "flat");
  //fS_
  static readonly gF_: PianoNote = new PianoNote("G", "1LINE", "flat");
  //gS_
  static readonly aF_: PianoNote = new PianoNote("A", "1LINE", "flat");
  //aS_
  static readonly hF_: PianoNote = new PianoNote("H", "1LINE", "flat");
  //cS__
  static readonly dF__: PianoNote = new PianoNote("D", "2LINE", "flat");
  //dS__
  static readonly eF__: PianoNote = new PianoNote("E", "2LINE", "flat");
  //fS__
  static readonly gF__: PianoNote = new PianoNote("G", "2LINE", "flat");
  //gS__
  static readonly aF__: PianoNote = new PianoNote("A", "2LINE", "flat");
  //aS__
  static readonly hF__: PianoNote = new PianoNote("H", "2LINE", "flat");
  //cS___
  static readonly dF___: PianoNote = new PianoNote("D", "3LINE", "flat");
  //dS___
  static readonly eF___: PianoNote = new PianoNote("E", "3LINE", "flat");
  //fS___
  static readonly gF___: PianoNote = new PianoNote("G", "3LINE", "flat");
  //gS___
  static readonly aF___: PianoNote = new PianoNote("A", "3LINE", "flat");
  //aS___
  static readonly hF___: PianoNote = new PianoNote("H", "3LINE", "flat");
  //cS____
  static readonly dF____: PianoNote = new PianoNote("C", "4LINE", "flat");
  //dS____
  static readonly eF____: PianoNote = new PianoNote("E", "4LINE", "flat");
  //fS____
  static readonly gF____: PianoNote = new PianoNote("G", "4LINE", "flat");
  //gS____
  static readonly aF____: PianoNote = new PianoNote("A", "4LINE", "flat");
  //aS____
  static readonly hF____: PianoNote = new PianoNote("H", "4LINE", "flat");
}

export const allNotes: PianoNote[] = [
  N.__A,
  N.__AS,
  N.__HF,
  N.__H,
  N._C,
  N._CS,
  N._DF,
  N._D,
  N._DS,
  N._EF,
  N._E,
  N._F,
  N._FS,
  N._GF,
  N._G,
  N._GS,
  N._AF,
  N._A,
  N._AS,
  N._HF,
  N._H,
  N.C,
  N.CS,
  N.DF,
  N.D,
  N.DS,
  N.EF,
  N.E,
  N.F,
  N.FS,
  N.GF,
  N.G,
  N.GS,
  N.AF,
  N.A,
  N.AS,
  N.HF,
  N.H,
  N.c,
  N.cS,
  N.dF,
  N.d,
  N.dS,
  N.eF,
  N.e,
  N.f,
  N.fS,
  N.gF,
  N.g,
  N.gS,
  N.aF,
  N.a,
  N.aS,
  N.hF,
  N.h,
  N.c_,
  N.cS_,
  N.dF_,
  N.d_,
  N.dS_,
  N.eF_,
  N.e_,
  N.f_,
  N.fS_,
  N.gF_,
  N.g_,
  N.gS_,
  N.aF_,
  N.a_,
  N.aS_,
  N.hF_,
  N.h_,
  N.c__,
  N.cS__,
  N.dF__,
  N.d__,
  N.dS__,
  N.eF__,
  N.e__,
  N.f__,
  N.fS__,
  N.gF__,
  N.g__,
  N.gS__,
  N.aF__,
  N.a__,
  N.aS__,
  N.hF__,
  N.h__,
  N.c___,
  N.cS___,
  N.dF___,
  N.d___,
  N.dS___,
  N.eF___,
  N.e___,
  N.f___,
  N.fS___,
  N.gF___,
  N.g___,
  N.gS___,
  N.aF___,
  N.a___,
  N.aS___,
  N.hF___,
  N.h___,
  N.c____,
  N.cS____,
  N.dF____,
  N.d____,
  N.dS____,
  N.eF____,
  N.e____,
  N.f____,
  N.fS____,
  N.gF____,
  N.g____,
  N.gS____,
  N.aF____,
  N.a____,
  N.aS____,
  N.hF____,
  N.h____,
  N.c_____,
];
