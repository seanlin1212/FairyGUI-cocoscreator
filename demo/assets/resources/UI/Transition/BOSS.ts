/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class BOSS extends fgui.GComponent {

	public _t0:fgui.Transition;
	public static URL:string = "ui://c0hnre6olvxry";

	public static createInstance():BOSS {
		return <BOSS>(fgui.UIPackage.createObject("Transition", "BOSS"));
	}

	protected onConstruct():void {
		this._t0 = this.getTransition("t0");
	}
}