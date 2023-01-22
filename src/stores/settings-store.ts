import { makeAutoObservable } from "mobx";

export class SettingsStore {
  //private notePool: INote[];
  public subContraAndContraActive: boolean = false;
  public greatActive: boolean = false;
  public smallActive: boolean = true;
  public oneLineActive: boolean = true;
  public twoLineActive: boolean = false;
  public threeLineActive: boolean = false;
  public fourAndFiveLineActive: boolean = false;
  public amountOfFlatsAndSharps: "LOW" | "MEDIUM" | "HIGH" = "LOW";
  public preferredClefSetting: "TREBLE" | "BASS" | "RANDOM" = "RANDOM";

  constructor() {
    makeAutoObservable(this);
  }
}

let settingsStore: SettingsStore;

export function getSettingsStore() {
  if (!settingsStore) settingsStore = new SettingsStore();
  return settingsStore;
}
