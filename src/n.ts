export type Key = "C" | "D" | "E" | "F" | "G" | "A" | "H";
export type Octave =
  | "SUBCONTRA"
  | "CONTRA"
  | "GREAT"
  | "SMALL"
  | "1LINE"
  | "2LINE"
  | "3LINE"
  | "4LINE"
  | "5LINE";

export class MusicNote {
  key: Key;
  octave: Octave;
  modifier?: "sharp" | "flat";

  constructor(key: Key, octave: Octave, modifier?: "sharp" | "flat") {
    this.key = key;
    this.octave = octave;
    this.modifier = modifier;
  }

  private getAlias() {
    if (this.modifier === "sharp") {
      switch (this.key) {
        case "A":
          return new MusicNote("H", this.octave, "flat");
        case "C":
          return new MusicNote("D", this.octave, "flat");
        case "D":
          return new MusicNote("E", this.octave, "flat");
        case "F":
          return new MusicNote("G", this.octave, "flat");
        case "G":
          return new MusicNote("A", this.octave, "flat");
      }
    }
    if (this.modifier === "flat") {
      switch (this.key) {
        case "H":
          return new MusicNote("A", this.octave, "sharp");
        case "A":
          return new MusicNote("G", this.octave, "sharp");
        case "G":
          return new MusicNote("F", this.octave, "sharp");
        case "E":
          return new MusicNote("D", this.octave, "sharp");
        case "D":
          return new MusicNote("C", this.octave, "sharp");
      }
    }
    return this;
  }

  public equals(other: MusicNote | undefined) {
    if (!other) {
      return false;
    }

    return (
      this.key === other.key &&
      this.octave === other.octave &&
      this.modifier === other.modifier
    );
  }

  public equalsAlias(other: MusicNote | undefined) {
    if (!other) {
      return false;
    }
    const alias = this.getAlias();
    return (
      alias.key === other.key &&
      alias.octave === other.octave &&
      alias.modifier === other.modifier
    );
  }
}

export class N {
  static readonly __A: MusicNote = new MusicNote("A", "SUBCONTRA");
  static readonly __AS: MusicNote = new MusicNote("A", "SUBCONTRA", "sharp");
  static readonly __H: MusicNote = new MusicNote("H", "SUBCONTRA");
  static readonly _C: MusicNote = new MusicNote("C", "CONTRA");
  static readonly _CS: MusicNote = new MusicNote("C", "CONTRA", "sharp");
  static readonly _D: MusicNote = new MusicNote("D", "CONTRA");
  static readonly _DS: MusicNote = new MusicNote("D", "CONTRA", "sharp");
  static readonly _E: MusicNote = new MusicNote("E", "CONTRA");
  static readonly _F: MusicNote = new MusicNote("F", "CONTRA");
  static readonly _FS: MusicNote = new MusicNote("F", "CONTRA", "sharp");
  static readonly _G: MusicNote = new MusicNote("G", "CONTRA");
  static readonly _GS: MusicNote = new MusicNote("G", "CONTRA", "sharp");
  static readonly _A: MusicNote = new MusicNote("A", "CONTRA");
  static readonly _AS: MusicNote = new MusicNote("A", "CONTRA", "sharp");
  static readonly _H: MusicNote = new MusicNote("H", "CONTRA");

  static readonly C: MusicNote = new MusicNote("C", "GREAT");
  static readonly CS: MusicNote = new MusicNote("C", "GREAT", "sharp");
  static readonly D: MusicNote = new MusicNote("D", "GREAT");
  static readonly DS: MusicNote = new MusicNote("D", "GREAT", "sharp");
  static readonly E: MusicNote = new MusicNote("E", "GREAT");
  static readonly F: MusicNote = new MusicNote("F", "GREAT");
  static readonly FS: MusicNote = new MusicNote("F", "GREAT", "sharp");
  static readonly G: MusicNote = new MusicNote("G", "GREAT");
  static readonly GS: MusicNote = new MusicNote("G", "GREAT", "sharp");
  static readonly A: MusicNote = new MusicNote("A", "GREAT");
  static readonly AS: MusicNote = new MusicNote("A", "GREAT", "sharp");
  static readonly H: MusicNote = new MusicNote("H", "GREAT");

  static readonly c: MusicNote = new MusicNote("C", "SMALL");
  static readonly cS: MusicNote = new MusicNote("C", "SMALL", "sharp");
  static readonly d: MusicNote = new MusicNote("D", "SMALL");
  static readonly dS: MusicNote = new MusicNote("D", "SMALL", "sharp");
  static readonly e: MusicNote = new MusicNote("E", "SMALL");
  static readonly f: MusicNote = new MusicNote("F", "SMALL");
  static readonly fS: MusicNote = new MusicNote("F", "SMALL", "sharp");
  static readonly g: MusicNote = new MusicNote("G", "SMALL");
  static readonly gS: MusicNote = new MusicNote("G", "SMALL", "sharp");
  static readonly a: MusicNote = new MusicNote("A", "SMALL");
  static readonly aS: MusicNote = new MusicNote("A", "SMALL", "sharp");
  static readonly h: MusicNote = new MusicNote("H", "SMALL");

  static readonly c_: MusicNote = new MusicNote("C", "1LINE");
  static readonly cS_: MusicNote = new MusicNote("C", "1LINE", "sharp");
  static readonly d_: MusicNote = new MusicNote("D", "1LINE");
  static readonly dS_: MusicNote = new MusicNote("D", "1LINE", "sharp");
  static readonly e_: MusicNote = new MusicNote("E", "1LINE");
  static readonly f_: MusicNote = new MusicNote("F", "1LINE");
  static readonly fS_: MusicNote = new MusicNote("F", "1LINE", "sharp");
  static readonly g_: MusicNote = new MusicNote("G", "1LINE");
  static readonly gS_: MusicNote = new MusicNote("G", "1LINE", "sharp");
  static readonly a_: MusicNote = new MusicNote("A", "1LINE");
  static readonly aS_: MusicNote = new MusicNote("A", "1LINE", "sharp");
  static readonly h_: MusicNote = new MusicNote("H", "1LINE");

  static readonly c__: MusicNote = new MusicNote("C", "2LINE");
  static readonly cS__: MusicNote = new MusicNote("C", "2LINE", "sharp");
  static readonly d__: MusicNote = new MusicNote("D", "2LINE");
  static readonly dS__: MusicNote = new MusicNote("D", "2LINE", "sharp");
  static readonly e__: MusicNote = new MusicNote("E", "2LINE");
  static readonly f__: MusicNote = new MusicNote("F", "2LINE");
  static readonly fS__: MusicNote = new MusicNote("F", "2LINE", "sharp");
  static readonly g__: MusicNote = new MusicNote("G", "2LINE");
  static readonly gS__: MusicNote = new MusicNote("G", "2LINE", "sharp");
  static readonly a__: MusicNote = new MusicNote("A", "2LINE");
  static readonly aS__: MusicNote = new MusicNote("A", "2LINE", "sharp");
  static readonly h__: MusicNote = new MusicNote("H", "2LINE");

  static readonly c___: MusicNote = new MusicNote("C", "3LINE");
  static readonly cS___: MusicNote = new MusicNote("C", "3LINE", "sharp");
  static readonly d___: MusicNote = new MusicNote("D", "3LINE");
  static readonly dS___: MusicNote = new MusicNote("D", "3LINE", "sharp");
  static readonly e___: MusicNote = new MusicNote("E", "3LINE");
  static readonly f___: MusicNote = new MusicNote("F", "3LINE");
  static readonly fS___: MusicNote = new MusicNote("F", "3LINE", "sharp");
  static readonly g___: MusicNote = new MusicNote("G", "3LINE");
  static readonly gS___: MusicNote = new MusicNote("G", "3LINE", "sharp");
  static readonly a___: MusicNote = new MusicNote("A", "3LINE");
  static readonly aS___: MusicNote = new MusicNote("A", "3LINE", "sharp");
  static readonly h___: MusicNote = new MusicNote("H", "3LINE");

  static readonly c____: MusicNote = new MusicNote("C", "4LINE");
  static readonly cS____: MusicNote = new MusicNote("C", "4LINE", "sharp");
  static readonly d____: MusicNote = new MusicNote("D", "4LINE");
  static readonly dS____: MusicNote = new MusicNote("D", "4LINE", "sharp");
  static readonly e____: MusicNote = new MusicNote("E", "4LINE");
  static readonly f____: MusicNote = new MusicNote("F", "4LINE");
  static readonly fS____: MusicNote = new MusicNote("F", "4LINE", "sharp");
  static readonly g____: MusicNote = new MusicNote("G", "4LINE");
  static readonly gS____: MusicNote = new MusicNote("G", "4LINE", "sharp");
  static readonly a____: MusicNote = new MusicNote("A", "4LINE");
  static readonly aS____: MusicNote = new MusicNote("A", "4LINE", "sharp");
  static readonly h____: MusicNote = new MusicNote("H", "4LINE");

  static readonly c_____: MusicNote = new MusicNote("C", "5LINE");

  // ALIAS

  // __AS
  static readonly __HF: MusicNote = new MusicNote("H", "SUBCONTRA", "flat");

  // _CS
  static readonly _DF: MusicNote = new MusicNote("D", "CONTRA", "flat");

  // _DS
  static readonly _EF: MusicNote = new MusicNote("E", "CONTRA", "flat");

  // _FS
  static readonly _GF: MusicNote = new MusicNote("G", "CONTRA", "flat");

  // _GS
  static readonly _AF: MusicNote = new MusicNote("A", "CONTRA", "flat");

  // _AS
  static readonly _HF: MusicNote = new MusicNote("H", "CONTRA", "flat");

  // CS
  static readonly DF: MusicNote = new MusicNote("D", "GREAT", "flat");

  // DS
  static readonly EF: MusicNote = new MusicNote("E", "GREAT", "flat");

  // FS
  static readonly GF: MusicNote = new MusicNote("G", "GREAT", "flat");

  // GS
  static readonly AF: MusicNote = new MusicNote("A", "GREAT", "flat");

  // AS
  static readonly HF: MusicNote = new MusicNote("H", "GREAT", "flat");

  // cS
  static readonly dF: MusicNote = new MusicNote("D", "SMALL", "flat");

  // dS
  static readonly eF: MusicNote = new MusicNote("E", "SMALL", "flat");

  // fS
  static readonly gF: MusicNote = new MusicNote("G", "SMALL", "flat");

  // gS
  static readonly aF: MusicNote = new MusicNote("A", "SMALL", "flat");

  // aS
  static readonly hF: MusicNote = new MusicNote("H", "SMALL", "flat");

  // cS_
  static readonly dF_: MusicNote = new MusicNote("D", "1LINE", "flat");

  //dS_
  static readonly eF_: MusicNote = new MusicNote("E", "1LINE", "flat");
  //fS_
  static readonly gF_: MusicNote = new MusicNote("G", "1LINE", "flat");
  //gS_
  static readonly aF_: MusicNote = new MusicNote("A", "1LINE", "flat");
  //aS_
  static readonly hF_: MusicNote = new MusicNote("H", "1LINE", "flat");
  //cS__
  static readonly dF__: MusicNote = new MusicNote("D", "2LINE", "flat");
  //dS__
  static readonly eF__: MusicNote = new MusicNote("E", "2LINE", "flat");
  //fS__
  static readonly gF__: MusicNote = new MusicNote("G", "2LINE", "flat");
  //gS__
  static readonly aF__: MusicNote = new MusicNote("A", "2LINE", "flat");
  //aS__
  static readonly hF__: MusicNote = new MusicNote("H", "2LINE", "flat");
  //cS___
  static readonly dF___: MusicNote = new MusicNote("D", "3LINE", "flat");
  //dS___
  static readonly eF___: MusicNote = new MusicNote("E", "3LINE", "flat");
  //fS___
  static readonly gF___: MusicNote = new MusicNote("G", "3LINE", "flat");
  //gS___
  static readonly aF___: MusicNote = new MusicNote("A", "3LINE", "flat");
  //aS___
  static readonly hF___: MusicNote = new MusicNote("H", "3LINE", "flat");
  //cS____
  static readonly dF____: MusicNote = new MusicNote("C", "4LINE", "flat");
  //dS____
  static readonly eF____: MusicNote = new MusicNote("E", "4LINE", "flat");
  //fS____
  static readonly gF____: MusicNote = new MusicNote("G", "4LINE", "flat");
  //gS____
  static readonly aF____: MusicNote = new MusicNote("A", "4LINE", "flat");
  //aS____
  static readonly hF____: MusicNote = new MusicNote("H", "4LINE", "flat");
}

export const allNotes: MusicNote[] = [
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
