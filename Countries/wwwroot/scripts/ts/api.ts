import $ = require("jquery");

export class ApiUtils {

    static doAjaxRequest<T>(url: string, data?: any, method: string = "GET"): Promise<T> {
        const promise = new Promise((resolve, reject) => {
            const ajaxOptions: JQueryAjaxSettings = {
                url: "/api/geo" + url,
                success: (data: T, textStatus: string, jqXHR: JQueryXHR) => {
                    resolve(data);
                },
                error: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => {
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
                } else {
                    ajaxOptions.data = data;
                }
            }

            $.ajax(ajaxOptions);
        });
        return promise;
    }
}

