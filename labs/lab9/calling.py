import json
import requests

r = requests.get('http://localhost:3000/widgets').content

# Need to decode the data back to string for new line to work.
data = r.decode("utf-8")
print(data)