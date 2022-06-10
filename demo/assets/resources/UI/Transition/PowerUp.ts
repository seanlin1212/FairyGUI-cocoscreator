/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class PowerUp extends fgui.GComponent {

	public _value:fgui.GTextField;
	public _add_value:fgui.GTextField;
	public _powEffect:fgui.GMovieClip;
	public _t0:fgui.Transition;
	public static URL:string = "ui://c0hnre6olvxr1d";

	public static createInstance():PowerUp {
		return <PowerUp>(fgui.UIPackage.createObject("Transition", "PowerUp"));
	}

	protected onConstruct():void {
		this._value = <fgui.GTextField>(this.getChild("value"));
		this._add_value = <fgui.GTextField>(this.getChild("add_value"));
		this._powEffect = <fgui.GMovieClip>(this.getChild("powEffect"));
		this._t0 = this.getTransition("t0");
	}
}