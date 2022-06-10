/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class BOSS_SKILL extends fgui.GComponent {

	public _icon:fgui.GLoader;
	public _t0:fgui.Transition;
	public static URL:string = "ui://c0hnre6olvxrz";

	public static createInstance():BOSS_SKILL {
		return <BOSS_SKILL>(fgui.UIPackage.createObject("Transition", "BOSS_SKILL"));
	}

	protected onConstruct():void {
		this._icon = <fgui.GLoader>(this.getChild("icon"));
		this._t0 = this.getTransition("t0");
	}
}