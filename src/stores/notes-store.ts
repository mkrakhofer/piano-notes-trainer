import { makeAutoObservable } from "mobx";
import { MusicNote, Octave } from "../classes/music-note";
import { N } from "../classes/n";
import { Bar } from "../classes/bar";

export class NotesStore {
  //private notePool: INote[];
  public currentBars: Bar[];
  public currentNoteIndex: number;
  public currentBarIndex: number;
  public subContraAndContraActive: boolean = false;
  public greatActive: boolean = false;
  public smallActive: boolean = true;
  public oneLineActive: boolean = true;
  public twoLineActive: boolean = false;
  public threeLineActive: boolean = false;
  public fourAndFiveLineActive: boolean = false;
  public amountOfFlatsAndSharps: "LOW" | "MEDIUM" | "HIGH" = "LOW";
  public preferredClefSetting: "TREBLE" | "BASS" | "RANDOM" = "RANDOM";

  public currentPreferredClef: "TREBLE" | "BASS" = "TREBLE";

  constructor() {
    makeAutoObservable(this);
    //this.notePool = [];
    this.currentBars = [];
    this.currentNoteIndex = 0;
    this.currentBarIndex = 0;
    this.generateBars(2);
  }

  public generateBars = (count: number) => {
    if (this.preferredClefSetting === "RANDOM") {
      this.currentPreferredClef = Math.random() * 2 > 0 ? "TREBLE" : "BASS";
    } else {
      this.currentPreferredClef = this.preferredClefSetting;
    }

    const bars: Bar[] = [];

    for (let i = 0; i < count; i++) {
      const octave = this.getRandomOctave();
      if (octave) {
        bars.push(this.getRandomBar(octave));
      }
    }

    this.currentBars = bars;
    this.currentBarIndex = 0;
    this.currentNoteIndex = 0;
  };

  private getRandomBar(octave: Octave) {
    return new Bar(this.getRandomNotes(this.getWhiteNotesOfOctave(octave), 4));
  }

  private getRandomNotes(notes: MusicNote[], count: number) {
    if (notes.length === 0) {
      return [];
    }

    const randomNotes: MusicNote[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * notes.length);
      const randomNote = notes[randomIndex];

      let amountOfFlatsAndSharpsThreshold = 8;
      switch (this.amountOfFlatsAndSharps) {
        case "LOW":
          amountOfFlatsAndSharpsThreshold = 8;
          break;
        case "MEDIUM":
          amountOfFlatsAndSharpsThreshold = 6;
          break;
        case "HIGH":
          amountOfFlatsAndSharpsThreshold = 4;
          break;
      }
      const withModifier =
        Math.floor(Math.random() * 10) > amountOfFlatsAndSharpsThreshold;
      if (withModifier) {
        if (
          randomNote.sharpModifierExists() &&
          randomNote.flatModifierExists()
        ) {
          const sharp = Math.floor(Math.random() * 2) > 0;
          if (sharp) {
            randomNotes.push(
              new MusicNote(randomNote.key, randomNote.octave, "sharp")
            );
          } else {
            randomNotes.push(
              new MusicNote(randomNote.key, randomNote.octave, "flat")
            );
          }
        } else if (randomNote.sharpModifierExists()) {
          randomNotes.push(
            new MusicNote(randomNote.key, randomNote.octave, "sharp")
          );
        } else if (randomNote.flatModifierExists()) {
          randomNotes.push(
            new MusicNote(randomNote.key, randomNote.octave, "flat")
          );
        }
      } else {
        randomNotes.push(notes[randomIndex]);
      }
    }
    return randomNotes;
  }

  private getRandomOctave(): Octave | undefined {
    const octavePool: Octave[] = [];
    this.subContraAndContraActive &&
      octavePool.push("SUBCONTRA") &&
      octavePool.push("CONTRA");
    this.greatActive && octavePool.push("GREAT");
    this.smallActive && octavePool.push("SMALL");
    this.oneLineActive && octavePool.push("1LINE");
    this.twoLineActive && octavePool.push("2LINE");
    this.threeLineActive && octavePool.push("3LINE");
    this.fourAndFiveLineActive &&
      octavePool.push("4LINE") &&
      octavePool.push("5LINE");

    if (octavePool.length === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * octavePool.length);
    return octavePool[randomIndex];
  }

  private getWhiteNotesOfOctave(octave: Octave | undefined) {
    if (!octave) {
      return [];
    }
    return N.getWhiteKeys().filter((n) => n.octave === octave);
  }

  public checkOnNote(note: MusicNote) {
    console.log("Check");
    if (
      note.equals(
        this.currentBars[this.currentBarIndex].notes[this.currentNoteIndex]
      ) ||
      note.equalsAlias(
        this.currentBars[this.currentBarIndex].notes[this.currentNoteIndex]
      )
    ) {
      console.log("Success");
      if (
        this.currentBarIndex === this.currentBars.length - 1 &&
        this.currentNoteIndex ===
          this.currentBars[this.currentBarIndex].notes.length - 1
      ) {
        this.generateBars(2);
      } else {
        if (
          this.currentNoteIndex ===
          this.currentBars[this.currentBarIndex].notes.length - 1
        ) {
          this.currentBarIndex++;
          this.currentNoteIndex = 0;
        } else {
          this.currentNoteIndex++;
        }
      }
    }
  }
}

let notesStore: NotesStore;

export function getNotesStore() {
  if (!notesStore) notesStore = new NotesStore();
  return notesStore;
}
