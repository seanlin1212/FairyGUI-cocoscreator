/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import WinFree from "./WinFree";

export default class Game extends fgui.GComponent {

	public _fsm:fgui.Controller;
	public _winFreeGame:WinFree;
	public static URL:string = "ui://c0hnre6ornuu1t";

	public static createInstance():Game {
		return <Game>(fgui.UIPackage.createObject("Transition", "Game"));
	}

	protected onConstruct():void {
		this._fsm = this.getController("fsm");
		this._winFreeGame = <WinFree>(this.getChild("winFreeGame"));
	}
}