memberName = input("Please enter a member's name to be deleted.")

imp = open('database.csv' , 'rb')

out = open('database.csv' , 'wb')

writer = csv.writer(out)

for row in csv.reader(imp):

    if row == memberName:

        writer.writerow(row)

imp.close()

out.close()