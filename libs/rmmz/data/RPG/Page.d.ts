namespace RPG {
  export interface Page {
    conditions: ActorConditions;
    directionFix: boolean;
    image: Image;
    list: PageList[];
    moveFrequency: number;
    moveRoute: MoveRoute;
    moveSpeed: number;
    moveType: number;
    priorityType: number;
    stepAnime: boolean;
    through: boolean;
    trigger: number;
    walkAnime: boolean;
  }
}