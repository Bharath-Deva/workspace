from flask import Flask, render_template, request ,redirect
import csv
import os

action = ""
app = Flask(__name__)

def to_database(data):
    with open('database.csv', mode = "a", newline='') as database:
        field_names = ['Name', 'Gender', 'Salary', 'E-mail', 'Phone number']
        csv_w = csv.DictWriter(database, fieldnames = field_names, delimiter = ",")
        filesize = os.path.getsize('database.csv')
        if filesize == 0:
            csv_w.writeheader()
        csv_w.writerow(data)
        return 0

def from_database(data,mode = None):
    with open('database.csv', mode = "r", newline='') as database:
        csv_r = csv.DictReader(database)
        keyword = data["keyword"] 
        detail = data["detail"]
        for row in csv_r:
            if row[keyword] == detail:
                return row
        else:
            return None


@app.route('/')
@app.route('/home.html')
def home():
    return render_template('home.html')

@app.route('/<name>')
def action(name=None):
    global action
    if (name == 'add.html'):
        action = "add"
        return render_template('add.html')
    if (name == 'show.html'):
        action = "show"
        return render_template('show.html',name = name[:4])
    if (name == 'remove.html'):
        action = "remove"
        return render_template('show.html',name = name[:6])
    if (name == 'thank.html'):
         return render_template('thank.html')
    

@app.route('/submit_form/<action>',methods=['POST', 'GET'])
def submit(action=None):
    if action == 'add':
        data = request.form.to_dict()
        to_database(data)
        return render_template('/thank.html',mode = 'add')

    elif action == 'show':
        data = request.form.to_dict()
        data = from_database(data)
        return render_template('/thank.html',mode = 'show', data = data)

    elif action == 'remove':
        data = request.form.to_dict()
        data = from_database(data, mode=1)
        return render_template('/thank.html',mode = 'remove', data = data)

        

    




    

app.run() 