import pandas as pd
import requests
from pandas import json_normalize

params = (
    ('league_id', '7'),
    ('per_page', '250'),
    ('projection_type_id', '1'),
    ('single_stat', 'true'),
)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; player.attributes.id.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
}
session = requests.Session()
response = session.get('https://api.prizepicks.com/projections?league_id=7&per_page=250&single_stat=true&projection_type_id=1&sort=player_name')


if response.status_code == 200:  # Successful response
    print(response.status_code)
    df1 = json_normalize(response.json()['included'])
    df1 = df1[df1['type'] == 'new_player']
    df2 = json_normalize(response.json()['data'])
    df = pd.DataFrame(zip(df1['attributes.name'], df2['attributes.line_score']), columns=['name', 'points'])
else:
    print(f"Error: {response.status_code} - {response.reason}")