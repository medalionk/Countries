using System.Collections.Generic;

namespace Countries.Models
{
    public sealed class CountriesList
    {
        public Country[] Countries { get; set; }
    }

    public sealed class Country
    {
        public string Name { get; set; }
        public string[] TopLevelDomain { get; set; }
        public string Alpha2Code { get; set; }
        public string Alpha3Code { get; set; }
        public string[] CallingCodes { get; set; }
        public string Capital { get; set; }
        public string[] AltSpellings { get; set; }
        public string Region { get; set; }
        public int Population { get; set; }
        public double[] Latlng { get; set; }
        public string Demonym { get; set; }
        public double? Area { get; set; }
        public double? Gini { get; set; }
        public string[] Timezones { get; set; }
        public string[] Borders { get; set; }
        public string NativeName { get; set; }
        public string NumericCode { get; set; }
        public Currency[] Currencies { get; set; }
        public Language[] Languages { get; set; }
        public Dictionary<string, string> Translations { get; set; }
        public string Flag { get; set; }
    }

    public sealed class Currency
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
    }

    public sealed class Language
    {
        public string Iso639_1 { get; set; }
        public string Iso639_2 { get; set; }
        public string Name { get; set; }
        public string NativeName { get; set; }
    }
}
