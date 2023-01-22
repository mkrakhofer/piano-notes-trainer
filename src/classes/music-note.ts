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

  public sharpModifierExists() {
    if (this.key === "C" && this.octave === "5LINE") {
      return false;
    }

    return (
      this.key === "C" ||
      this.key === "D" ||
      this.key === "F" ||
      this.key === "G" ||
      this.key === "A"
    );
  }

  public flatModifierExists() {
    if (this.key === "A" && this.octave === "SUBCONTRA") {
      return false;
    }

    return (
      this.key === "H" ||
      this.key === "A" ||
      this.key === "G" ||
      this.key === "E" ||
      this.key === "D"
    );
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
