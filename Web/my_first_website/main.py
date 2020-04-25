from flask import Flask , render_template, url_for, request, redirect
import csv

app = Flask(__name__)
def write_to_database(data):
    with open('database.csv', mode='a') as db:
        cwritr=csv.writer(db, delimiter=',', quotechar='' ,quoting =csv.QUOTE_MINIMAL )
        writer.write([data["email"],data["subject"],data["blog-name"]])

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/submit_form',methods=['POST','GET'])
def submit():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        return redirect('/home.html')
    else:
        return 'something went wrong'

app.run() 