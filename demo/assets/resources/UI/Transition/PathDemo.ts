/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class PathDemo extends fgui.GComponent {

	public _t0:fgui.Transition;
	public _t1:fgui.Transition;
	public static URL:string = "ui://c0hnre6osw6l1h";

	public static createInstance():PathDemo {
		return <PathDemo>(fgui.UIPackage.createObject("Transition", "PathDemo"));
	}

	protected onConstruct():void {
		this._t0 = this.getTransition("t0");
		this._t1 = this.getTransition("t1");
	}
}