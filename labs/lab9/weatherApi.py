import json
import requests

r = requests.get('http://api.openweathermap.org/data/2.5/weather?zip=12345,us&appid=a3bd77ad80a230e6966bf594523decfd')
data = r.json()
print(data)