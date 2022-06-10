/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class WinFree extends fgui.GComponent {

	public _fsm:fgui.Controller;
	public _spine:fgui.GLoader3D;
	public _particle:fgui.GTextField;
	public _text:fgui.GTextField;
	public _blockInput:fgui.GButton;
	public _blockInputGroup:fgui.GGroup;
	public _changeState:fgui.GTextField;
	public _appear:fgui.Transition;
	public _disappear:fgui.Transition;
	public _none:fgui.Transition;
	public static URL:string = "ui://c0hnre6ojwwq1k";

	public static createInstance():WinFree {
		return <WinFree>(fgui.UIPackage.createObject("Transition", "WinFree"));
	}

	protected onConstruct():void {
		this._fsm = this.getController("fsm");
		this._spine = <fgui.GLoader3D>(this.getChild("spine"));
		this._particle = <fgui.GTextField>(this.getChild("particle"));
		this._text = <fgui.GTextField>(this.getChild("text"));
		this._blockInput = <fgui.GButton>(this.getChild("blockInput"));
		this._blockInputGroup = <fgui.GGroup>(this.getChild("blockInputGroup"));
		this._changeState = <fgui.GTextField>(this.getChild("changeState"));
		this._appear = this.getTransition("appear");
		this._disappear = this.getTransition("disappear");
		this._none = this.getTransition("none");
	}
}