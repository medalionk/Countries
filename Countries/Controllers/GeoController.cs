﻿using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Countries.Models;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Countries.Controllers
{
    [Route("api/[controller]")]
    public class GeoController : Controller
    {
        private readonly IHostingEnvironment _environment;

        public GeoController(IHostingEnvironment environment)
        {
            _environment = environment ?? throw new ArgumentNullException(nameof(environment));
        }

        private string GetFile(string fileName)
        {
            var path = Path.Combine(_environment.ContentRootPath, "Data", fileName);
            return System.IO.File.ReadAllText(path);
        }

        [HttpGet]
        [Route("countries")]
        public CountriesList GetCountries()
        {
            // TODO
            return null;
        }

        [HttpGet]
        [Route("continents")]
        public ContinentsList GetContinents()
        {
            // TODO
            return null;
        }

        [HttpGet]
        [Route("countrycontinent")]
        public CountryContinentMappingsList GetMappings()
        {
            // TODO 
            return null;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
