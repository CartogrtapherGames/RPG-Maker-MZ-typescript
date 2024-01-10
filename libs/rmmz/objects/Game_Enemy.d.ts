declare enum ItemKind {
    ITEM = 1,
    WEAPON = 2,
    ARMOR = 3
}

declare class Game_Enemy extends Game_Battler {

    constructor(enemyId: number, x: number, y: number);

    public setup(enemyId: number, x: number, y: number): void;

    public friendsUnit(): Game_Party;
    public opponentsUnit(): Game_Troop;

    public isEnemy(): true;

    public index(): number;

    public isBattleMember(): boolean;

    public enemyId(): number;
    public enemy(): DataEnemy;

    public exp(): number;
    public gold(): number;

    public makeDropItems(): DataItemBase[];
    public dropItemRate(): number;

    public itemObject(kind: ItemKind, dataId: number): DataItemBase;

    public isSpriteVisible(): boolean;

    public screenX(): number;
    public screenY(): number;

    public battlerName(): string;
    public battlerHue(): number;

    public originalName(): string;
    public name(): string;

    public isLetterEmpty(): boolean;
    public setLetter(letter: string): void;
    public setPlural(plural: boolean): void;

    public transform(enemyId: number): void;

    public meetsCondition(action: Game_Action): boolean;
    public meetsTurnCondition(param1: number, param2: number): boolean;
    public meetsHpCondition(param1: number, param2: number): boolean;
    public meetsMpCondition(param1: number, param2: number): boolean;
    public meetsStateCondition(paramId: number): boolean;
    public meetsPartyLevelCondition(paramId: number): boolean;
    public meetsSwitchCondition(paramId: number): boolean;

    public isActionValid(action: Game_Action): boolean;

    public selectAction(actionList: Game_Action[], ratingZero: number): Game_Action | null;
    public selectAllActions(actionList: Game_Action[]): void;
}

