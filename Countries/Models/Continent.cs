namespace Countries.Models
{
    public sealed class ContinentsList
    {
        public Continent[] Continents { get; set; }    
    }

    public sealed class Continent
    {
        public string Code { get; set; }
        public string Name { get; set; }
    }
}