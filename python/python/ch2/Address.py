class Address:
    def __init__(self, country):
        self.country = country
        
    def __str__(self):
        return f'{self.country}'