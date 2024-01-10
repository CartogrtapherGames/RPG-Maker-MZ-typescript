

declare class Scene_Message extends Scene_Base {

    protected _messageWindow: Window_Message;
    protected _scrollTextWindow: Window_ScrollText;
    protected _goldWindow: Window_Gold;
    protected _nameBoxWindow: Window_NameBox;
    protected _choiceListWindow: Window_ChoiceList<any>;
    protected _numberInputWindow: Window_NumberInput;
    protected _eventItemWindow: Window_EventItem;

    constructor();

    public initialize(): void;

    public isMessageWindowClosing(): boolean;

    public createAllWindows(): void;

    public createMessageWindow(): void;

    public messageWindowRect(): Rectangle;

    public createScrollTextWindow(): void;

    public scrollTextWindowRect(): Rectangle;

    public createGoldWindow(): void;

    public goldWindowRect(): Rectangle;

    public createNameBoxWindow(): void;

    public createChoiceListWindow(): void;

    public createNumberInputWindow(): void;

    public createEventItemWindow(): void;

    public eventItemWindowRect(): Rectangle;

    public associateWindows(): void;

    public create(): void;
}
