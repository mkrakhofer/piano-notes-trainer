import { makeAutoObservable } from "mobx";
import { allNotes, PianoNote } from "../n";

export class NotesStore {
  //private notePool: INote[];
  public currentNotes: PianoNote[];
  public currentNoteIndex: number;

  constructor() {
    makeAutoObservable(this);
    //this.notePool = [];
    this.currentNotes = allNotes;
    this.currentNoteIndex = 0;
    this.generateNotes();
  }

  public generateNotes = () => {
    this.currentNotes = allNotes;
    this.currentNoteIndex = 0;
  };
}
