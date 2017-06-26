"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presenter_1 = require("./presenter");
const loader_1 = require("./loader");
class App {
    start() {
        loader_1.Loader.LoadCountryNames();
        loader_1.Loader.LoadContinents();
        loader_1.Loader.LoadCountriesPerContinents();
        // TODO: Fix nothing is rendered.
        presenter_1.Presenter.Render();
    }
}
(() => {
    const app = new App();
    app.start();
    // TODO: Fix toolip not shown
    $('[data-toggle="tooltip"]');
})();
