import { MusicNote, Octave } from "./music-note";

export class N {
  public static getWhiteKeys() {
    const whiteKeys: MusicNote[] = [];
    const octaves: Octave[] = [
      "CONTRA",
      "GREAT",
      "SMALL",
      "1LINE",
      "2LINE",
      "3LINE",
      "4LINE",
    ];

    //subcontra
    whiteKeys.push(N.__A, N.__H);

    octaves.forEach((octave) => {
      whiteKeys.push(new MusicNote("C", octave));
      whiteKeys.push(new MusicNote("D", octave));
      whiteKeys.push(new MusicNote("E", octave));
      whiteKeys.push(new MusicNote("F", octave));
      whiteKeys.push(new MusicNote("G", octave));
      whiteKeys.push(new MusicNote("A", octave));
      whiteKeys.push(new MusicNote("H", octave));
    });

    //five line
    whiteKeys.push(N.c_____);

    return whiteKeys;
  }

  public static getAllKeys(): MusicNote[] {
    const allKeys: MusicNote[] = [];
    const whiteKeys = this.getWhiteKeys();

    whiteKeys.forEach((key) => {
      allKeys.push(key);
      if (key.sharpModifierExists()) {
        allKeys.push(new MusicNote(key.key, key.octave, "sharp"));
      }
      if (key.flatModifierExists()) {
        allKeys.push(new MusicNote(key.key, key.octave, "flat"));
      }
    });
    return allKeys;
  }

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
  static readonly dF____: MusicNote = new MusicNote("D", "4LINE", "flat");
  //dS____
  static readonly eF____: MusicNote = new MusicNote("E", "4LINE", "flat");
  //fS____
  static readonly gF____: MusicNote = new MusicNote("G", "4LINE", "flat");
  //gS____
  static readonly aF____: MusicNote = new MusicNote("A", "4LINE", "flat");
  //aS____
  static readonly hF____: MusicNote = new MusicNote("H", "4LINE", "flat");
}
