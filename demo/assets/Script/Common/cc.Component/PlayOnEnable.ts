// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass()
export default class PlayOnEnable extends cc.Component {
    @property({tooltip:'播放完畢後自動關閉node，動畫中的子node請勿勾選，以免被關閉後無法播放'})
    autoDisable: boolean = false;

    /** 可控制的組件類型 */
    private animation:cc.Animation = null;
    private particle:cc.ParticleSystem3D = null;

    onLoad(){
        this.animation = this.getComponent(cc.Animation);
        this.particle = this.getComponent(cc.ParticleSystem3D);
    }

    protected onEnable(): void {
        let self = this;
        if(this.animation){
            this.animation.stop();
            this.animation.play();

            if(this.autoDisable){
                this.animation.targetOff(this);
                this.animation.once('finished', ()=>{
                    self.node.active = false;
                }, this);
            }
        } 

        if(this.particle){
            this.particle.clear();
            this.particle.play();
        }
    }
}
