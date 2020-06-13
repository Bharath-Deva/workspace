from flask import Flask, render_template, request
import json
from urllib.request import urlopen 

country = {'country' : 'India'}
url = f'http://samples.openweathermap.org/data/2.5/weather?q={country["country"]}&appid=439d4b804bc8187953eb36d2a8c26a02'
print(url)
url_response = urlopen(url)
weather_data = url_response.read()
weather_data = weather_data.decode("utf-8")
weather_data = json.loads(weather_data)
for i in weather_data:
    print(f"{i}:{weather_data[i]}")
