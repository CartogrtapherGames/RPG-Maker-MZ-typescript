
declare abstract class Scene_MenuBase extends Scene_Base {

  protected _actor: Game_Actor;
  protected _helpWindow: Window_Help;
  protected _backgroundFilter: PIXI.Filter;
  protected _backgroundSprite: Sprite;
  protected _cancelButton: Sprite_Button;
  protected _pageupButton: Sprite_Button;
  protected _pagedownButton: Sprite_Button;

  constructor();
  override initialize(): void;
  override create(): void;
  override update(): void;
  helpAreaTop(): number;
  helpAreaBottom(): number;
  helpAreaBottom(): number;
  helpAreaHeight(): number;
  mainAreaTop(): number;
  mainAreaBottom(): number;
  mainAreaHeight(): number;
  actor(): Game_Actor;
  updateActor(): void;
  createBackground(): void;
  setBackgroundOpacity(opacity: number): void;
  createHelpWindow(): void;
  helpWindowRect(): Rectangle;
  createButtons(): void;
  needsCancelButton(): boolean;
  createCancelButton(): void;
  needsPageButtons(): boolean;
  createPageButtons(): void;
  updatePageButtons(): void;
  arePageButtonsEnabled(): boolean;
  nextActor(): void;
  previousActor(): void;
  onActorChange(): void;
}