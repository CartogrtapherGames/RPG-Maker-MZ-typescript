

declare abstract class Scene_Message extends Scene_Base {

    protected _messageWindow: Window_Message;
    protected _scrollTextWindow: Window_ScrollText;
    protected _goldWindow: Window_Gold;
    protected _nameBoxWindow: Window_NameBox;
    protected _choiceListWindow: Window_ChoiceList;
    protected _numberInputWindow: Window_NumberInput;
    protected _eventItemWindow: Window_EventItem;

    constructor();

    override initialize(): void;

    isMessageWindowClosing(): boolean;

    createAllWindows(): void;

    createMessageWindow(): void;

    messageWindowRect(): Rectangle;

    createScrollTextWindow(): void;

    scrollTextWindowRect(): Rectangle;

    createGoldWindow(): void;

    goldWindowRect(): Rectangle;

    createNameBoxWindow(): void;

    createChoiceListWindow(): void;

    createNumberInputWindow(): void;

    createEventItemWindow(): void;

    eventItemWindowRect(): Rectangle;

    associateWindows(): void;

    create(): void;
}
