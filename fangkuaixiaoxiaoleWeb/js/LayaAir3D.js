// 程序入口
var LayaAir3D = /** @class */ (function () {
    function LayaAir3D() {
        var _this = this;
        //微信小程序初始化
        Laya.MiniAdpter.init();
        //初始化引擎
        Laya.init(720, 1280, true);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        //开启统计信息
        // Laya.Stat.show();
        // //添加3D场景
        // var scene: Laya.Scene = Laya.stage.addChild(new Laya.Scene()) as Laya.Scene;
        // //添加照相机
        // var camera: Laya.Camera = (scene.addChild(new Laya.Camera(0, 0.1, 100))) as Laya.Camera;
        // camera.transform.translate(new Laya.Vector3(0, 3, 3));
        // camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        // camera.clearColor = null;
        // //添加方向光
        // var directionLight: Laya.DirectionLight = scene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        // directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        // directionLight.direction = new Laya.Vector3(1, -1, 0);
        // //添加自定义模型
        // var box: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1, 1, 1))) as Laya.MeshSprite3D;
        // box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        // var material: Laya.StandardMaterial = new Laya.StandardMaterial();
        // material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
        // box.meshRender.material = material;
        // var testdiv = Laya.Browser.createElement("div");
        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, function () {
            var mainUI = new view.MainUI();
            mainUI.Joinbtn.clickHandler = Laya.Handler.create(_this, _this.createUnity);
            Laya.stage.addChild(mainUI);
        }), null, Laya.Loader.ATLAS);
    }
    LayaAir3D.prototype.createUnity = function () {
        var UnityDiv = document.createElement("div");
        UnityDiv.setAttribute("id", "UnityCanvas");
        UnityDiv.setAttribute('scrolling', 'no');
        UnityDiv.setAttribute("style", "width:100%; height:100%;resize:both;position: absolute; left: 0px; top: 0px;right: 0px; bottom: 0px; z-index: 100005;");
        var body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
        body.appendChild(UnityDiv);
        UnityLoader.instantiate("UnityCanvas", "res/xiaoxiaole/xiaoxiaole.json");
    };
    return LayaAir3D;
}());
new LayaAir3D();
//# sourceMappingURL=LayaAir3D.js.map