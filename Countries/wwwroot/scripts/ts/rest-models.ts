export interface ICountry {
    name: string;
    flag: string;
    alpha2Code: string;
    alpha3Code: string;
    capital: string;
    population: number;
    currencies: ICurrency[];
    borders: string[];
    callingCodes: string[];
}

export interface ICurrency {
    code: string;
    name: string;
    symbol: string;
}

export interface ICountryContinentMapping {
    country: string;
    continent: string;
}

export interface IContinent {
    code: string;
    name: string;
}
