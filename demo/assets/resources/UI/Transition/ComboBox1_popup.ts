/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ComboBox1_popup extends fgui.GComponent {

	public _list:fgui.GList;
	public static URL:string = "ui://c0hnre6oohx61w";

	public static createInstance():ComboBox1_popup {
		return <ComboBox1_popup>(fgui.UIPackage.createObject("Transition", "ComboBox1_popup"));
	}

	protected onConstruct():void {
		this._list = <fgui.GList>(this.getChild("list"));
	}
}