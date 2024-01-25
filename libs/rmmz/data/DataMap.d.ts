interface DataMap {
  autoplayBgm: boolean;
  autoplayBgs: boolean;
  battleback1Name: string;
  battleback2Name: string;
  bgm: RPG.Bgm;
  bgs: RPG.Bgm;
  disableDashing: boolean;
  displayName: string;
  encounterList: RPG.EncounterList[];
  encounterStep: number;
  height: number;
  note: string;
  parallaxLoopX: boolean;
  parallaxLoopY: boolean;
  parallaxName: string;
  parallaxShow: boolean;
  parallaxSx: number;
  parallaxSy: number;
  scrollType: number;
  specifyBattleback: boolean;
  tilesetId: number;
  width: number;
  data: number[];
  events: Array<RPG.Event | null>;
}