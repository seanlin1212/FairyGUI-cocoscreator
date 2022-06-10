
export class UIPackageInfo{
    path: string;
    bindAll: ()=>void;

    constructor(path:string, bindAll:()=>void=null) {
        this.path = path;
        this.bindAll = bindAll;        
    }
}

export class UIPackage {
    static addPackage(path: string, bindAll?: ()=>void): fgui.UIPackage{
        let pkg = fgui.UIPackage.addPackage(path);

        if(pkg && bindAll){
            bindAll();
        }

        return pkg;
    }

    static loadPackage(path: string, bindAll?: ()=>void){
        return new Promise((resolve)=>{
            fgui.UIPackage.loadPackage(path, (error: any, pkg: UIPackage) =>{
                if(pkg && bindAll){
                    bindAll();
                }
                resolve({error, pkg});
            });
            
        });
    }

    static loadPackages(infos: UIPackageInfo[]){
        let promises = [];
        for(let info of infos){
            promises.push(UIPackage.loadPackage(info.path, info.bindAll));
        }

        return Promise.all(promises);
    }

    static createObject(pkgName: string, resName: string, userClass?: new () => fgui.GObject): fgui.GObject{
        let obj = fgui.UIPackage.createObject(pkgName, resName, userClass);

        if(obj){
            UIPackage.initComponent(obj.asCom);
        }
        
        return obj;
    }

    /**
     * 初始化元件
     * @param comp 
     */
    static initComponent(comp:fgui.GComponent){
            
        // 若有控制器，則監聽Transition的changeState事件
        if(comp.controllers.length){
            for(let transition of comp._transitions){
                transition.setHook("changeState", (item:fgui.Item) => {
                    let arg = JSON.parse(item.value.text);
                    if(arg){
                        let controller = comp.getController(arg.controller);
                        if(controller){
                            controller.selectedPage = arg.state;
                        }
                    }
                });
            }
        }

        // GLoader3D檢查customData
        for(let child of comp._children){
            if(child instanceof fgui.GTextField){
                let customData = child.asCom.data;
                if(customData){
                    let object = JSON.parse(customData);
                    if(object.prefab){
                        console.log(`[UIPackage] load prefab: ${object.prefab} to ${comp.name}.${child.name}`);
                        // load Prefab
                        cc.resources.load(object.prefab, function (err, prefab:cc.Prefab) {
                            let node = cc.instantiate(prefab);
                            child.node.addChild(node);
                            // 清空文字
                            child.text = '';
                        });
                    }
                }
            }
        }

        // initComponent all children
        for(let child of comp._children){
            if(child instanceof fgui.GComponent){
                UIPackage.initComponent(child.asCom);
            }
        }
    }
}
