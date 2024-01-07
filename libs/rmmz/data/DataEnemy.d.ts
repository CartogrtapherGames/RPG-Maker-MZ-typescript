interface DataEnemy extends BaseData {
  id: number;
  actions: RPG.Action[];
  battlerHue: number;
  battlerName: string;
  dropItems: RPG.DropItem[];
  exp: number;
  traits: RPG.Trait[];
  gold: number;
  name: string;
  note: string;
  params: number[];
}