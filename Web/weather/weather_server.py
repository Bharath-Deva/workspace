from flask import Flask, render_template, request
import json
from urllib.request import urlopen

app = Flask(__name__)
api_key = "eac7f9665ef2bdb0e603d3c9fc94c3b6"


def data_from_api(country):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={country}&appid={api_key}&units=metric'
    print(url)
    url_response = urlopen(url)
    weather_data = url_response.read()
    return weather_data


def get_country_list(country):
    with open("city.list.json", encoding='utf-8') as data:
        data_dict = json.load(data)
        country_list = []
        for i in data_dict:
            if country in i["name"]:
                country_list.append(i["name"])
    return country_list


@app.route('/', methods=['POST', 'GET'])
@app.route('/home')
def home():
    country_list = []
    if request.method == "POST":
        data = request.form.to_dict()["country"]
        print("country:", data)
        country_list = get_country_list(data)
        print(country_list)
        return render_template('weather_home.html', country_list=country_list,length = len(country_list))
    return render_template('weather_home.html', country_list=country_list, length = len(country_list))


@app.route('/submit_form/<string:country>', methods=['POST', 'GET'])
def submit(country=None):
    print(country)
    country = "%20".join(country.split(" "))  # trying to remove spaces
    weather_data = data_from_api(country)
    # decode has to be done for json coversion
    weather_data = weather_data.decode(encoding="UTF-8")
    print(weather_data)
    weather_data = json.loads(weather_data)
    return render_template('weather_submit.html', weather_data=weather_data)
