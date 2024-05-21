import requests
from bs4 import BeautifulSoup as bs
import json

url = 'https://api.prizepicks.com/projections?league_id=7&per_page=250&single_stat=true&projection_type_id=1&sort=player_name'
headers = {
'Connection': 'keep-alive',
'Accept': 'application/json; charset=UTF-8',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
'Access-Control-Allow-Credentials': 'true',
'Sec-Fetch-Site': 'same-origin',
'Sec-Fetch-Mode': 'cors',
'Referer': 'https://app.prizepicks.com/',
'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'en-US,en;q=0.9'
}
## organize intop
response = requests.get(url, headers=headers)

if response.status_code == 403:
    print("Access denied. Please check your headers and authentication.")
else:
    print(response.json())

JSONDATA = response.json()
with open('data.json', 'w') as f:
    json.dump(JSONDATA, f)