import { IContinent, ICountry, ICountryContinentMapping } from './rest-models';
class Store {
    countries: ICountry[];
    continents: IContinent[];
    countriesPerContinent: ICountryContinentMapping[];
}

const store = new Store();
export default store;
