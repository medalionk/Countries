"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class ApiUtils {
    static doAjaxRequest(url, data, method = "GET") {
        const promise = new Promise((resolve, reject) => {
            const ajaxOptions = {
                url: "/api/geo" + url,
                success: (data, textStatus, jqXHR) => {
                    resolve(data);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    reject(errorThrown);
                },
                method: method,
                accepts: "application/json; charset=UTF-8",
                cache: true,
            };
            if (data) {
                if (method === "POST") {
                    ajaxOptions.contentType = "application/json; charset=UTF-8";
                    ajaxOptions.data = JSON.stringify(data);
                }
                else {
                    ajaxOptions.data = data;
                }
            }
            $.ajax(ajaxOptions);
        });
        return promise;
    }
}
exports.ApiUtils = ApiUtils;
