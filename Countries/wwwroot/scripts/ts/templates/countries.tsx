import { ICountry } from '../rest-models';
import * as React from "react";
import Country from "./country";

export default class Countries extends React.Component<{countries: ICountry[]}, any> {
    render() {
        return (
            <table className="table table-striped table-sm">
                <thead className="thead-inverse">
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Currencies</th>
                        <th>Phone Codes</th>
                        <th>Border Countries</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.countries.map(c => <Country key={c.alpha2Code} country={c} />)}
                </tbody>
            </table>
        );
    }
}

