import csv
input = open('D:\Bharath_deva\sw\workspace\exercises\colgData-ex-1\database.csv', 'rb')
output = open('D:\Bharath_deva\sw\workspace\exercises\colgData-ex-1\database.csv', 'wb')
writer = csv.writer(output)
for row in csv.reader(input):
    if row[2]!=0:
        writer.writerow(row)
input.close()
output.close()