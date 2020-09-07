import time
#l=list(range(10000))
def f(start,stop):
    for i in range(start, stop):
        yield i * i

def w():
    for i in l:
        a=(i)

s=time.time()
generator = f(0, 1000000)
for i in generator:
    a=i
print("range loop time",time.time()-s)

s=time.time()
generator = (i*i for i in range(0, 1000000))
for i in generator:
    a=i
print("list loop",time.time()-s)

