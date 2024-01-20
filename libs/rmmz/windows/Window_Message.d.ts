

declare class Window_Message extends Window_Base {

  protected _background: number;
  protected _positionType: number;
  protected _waitCount: number;
  protected _faceBitmap: Bitmap;
  protected _textState: TextState;
  protected _goldWindow: Window_Gold;
  protected _nameBoxWindow: Window_NameBox;
  protected _choiceListWindow: Window_ChoiceList;
  protected _numberInputWindow: Window_NumberInput;
  protected _eventItemWindow: Window_EventItem;
  protected _showFast: boolean;
  protected _lineShowFast: boolean;
  protected _pauseSkip: boolean;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  initMembers(): void;
  setGoldWindow(goldWindow: Window_Gold): void;
  setNameBoxWindow(nameBoxWindow: Window_NameBox): void;
  setChoiceList(choiceListWindow: Window_ChoiceList): void;
  setNumberInputWindow(numberInputWindow: Window_NumberInput): void;
  setEventItemWindow(eventItemWindow: Window_EventItem): void;
  clearFlags(): boolean;
  override update(): void;
  checkToNotClose(): void;
  synchronizeNameBox(): void;
  canStart(): boolean;
  startMessage(): void;
  newLineX(): number;
  updatePlacement(): void;
  updateBackground(): void;
  terminateMessage(): void;
  updateWait(): void;
  updateInput(): void;
  isAnySubWindowActive(): boolean;
  updateMessage(): void;
  shouldBreakHere(textState: TextState): boolean;
  canBreakHere(textState: TextState): boolean;
  onEndOfText(): void;
  startInput(): boolean;
  isTriggered(): boolean;
  doesContinue(): boolean;
  areSettingsChanged(): boolean;
  updateShowFast(): void;
  newPage(textState: TextState): void;
  updateSpeakingName(): void;
  loadMessageFace(): void;
  drawMessageFace(): void;
  override processControlCharacter(textState: TextState,c: string): void;
  override processNewLine(textState: TextState): void;
  processNewPage(textState: TextState): void;
  isEndOfText(textState: TextState): boolean;
  needsNewPage(textState: TextState): boolean;
  override processEscapeCharacter(code: string,textState: TextState): void;
  startWait(count: number): void;
  startPause(): void;
  isWaiting(): boolean;
}