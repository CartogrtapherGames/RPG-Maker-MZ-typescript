

declare abstract class Window_StatusBase extends Window_Selectable {

  protected _additionnalSprites: Record<string, Sprite>;

  constructor(rect:Rectangle);
  override initialize(rect: Rectangle);
  loadFaceImages();
  refresh();
  hideAdditionalSprites();
  placeActorName(actor: Game_Actor,x: number,y: number);
  placeStateIcon(actor: Game_Actor,x: number,y: number);
  placeGauge(actor: Game_Actor,type: string,x: number,y: number);
  createInnerSprite(key: string,spriteClass: Sprite);
  placeTimeGauge(actor: Game_Actor,x: number,y: number);
  placeBasicGauges(actor: Game_Actor,x: number,y: number);
  gaugeLineHeight(): number;
  drawActorCharacter(actor: Game_Actor,x: number,y: number);
  drawActorFace(actor: Game_Actor,x: number,y: number);
  drawActorName(actor: Game_Actor,x: number,y : number);
  drawActorClass(actor: Game_Actor,x: number,y: number);
  drawActorNickname(actor: Game_Actor,x: number,y: number);
  drawActorLevel(actor: Game_Actor,x: number,y: number);
  drawActorIcons(actor: Game_Actor,x: number,y: number,width: number);
  drawActorSimpleStatus(actor: Game_Actor,x: number,y: number);
  actorSlotName(actor: Game_Actor,index: number);
}

