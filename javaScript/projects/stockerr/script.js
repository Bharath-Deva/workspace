console.log("Web page loaded")
let company = document.querySelector(".company");
let api_key = "BOTAHB99HFPL04KQ";
let display = document.querySelector(".display")

company.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let company_name = company.value
    company.value = "";
    console.log(company_name);
    controller(company_name);
  }

}
)

const controller = async (input_data) => {
  let [symb_response, symbol_list] = await symbol_data(input_data);
  let symbol = symbol_list[0]["1. symbol"];
  let company_name = symbol_list[0]["2. name"]
  // console.log(symbol, company_name);
  let stock_response = await stock_data(symbol);
  console.log(stock_response);
  UI([stock_response.data, company_name, name]);
}

const symbol_data = async (input_data) => {
  let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input_data}&apikey=${api_key}`
  let response = await axios.get(url);
  console.log(`${url} got symb_response`);
  let symbol_list = response.data.bestMatches
  return ([response, symbol_list])
}

const stock_data = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&outputsize=full&apikey=${api_key}`;
  let response = await axios.get(url);
  console.log(`got stock response ${url}`)
  return response;

}

var UI = (data) => {
  let [response, company_name, input_data] = data;
  console.log(input_data)
  let stocks_today = response["Time Series (Daily)"]["2020-08-17"]
  let stocks_yest = response["Time Series (Daily)"]["2020-08-14"]
  console.log(display)
  display.innerHTML =
    `<div class="${input_data}">
    <p><h2>${input_data}</h2></p>
    <p><h3>Company Name: </h3>${company_name}</p>
    <div class="open">
      <p class="open_heading">Open: ${stocks_today["1. open"]}</p>
    </div>
    <div class="close">
      <p class="close_heading">Close: ${stocks_today["1. open"]}</p>
    </div>
  </div>
  `

}


/*
<div class="${input_data}">
  <p><h2>${input_data}</h2></p>
  <p><h3>Company Name: ${company_name}</h3></p>
  <div class="open">
    <p class="open_heading">Open</p>
  </div>
  <div class="close">
    <p class="close_heading">Close</p>
    <p>stocks[]</p>
  </div>
</div>
*/
