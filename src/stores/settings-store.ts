import { makeAutoObservable } from "mobx";
import Cookies from "universal-cookie";

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
  private cookies: Cookies = new Cookies();

  constructor() {
    makeAutoObservable(this);
    this.loadSettings();
  }

  public saveSettings() {
    this.cookies.set("subContraAndContraActive", this.subContraAndContraActive);
    this.cookies.set("greatActive", this.greatActive);
    this.cookies.set("smallActive", this.smallActive);
    this.cookies.set("oneLineActive", this.oneLineActive);
    this.cookies.set("twoLineActive", this.twoLineActive);
    this.cookies.set("threeLineActive", this.threeLineActive);
    this.cookies.set("fourAndFiveLineActive", this.fourAndFiveLineActive);
    this.cookies.set("amountOfFlatsAndSharps", this.amountOfFlatsAndSharps);
    this.cookies.set("preferredClefSetting", this.preferredClefSetting);
  }

  public loadSettings() {
    this.subContraAndContraActive =
      this.cookies.get("subContraAndContraActive") === "true";
    this.greatActive = this.cookies.get("greatActive") === "true";
    this.smallActive = this.cookies.get("smallActive") === "true";
    this.oneLineActive = this.cookies.get("oneLineActive") === "true";
    this.twoLineActive = this.cookies.get("twoLineActive") === "true";
    this.threeLineActive = this.cookies.get("threeLineActive") === "true";
    this.fourAndFiveLineActive =
      this.cookies.get("fourAndFiveLineActive") === "true";
    this.amountOfFlatsAndSharps = this.cookies.get("amountOfFlatsAndSharps");
    this.preferredClefSetting = this.cookies.get("preferredClefSetting");
  }
}

let settingsStore: SettingsStore;

export function getSettingsStore() {
  if (!settingsStore) settingsStore = new SettingsStore();
  return settingsStore;
}
