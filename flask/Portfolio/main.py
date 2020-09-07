from flask import Flask , render_template, url_for, request, redirect
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/<text>')
def blog(text):
    return render_template(text)

@app.route('/submit_form',methods=['POST','GET'])
def submit():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        return redirect('/thank.html')
    else:
        return 'something went wrong'

app.run() 