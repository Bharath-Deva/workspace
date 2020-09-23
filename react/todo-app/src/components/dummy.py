n = int(input())
data = ()
for i in range(n):
    temp = int(input())
    data.append(temp)


mini = min(data)
count = 0

for i in range(2, mini+1):
    for j in data:
        if j % i != 0:
            break
    else:
        count += 1
