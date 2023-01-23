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
    const subcontraAndContraCookie = this.cookies.get(
      "subContraAndContraActive"
    );
    const greatCookie = this.cookies.get("greatActive");
    const smallCookie = this.cookies.get("smallActive");
    const oneLineCookie = this.cookies.get("oneLineActive");
    const twoLineCookie = this.cookies.get("twoLineActive");
    const threeLineCookie = this.cookies.get("threeLineActive");
    const fourAndFiveLineCookie = this.cookies.get("fourAndFiveLineActive");
    const amountOfFlatsAndSharpsCookie = this.cookies.get(
      "amountOfFlatsAndSharps"
    );
    const preferredClefCookie = this.cookies.get("preferredClefSetting");

    if (subcontraAndContraCookie !== undefined)
      this.subContraAndContraActive = subcontraAndContraCookie === "true";

    if (greatCookie !== undefined) this.greatActive = greatCookie === "true";

    if (smallCookie !== undefined) this.smallActive = smallCookie === "true";

    if (oneLineCookie !== undefined)
      this.oneLineActive = oneLineCookie === "true";

    if (twoLineCookie !== undefined)
      this.twoLineActive = twoLineCookie === "true";

    if (threeLineCookie !== undefined)
      this.threeLineActive = threeLineCookie === "true";

    if (fourAndFiveLineCookie !== undefined)
      this.fourAndFiveLineActive = fourAndFiveLineCookie === "true";

    if (amountOfFlatsAndSharpsCookie !== undefined)
      this.amountOfFlatsAndSharps = amountOfFlatsAndSharpsCookie;

    if (preferredClefCookie !== undefined)
      this.preferredClefSetting = preferredClefCookie;
  }
}

let settingsStore: SettingsStore;

export function getSettingsStore() {
  if (!settingsStore) settingsStore = new SettingsStore();
  return settingsStore;
}
