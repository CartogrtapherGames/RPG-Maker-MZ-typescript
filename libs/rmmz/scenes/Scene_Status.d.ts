

declare class Scene_Status extends Scene_MenuBase {

  protected _profileWindow: Window_Help;
  protected _statusWindow: Window_Status;
  protected _statusParamWindow: Window_StatusParams;
  protected _statusEquipWindow: Window_StatusEquip;

  constructor();
  override initialize(): void;
  override create(): void;
  override helpAreaHeight(): number;
  createProfileWindow(): void;
  profileWindowRect(): Rectangle;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createStatusParamsWindow(): void;
  statusParamsWindowRect(): Rectangle;
  createStatusEquipWindow(): void;
  statusEquipWindowRect(): Rectangle;
  statusParamsWidth(): number;
  statusParamsHeight(): number;
  profileHeight(): number;
  override start(): void;
  override needsPageButtons(): boolean;
  refreshActor(): void;
  override onActorChange(): void;
}