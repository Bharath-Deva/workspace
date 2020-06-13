def gen():
    n=0
    while(n<=10):
        s=n*n
        yield s
        n+=1

a=gen()

for i in a:
    print(i)