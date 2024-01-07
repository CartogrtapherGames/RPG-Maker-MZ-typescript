
interface DataActor extends BaseData {
  battlerName: string;
  characterIndex: number;
  characterName: string;
  classId: number;
  equips: number[];
  faceIndex: number;
  faceName: string;
  traits: RPG.Trait[];
  initialLevel: number;
  maxLevel: number;
  nickname: string;
  profile: string;
}