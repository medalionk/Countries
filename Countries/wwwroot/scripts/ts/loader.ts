import { IContinent, ICountryContinentMapping, ICountry } from './rest-models';
import { ApiUtils } from './api';
import store from './store';

export class Loader {
    public static async LoadCountryNames() {
        const url = "/countries";
        store.countries = (await ApiUtils.doAjaxRequest<{ countries: ICountry[]}>(url)).countries;
    }

    public static async LoadContinents() {
        const url = "/continents";
        store.continents = (await ApiUtils.doAjaxRequest<{continents: IContinent[]}>(url)).continents;
    }

    public static async LoadCountriesPerContinents() {
        const url = "/countrycontinent";
        store.countriesPerContinent = (await ApiUtils.doAjaxRequest<{mappings: ICountryContinentMapping[] }>(url)).mappings;
    }
}
