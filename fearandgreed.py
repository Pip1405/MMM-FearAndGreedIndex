import json
from fear_and_greed import get

def fetch_and_save_index():
    index = get()
    index_data = {
        "value": index.value,
        "description": index.description,
        "last_update": index.last_update.isoformat()  # Convert datetime to string
    }

    with open('/Users/philippsbresny/Documents/MagicMirror/modules/MMM-FearAndGreedIndex/data.json', 'w') as file:
        json.dump(index_data, file)

if __name__ == "__main__":
    fetch_and_save_index()
