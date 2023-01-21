import { makeAutoObservable } from "mobx";
import { allNotes, MusicNote, Octave } from "../n";

export class NotesStore {
  //private notePool: INote[];
  public currentNotes: MusicNote[];
  public currentNoteIndex: number;
  public subContraAndContraActive: boolean = false;
  public greatActive: boolean = false;
  public smallActive: boolean = false;
  public oneLineActive: boolean = true;
  public twoLineActive: boolean = false;
  public threeLineActive: boolean = false;
  public fourAndFiveLineActive: boolean = false;

  constructor() {
    makeAutoObservable(this);
    //this.notePool = [];
    this.currentNotes = this.getNotesOfOctave("1LINE");
    this.currentNoteIndex = 0;
    this.generateNotes();
  }

  public generateNotes = () => {
    this.currentNotes = [
      ...this.getRandomNotes(this.getNotesOfOctave(this.getRandomOctave()), 4),
      ...this.getRandomNotes(this.getNotesOfOctave(this.getRandomOctave()), 4),
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
      randomNotes.push(notes[randomIndex]);
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

  private getNotesOfOctave(octave: Octave | undefined) {
    if (!octave) {
      return [];
    }
    return allNotes.filter((n) => n.octave === octave);
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
