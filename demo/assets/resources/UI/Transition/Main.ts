/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class Main extends fgui.GComponent {

	public _btn0:fgui.GButton;
	public _btn1:fgui.GButton;
	public _btn2:fgui.GButton;
	public _btn3:fgui.GButton;
	public _btn4:fgui.GButton;
	public _btn5:fgui.GButton;
	public _btn6:fgui.GButton;
	public _g0:fgui.GGroup;
	public static URL:string = "ui://c0hnre6olvxr0";

	public static createInstance():Main {
		return <Main>(fgui.UIPackage.createObject("Transition", "Main"));
	}

	protected onConstruct():void {
		this._btn0 = <fgui.GButton>(this.getChild("btn0"));
		this._btn1 = <fgui.GButton>(this.getChild("btn1"));
		this._btn2 = <fgui.GButton>(this.getChild("btn2"));
		this._btn3 = <fgui.GButton>(this.getChild("btn3"));
		this._btn4 = <fgui.GButton>(this.getChild("btn4"));
		this._btn5 = <fgui.GButton>(this.getChild("btn5"));
		this._btn6 = <fgui.GButton>(this.getChild("btn6"));
		this._g0 = <fgui.GGroup>(this.getChild("g0"));
	}
}