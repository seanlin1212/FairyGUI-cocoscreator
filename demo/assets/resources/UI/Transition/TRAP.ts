/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class TRAP extends fgui.GComponent {

	public _t0:fgui.Transition;
	public static URL:string = "ui://c0hnre6olvxr1g";

	public static createInstance():TRAP {
		return <TRAP>(fgui.UIPackage.createObject("Transition", "TRAP"));
	}

	protected onConstruct():void {
		this._t0 = this.getTransition("t0");
	}
}