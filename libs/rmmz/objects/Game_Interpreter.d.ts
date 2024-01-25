declare class Game_Interpreter {
  constructor();

  initialize(depth?: number): void;
  checkOverflow(): void;
  clear(): void;
  setup(list: any[], eventId?: number): void;
  loadImages(): void;
  eventId(): number;
  isOnCurrentMap(): boolean;
  setupReservedCommonEvent(): boolean;
  isRunning(): boolean;
  update(): void;
  updateChild(): boolean;
  updateWait(): boolean;
  updateWaitCount(): boolean;
  updateWaitMode(): boolean;
  setWaitMode(waitMode: string): void;
  wait(duration: number): void;
  fadeSpeed(): number;
  executeCommand(): boolean;
  checkFreeze(): boolean;
  terminate(): void;
  skipBranch(): void;
  currentCommand(): any;
  nextEventCode(): number;
  iterateActorId(param: number, callback: (actor: any) => void): void;
  iterateActorEx(param1: number, param2: number, callback: (actor: any) => void): void;
  iterateActorIndex(param: number, callback: (actor: any) => void): void;
  iterateEnemyIndex(param: number, callback: (enemy: any) => void): void;
  iterateBattler(param1: number, param2: number, callback: (battler: any) => void): void;
  character(param: number): any;
  operateValue(operation: number, operandType: number, operand: number): number;
  changeHp(target: any, value: number, allowDeath: boolean): void;

  // Add more method declarations based on your needs

  // Commands

  // Show Text
  command101(params: any[]): boolean;

  // Show Choices
  command102(params: any[]): boolean;
  setupChoices(params: any[]): void;
  // When [**]
  command402(params: any[]): boolean;

  // When Cancel
  command403(): boolean;
  
  // Input Number
  command103(params: any[]): boolean;


  setupNumInput(params: any[]): void;

  // Select Item
  command104(params: any[]): boolean;
  setupItemChoice(params: any[]): void;

  // Show Scrolling Text
  command105(params: any[]): boolean;

  // Comment
  command108(params: any[]): boolean;

  // Skip
  command109(): boolean;

  // Conditional Branch
  command111(params: any[]): boolean;

  // Else
  command411(): boolean;

  // Loop
  command112(): boolean;

  // Repeat Above
  command413(): boolean;

  // Break Loop
  command113(): boolean;

  // Exit Event Processing
  command115(): boolean;

  // Common Event
  command117(params: any[]): boolean;

  setupChild(list: any[], eventId: number): void;
  
  // Label
  command118(): boolean;

  // Jump to Label
  command119(params: any[]): boolean;

  jumpTo(index: number): void;

  // Control Switches
  command121(params: any[]): boolean;

  // Control Variables
  command122(params: any[]): boolean;


  gameDataOperand(type: number, param1: number, param2: number): number;
  operateVariable(variableId: number, operationType: number, value: number): void;

  // Control Self-switch
  command123(params: any[]): boolean;

  // Control Timer
  command124(params: any[]): boolean;

  // Change Gold
  command125(params: any[]): boolean;

  // Change Items
  command126(params: any[]): boolean;

  // Change Equipment
  command127(params: any[]): boolean;


  // Change Armors
  command128(params: any[]): boolean;


  //Change Party Members
  command129(params: any[]): boolean;

  // Change Battle BGM
  command132(params: any[]): boolean;

  // Change Victory ME
  command133(params: any[]): boolean;

  // Change Save Access
  command134(params: any[]): boolean;

  // Change Menu Access
  command135(params: any[]): boolean;

  // Change Encounter
  command136(params: any[]): boolean;

  // Change Formation Access
  command137(params: any[]): boolean;

  // Change Window Color
  command138(params: any[]): boolean;

  // Change Defeat ME
  command139(params: any[]): boolean;

  // Change Vehicle BGM
  command140(params: any[]): boolean;

  // Transfer Player
  command201(params: any[]): boolean;

  // Transfer Player
  command202(params: any[]): boolean;

  // Set Vehicle Location
  command203(params: any[]): boolean;

  // Scroll Map
  command204(params: any[]): boolean;

  // Set Movement Route
  command205(params: any[]): boolean;

  // Get on/off Vehicle
  command206(): boolean;

  // Change Transparency
  command211(params: any[]): boolean;

  // Show Animation
  command212(params: any[]): boolean;

  // Show Balloon Icon
  command213(params: any[]): boolean;

  // Erase Event
  command214(): boolean;

  // Change Player Followers
  command216(params: any[]): boolean;

  // Gather Followers
  command217(): boolean;

  // Fadeout Screen
  command221(): boolean;

  // Fadein Screen
  command222(): boolean;

  // Tint Screen
  command223(params: any[]): boolean;

  // Flash Screen
  command224(params: any[]): boolean;

  // Shake Screen
  command225(params: any[]): boolean;

  // Wait
  command230(params: any[]): boolean;

  // Show Picture
  command231(params: any[]): boolean;

  // Move Picture
  command232(params: any[]): boolean;

  picturePoint(params: any[]): Point;

  // Rotate Picture
  command233(params: any[]): boolean;

  // Tint Picture
  command234(params: any[]): boolean;

  // Erase Picture
  command235(params: any[]): boolean;

  // Set Weather Effect
  command236(params: any[]): boolean;

  // Play BGM
  command241(params: any[]): boolean;

  // Fadeout BGM
  command242(params: any[]): boolean;

  // Save BGM
  command243(): boolean;

  // Resume BGM
  command244(): boolean;

  // Play BGS
  command245(params: any[]): boolean;

  // Fadeout BGS
  command246(params: any[]): boolean;

  // Play ME
  command249(params: any[]): boolean;

  // Play SE
  command250(params: any[]): boolean;

  // Stop SE
  command251(): boolean;

  // Play Movie
  command261(params: any[]): boolean;

  videoFileExt(): string;

  // Change Map Name Display
  command281(params: any[]): boolean;

  // Change Tileset
  command282(params: any[]): boolean;

  // Change Battle Background
  command283(params: any[]): boolean;

  // Change Parallax
  command284(params: any[]): boolean;

  // Get Location Info
  command285(params: any[]): boolean;

  // Battle Processing
  command301(params: any[]): boolean;

  // If Win
  command601(): boolean;

  // If Escape
  command602(): boolean;

  // If Lose
  command603(): boolean;

  // Shop Processing
  command302(params: any[]): boolean;

  // Name Input Processing
  command303(params: any[]): boolean;

  // Change HP
  command311(params: any[]): boolean;

  // Change MP
  command312(params: any[]): boolean;

  // Change TP
  command326(params: any[]): boolean;

  // Change State
  command313(params: any[]): boolean;

  // Recover All
  command314(params: any[]): boolean;

  // Change EXP
  command315(params: any[]): boolean;

  // Change Level
  command316(params: any[]): boolean;

  // Change Parameter
  command317(params: any[]): boolean;

  // Change Skill
  command318(params: any[]): boolean;

  // Change Equipment
  command319(params: any[]): boolean;

  // Change Name
  command320(params: any[]): boolean;

  // Change Class
  command321(params: any[]): boolean;

  // Change Actor Images
  command322(params: any[]): boolean;

  // Change Vehicle Image
  command323(params: any[]): boolean;

  // Change Nickname
  command324(params: any[]): boolean;

  // Change Profile
  command325(params: any[]): boolean;

  // Change Enemy HP
  command331(params: any[]): boolean;

  // Change Enemy MP
  command332(params: any[]): boolean;

  // Change Enemy TP
  command342(params: any[]): boolean;

  // Change Enemy State
  command333(params: any[]): boolean;

  // Enemy Recover All
  command334(params: any[]): boolean;

  // Enemy Appear
  command335(params: any[]): boolean;

  // Enemy Transform
  command336(params: any[]): boolean;

  // Show Battle Animation
  command337(params: any[]): boolean;

  // Force Action
  command339(params: any[]): boolean;

  // Abort Battle
  command340(): boolean;

  // Open Menu Screen
  command351(): boolean;

  // Open Save Screen
  command352(): boolean;

  // Game Over
  command353(): boolean;

  // Return to Title Screen
  command354(): boolean;

  // Script
  command355(): boolean;

  // Plugin Command MV (deprecated)
  command356(params: any[]): boolean;

  pluginCommand(): void;

  // Plugin Command
  command357(params: any[]): boolean;
  // Add more command declarations based on your needs
}
