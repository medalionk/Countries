"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const store_1 = require("../store");
const countries_1 = require("./countries");
class Main extends React.Component {
    constructor() {
        super();
    }
    group() {
        return store_1.default.continents.map(c => {
            // TODO: Get countries for this continent.
            let countries = [];
            return Object.assign({}, c, { countries });
        });
    }
    render() {
        return (React.createElement("div", { id: "continents", role: "tablist" }, this.group().map(c => React.createElement("div", { className: "card", key: c.code },
            React.createElement("div", { className: "card-header" },
                React.createElement("h5", null,
                    React.createElement("a", { "data-toggle": "collapse", "data-parent": "#continents", href: `#collapse-${c.code}` }, c.name))),
            React.createElement("div", { id: `collapse-${c.code}`, className: "collapse", role: "tabpanel" },
                React.createElement("div", { className: "card-block" },
                    React.createElement(countries_1.default, { countries: c.countries })))))));
    }
}
exports.default = Main;
