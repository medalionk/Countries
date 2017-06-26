import { Presenter } from './presenter';
import { Loader } from './loader';
class App {
    public start() {
        Loader.LoadCountryNames();
        Loader.LoadContinents();
        Loader.LoadCountriesPerContinents();
        // TODO: 
        Presenter.Render();
    }
}

(() => {
    const app = new App();
    app.start();
    // TODO
    $('[data-toggle="tooltip"]');
})();
