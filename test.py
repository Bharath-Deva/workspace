import time
l=list(range(10000))
def f():
    for i in range(10000):
        a=(i)
def w():
    for i in l:
        a=(i)

s=time.time()
f()
print("range loop time",time.time()-s)

s=time.time()
w()
print("list loop",time.time()-s)

