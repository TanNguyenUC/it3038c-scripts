import json
import requests

r = requests.get('http://api.openweathermap.org/data/2.5/weather?zip=12345,us&appid=')
data = r.json()
print(data)