import requests
import json

file = open ('products.json', "r")
data = json.loads(file.read())
for i in data:
    requests.post('http://test.ayush.com:8080/api/cart/create',json =i)

