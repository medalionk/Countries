namespace Countries.Models
{
    public sealed class CountryContinentMappingsList
    {
        public CountryContinentMapping[] Mappings { get; set; }
    }

    public sealed class CountryContinentMapping
    {
        public string Country { get; set; }
        public string Continent { get; set; }
    }
}