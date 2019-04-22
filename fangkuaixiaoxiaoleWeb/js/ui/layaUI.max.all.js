var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var MainUIUI = /** @class */ (function (_super) {
        __extends(MainUIUI, _super);
        function MainUIUI() {
            return _super.call(this) || this;
        }
        MainUIUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MainUIUI.uiView);
        };
        MainUIUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Button", "props": { "y": 587, "x": 244, "width": 259, "var": "Joinbtn", "skin": "comp/button.png", "labelSize": 28, "label": "进入Unity游戏", "height": 89 } }] };
        return MainUIUI;
    }(View));
    ui.MainUIUI = MainUIUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map