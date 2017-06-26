"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const main_1 = require("./templates/main");
class Presenter {
    static Render() {
        ReactDOM.render(React.createElement(main_1.default, null), document.getElementById("react-app"));
    }
}
exports.Presenter = Presenter;
