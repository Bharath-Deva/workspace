import csv

def from_database(data,mode = None):
    with open('D:\Bharath_deva\sw\workspace\Web\emp_site\database.csv', mode = "r", newline='') as database:
        csv_r = csv.DictReader(database)
        keyword = data["keyword"] 
        detail = data["detail"]
        for row in csv_r:
            if row[keyword] == detail:
                return row
        else:
            return None

data={'keyword':'Name','detail':'Bharath'}
print(from_database(data))
aa=1