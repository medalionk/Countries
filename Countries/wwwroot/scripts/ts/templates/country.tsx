import { ICountry } from '../rest-models';
import * as React from "react";

export default class Country extends React.Component<{country: ICountry}, any> {
    render() {
        return (
            <tr data-toggle="tooltip" data-placement="left" title= {`Population: ${this.props.country.population}`} >
                <td>{this.props.country.flag}</td>
                <td>{this.props.country.name}</td>
                <td>{this.props.country.currencies.map(o => o.name).join(',')}</td>
                <td>{this.props.country.callingCodes[0]}</td>
                <td>{this.props.country.borders.map(o => o).join(', ')}</td>
            </tr>
        );
    }
}

