from urllib.request import urlopen, Request, urlretrieve 
import requests
url = 'https://docs.python.org/3/howto/urllib2.html'
a = Request('https://docs.python.org/3/howto/urllib2.html')
response = urlopen(a)
c = urlopen('https://docs.python.org/3/howto/urllib2.html')
html = response.read()
b = urlretrieve('https://docs.python.org/3/howto/urllib2.html')
r = requests.get(url)
text = r.text

print(a.__dict__,a,response,c,r,text,html,sep="\n\n")