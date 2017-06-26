"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Country extends React.Component {
    render() {
        return (React.createElement("tr", { "data-toggle": "tooltip", "data-placement": "left", title: "Population: TODO: Fix me" },
            React.createElement("td", null),
            React.createElement("td", null, this.props.country.name),
            React.createElement("td", null),
            React.createElement("td", null),
            React.createElement("td", null)));
    }
}
exports.default = Country;
