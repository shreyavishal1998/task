const http = require("http");
const apiURL = "http://recruitment.roadcast.net/node_js_api";
function getApiResponse() {
    return new Promise((resolve, reject) => {
        http.get(apiURL, (response) => {
            let result="";

            response.on('data', (char) => {
                result = result+char;
            });

            response.on('end', () => {
                return resolve(result);
            });

            response.on('error', (error) => {
                return reject(error);
            });
        });
    });
}
(async () => {
    try {
        for (let i = 0; i < 10; i++) {
            let Apiresult = await getApiResponse();
            console.log(Apiresult);
        }
    } catch (error) {
        console.log(error.message);
    }
})();