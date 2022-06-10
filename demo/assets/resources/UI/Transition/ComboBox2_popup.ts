/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ComboBox2_popup extends fgui.GComponent {

	public _list:fgui.GList;
	public static URL:string = "ui://c0hnre6ow8r724";

	public static createInstance():ComboBox2_popup {
		return <ComboBox2_popup>(fgui.UIPackage.createObject("Transition", "ComboBox2_popup"));
	}

	protected onConstruct():void {
		this._list = <fgui.GList>(this.getChild("list"));
	}
}