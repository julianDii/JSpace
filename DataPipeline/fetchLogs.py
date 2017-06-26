import requests
import configparser

config = configparser.RawConfigParser()
config.read('myconfic.properties')
token = config.get('CiSection', 'ci.token')

print(token)

headers = {'Accept': 'application/json'}

request = requests.get(
    "https://circleci.com/api/v1.1/recent-builds?circle-token=" + token,
    headers)

with open('recent_builds.json', 'w') as outf:
    outf.write(request.text)

