import { Keys } from "./keys";

export interface IKey {
  key: "C" | "D" | "E" | "F" | "G" | "A" | "H";
  octave:
    | "SUBCONTRA"
    | "CONTRA"
    | "GREAT"
    | "SMALL"
    | "1LINE"
    | "2LINE"
    | "3LINE"
    | "4LINE"
    | "5LINE";
  modifier?: "sharp" | "flat";
}

/**
 * Maps a 8bit binary key string to corresponding key/octave
 */
export const Keymap: Map<string, IKey> = new Map<string, IKey>([
  ["00010101", Keys.__A],
  ["00010110", Keys.__AS],
  ["00010111", Keys.__H],

  ["00011000", Keys._C],
  ["00011001", Keys._CS],
  ["00011010", Keys._D],
  ["00011011", Keys._DS],
  ["00011100", Keys._E],
  ["00011101", Keys._F],
  ["00011110", Keys._FS],
  ["00011111", Keys._G],
  ["00100000", Keys._GS],
  ["00100001", Keys._A],
  ["00100010", Keys._AS],
  ["00100011", Keys._H],

  ["00100100", Keys.C],
  ["00100101", Keys.CS],
  ["00100110", Keys.D],
  ["00100111", Keys.DS],
  ["00101000", Keys.E],
  ["00101001", Keys.F],
  ["00101010", Keys.FS],
  ["00101011", Keys.G],
  ["00101100", Keys.GS],
  ["00101101", Keys.A],
  ["00101110", Keys.AS],
  ["00101111", Keys.H],

  ["00110000", Keys.c],
  ["00110001", Keys.cS],
  ["00110010", Keys.d],
  ["00110011", Keys.dS],
  ["00110100", Keys.e],
  ["00110101", Keys.f],
  ["00110110", Keys.fS],
  ["00110111", Keys.g],
  ["00111000", Keys.gS],
  ["00111001", Keys.a],
  ["00111010", Keys.aS],
  ["00111011", Keys.h],

  ["00111100", Keys.c_],
  ["00111101", Keys.cS_],
  ["00111110", Keys.d_],
  ["00111111", Keys.dS_],
  ["01000000", Keys.e_],
  ["01000001", Keys.f_],
  ["01000010", Keys.fS_],
  ["01000011", Keys.g_],
  ["01000100", Keys.gS_],
  ["01000101", Keys.a_],
  ["01000110", Keys.aS_],
  ["01000111", Keys.h_],

  ["01001000", Keys.c__],
  ["01001001", Keys.cS__],
  ["01001010", Keys.d__],
  ["01001011", Keys.dS__],
  ["01001100", Keys.e__],
  ["01001101", Keys.f__],
  ["01001110", Keys.fS__],
  ["01001111", Keys.g__],
  ["01010000", Keys.gS__],
  ["01010001", Keys.a__],
  ["01010010", Keys.aS__],
  ["01010011", Keys.h__],

  ["01010100", Keys.c___],
  ["01010101", Keys.cS___],
  ["01010110", Keys.d___],
  ["01010111", Keys.dS___],
  ["01011000", Keys.e___],
  ["01011001", Keys.f___],
  ["01011010", Keys.fS___],
  ["01011011", Keys.g___],
  ["01011100", Keys.gS___],
  ["01011101", Keys.a___],
  ["01011110", Keys.aS___],
  ["01011111", Keys.h___],

  ["01100000", Keys.c____],
  ["01100001", Keys.cS____],
  ["01100010", Keys.d____],
  ["01100011", Keys.dS____],
  ["01100100", Keys.e____],
  ["01100101", Keys.f____],
  ["01100110", Keys.fS____],
  ["01100111", Keys.g____],
  ["01101000", Keys.gS____],
  ["01101001", Keys.a____],
  ["01101010", Keys.aS____],
  ["01101011", Keys.h____],

  ["01101100", Keys.c_____],
]);
