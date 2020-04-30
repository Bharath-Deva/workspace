from flask import Flask , render_template
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/<name>')
def blog(text):
    if (text=='add'):
        pass


@app.route('/submit_form',methods=['POST','GET'])
def submit():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        return redirect('/thank.html')
    else:
        return 'something went wrong'

app.run() 