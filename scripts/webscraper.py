import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
pd.set_option('display.max_columns', 500)




pp_props_url = 'https://api.prizepicks.com/projections?league_id=7&per_page=250&single_stat=true'
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

r = requests.get(pp_props_url, headers=headers)
print(r)
df = pd.json_normalize(r.json()['data'])
print(df)