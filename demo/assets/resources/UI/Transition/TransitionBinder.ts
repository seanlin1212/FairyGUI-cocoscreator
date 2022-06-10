/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import WinFree from "./WinFree";
import Main from "./Main";
import GoodHit from "./GoodHit";
import PowerUp from "./PowerUp";
import TRAP from "./TRAP";
import BOSS from "./BOSS";
import BOSS_SKILL from "./BOSS_SKILL";
import ComboBox1_popup from "./ComboBox1_popup";
import Game from "./Game";
import PathDemo from "./PathDemo";
import ComboBox2_popup from "./ComboBox2_popup";

export default class TransitionBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(WinFree.URL, WinFree);
		fgui.UIObjectFactory.setExtension(Main.URL, Main);
		fgui.UIObjectFactory.setExtension(GoodHit.URL, GoodHit);
		fgui.UIObjectFactory.setExtension(PowerUp.URL, PowerUp);
		fgui.UIObjectFactory.setExtension(TRAP.URL, TRAP);
		fgui.UIObjectFactory.setExtension(BOSS.URL, BOSS);
		fgui.UIObjectFactory.setExtension(BOSS_SKILL.URL, BOSS_SKILL);
		fgui.UIObjectFactory.setExtension(ComboBox1_popup.URL, ComboBox1_popup);
		fgui.UIObjectFactory.setExtension(Game.URL, Game);
		fgui.UIObjectFactory.setExtension(PathDemo.URL, PathDemo);
		fgui.UIObjectFactory.setExtension(ComboBox2_popup.URL, ComboBox2_popup);
	}
}