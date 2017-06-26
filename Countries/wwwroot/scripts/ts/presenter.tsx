import * as React from "react";
import * as ReactDOM from 'react-dom';
import Main from "./templates/main";

export class Presenter {
    public static Render() {
        ReactDOM.render(<Main />, document.getElementById("react-app"));
    }
}
