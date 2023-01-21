import { makeAutoObservable } from "mobx";
import { allNotes, MusicNote, Octave } from "../n";

export class NotesStore {
  //private notePool: INote[];
  public currentNotes: MusicNote[];
  public currentNoteIndex: number;

  constructor() {
    makeAutoObservable(this);
    //this.notePool = [];
    this.currentNotes = this.getNotesOfOctave("1LINE");
    this.currentNoteIndex = 0;
    this.generateNotes();
  }

  public generateNotes = () => {
    const notesPool = this.getNotesOfOctave("1LINE");
    this.currentNotes = this.getRandomNotes(notesPool, 4);
    this.currentNoteIndex = 0;
  };

  private getRandomNotes(notes: MusicNote[], count: number) {
    const randomNotes: MusicNote[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * notes.length);
      randomNotes.push(notes[randomIndex]);
    }
    return randomNotes;
  }

  private getNotesOfOctave(octave: Octave) {
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
