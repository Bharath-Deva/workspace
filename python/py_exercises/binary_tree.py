import random

n = int(input("enter the last number: "))
a = random.randint(1,n+1)
print(a,n)

is_bad = lambda data,a = a: data>=a

def finding_bad(last = n, begin = 0):
    mid = ((last+begin)//2)+1
    if is_bad(mid):
        if not is_bad(mid-1):
            return mid
        else:
            return finding_bad(mid, 0)
    else:
        return finding_bad(n, mid)

print(finding_bad(n))

