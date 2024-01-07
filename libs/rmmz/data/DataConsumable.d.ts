interface DataConsumable extends DataItemBase {
  animationId: number;
  damage: RPG.Damage;
  effects: RPG.Effect[];
  hitType: number;
  occasion: number;
  repeats: number;
  scope: number;
  speed: number;
  successRate: number;
  tpGain: number;
}