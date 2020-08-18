var unirest = require("unirest");

var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary");

req.query({
    "region": "US",
    "lang": "en"
});

req.headers({
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "7f0a480442mshf40a59ad693eebcp189273jsna22aa1baaaab",
    "useQueryString": true
});
console.log(req)

