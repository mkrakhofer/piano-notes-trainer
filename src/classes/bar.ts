import { MusicNote } from "./music-note";

export class Bar {
  public index: number | undefined;
  public notes: MusicNote[] = [];

  constructor(notes: MusicNote[], index?: number) {
    this.notes = notes;
    this.index = index;
  }
}
