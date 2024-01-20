

declare abstract class Window_StatusBase extends Window_Selectable {

  protected _additionnalSprites: Record<string, Sprite>;

  constructor(rect:Rectangle);
  override initialize(rect: Rectangle): void;
  loadFaceImages(): void;
  refresh(): void;
  hideAdditionalSprites(): void;
  placeActorName(actor: Game_Actor,x: number,y: number): void;
  placeStateIcon(actor: Game_Actor,x: number,y: number): void;
  placeGauge(actor: Game_Actor,type: string,x: number,y: number): void;
  createInnerSprite(key: string,spriteClass: Sprite): void;
  placeTimeGauge(actor: Game_Actor,x: number,y: number): void;
  placeBasicGauges(actor: Game_Actor,x: number,y: number): void;
  gaugeLineHeight(): number;
  drawActorCharacter(actor: Game_Actor,x: number,y: number): void;
  drawActorFace(actor: Game_Actor,x: number,y: number): void;
  drawActorName(actor: Game_Actor,x: number,y : number): void;
  drawActorClass(actor: Game_Actor,x: number,y: number): void;
  drawActorNickname(actor: Game_Actor,x: number,y: number): void;
  drawActorLevel(actor: Game_Actor,x: number,y: number): void;
  drawActorIcons(actor: Game_Actor,x: number,y: number,width: number): void;
  drawActorSimpleStatus(actor: Game_Actor,x: number,y: number): void;
  actorSlotName(actor: Game_Actor,index: number): void;
  
}

