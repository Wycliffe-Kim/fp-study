import requests

class TestDB:
    def get(self):
        response = requests.get('/api/get');
        return response.json()