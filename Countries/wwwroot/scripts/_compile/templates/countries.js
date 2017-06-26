"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const country_1 = require("./country");
class Countries extends React.Component {
    render() {
        return (React.createElement("table", { className: "table table-striped table-sm" },
            React.createElement("thead", { className: "thead-inverse" },
                React.createElement("tr", null,
                    React.createElement("th", null, "Flag"),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Currencies"),
                    React.createElement("th", null, "Phone Codes"),
                    React.createElement("th", null, "Border Countries"))),
            React.createElement("tbody", null, this.props.countries.map(c => React.createElement(country_1.default, { key: c.alpha2Code, country: c })))));
    }
}
exports.default = Countries;
