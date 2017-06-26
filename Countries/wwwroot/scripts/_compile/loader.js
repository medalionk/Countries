"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const store_1 = require("./store");
class Loader {
    static LoadCountryNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "/countries";
            store_1.default.countries = (yield api_1.ApiUtils.doAjaxRequest(url)).countries;
        });
    }
    static LoadContinents() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "/continents";
            store_1.default.continents = (yield api_1.ApiUtils.doAjaxRequest(url)).continents;
        });
    }
    static LoadCountriesPerContinents() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "/countrycontinent";
            store_1.default.countriesPerContinent = (yield api_1.ApiUtils.doAjaxRequest(url)).mappings;
        });
    }
}
exports.Loader = Loader;
