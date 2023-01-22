import { makeAutoObservable } from "mobx";
import { MusicNote, N, Octave } from "../n";

export class NotesStore {
  //private notePool: INote[];
  public currentNotes: MusicNote[];
  public currentNoteIndex: number;
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
    this.currentNotes = this.getWhiteNotesOfOctave("1LINE");
    this.currentNoteIndex = 0;
    this.generateNotes();
  }

  public generateNotes = () => {
    if (this.preferredClefSetting === "RANDOM") {
      this.currentPreferredClef = Math.random() * 2 > 0 ? "TREBLE" : "BASS";
    } else {
      this.currentPreferredClef = this.preferredClefSetting;
    }

    this.currentNotes = [
      ...this.getRandomNotes(
        this.getWhiteNotesOfOctave(this.getRandomOctave()),
        4
      ),
      ...this.getRandomNotes(
        this.getWhiteNotesOfOctave(this.getRandomOctave()),
        4
      ),
    ];
    this.currentNoteIndex = 0;
  };

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
      note.equals(this.currentNotes[this.currentNoteIndex]) ||
      note.equalsAlias(this.currentNotes[this.currentNoteIndex])
    ) {
      console.log("Success");
      if (this.currentNoteIndex === this.currentNotes.length - 1) {
        this.generateNotes();
      } else {
        this.currentNoteIndex++;
      }
    }
  }
}

let notesStore: NotesStore;

export function getNotesStore() {
  if (!notesStore) notesStore = new NotesStore();
  return notesStore;
}
