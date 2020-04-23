from flask import Flask , render_template ,url_for
app = Flask(__name__)

@app.route('/<int>')
def hello_world(username=None):
    return render_template('text.html',name=username)

@app.route('/')
def blog():
    return 'hey this is my blog!'

@app.route('/dog')
def hello():
    return 'Hey this is my Nesamani'

app.run()