import * as React from "react";
import store from '../store';
import Countries from "./countries";

export default class Main extends React.Component<any, any> {
    constructor() {
        super();
    }

    private group() {
        return store.continents.map(c => {
            // TODO: 
            let countries = [];
            return { ...c, countries };
        });
    }

    render() {
        return (
            <div id="continents" role="tablist">
                {this.group().map(c =>
                    <div className="card" key={c.code}>
                        <div className="card-header">
                            <h5>
                                <a data-toggle="collapse" data-parent="#continents" href={`#collapse-${c.code}`}>
                                    {c.name}
                                </a>
                            </h5>
                        </div>
                        <div id={`collapse-${c.code}`} className="collapse" role="tabpanel">
                            <div className="card-block">
                                <Countries countries={c.countries} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}
