/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class GoodHit extends fgui.GComponent {

	public _word:fgui.GLoader;
	public _t0:fgui.GTextField;
	public _t1:fgui.GTextField;
	public _t2:fgui.GTextField;
	public _t0_2:fgui.Transition;
	public static URL:string = "ui://c0hnre6olvxr11";

	public static createInstance():GoodHit {
		return <GoodHit>(fgui.UIPackage.createObject("Transition", "GoodHit"));
	}

	protected onConstruct():void {
		this._word = <fgui.GLoader>(this.getChild("word"));
		this._t0 = <fgui.GTextField>(this.getChild("t0"));
		this._t1 = <fgui.GTextField>(this.getChild("t1"));
		this._t2 = <fgui.GTextField>(this.getChild("t2"));
		this._t0_2 = this.getTransition("t0");
	}
}