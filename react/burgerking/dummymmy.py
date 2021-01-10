from collections import defaultdict


def countSort(arr):
    d = defaultdict(list)
    h = len(arr)//2
    for i, (x, y) in enumerate(arr):
        d[int(x)].append("-" if i < h else y)
    for i in range(max(d)+1):
        for j in d[i]:
            yield j


n = 20
arr = [['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['4', 'ij'], ['0', 'ab'],    ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['0', 'ij'], [
    '4', 'that'], ['3', 'be'], ['0', 'to'], ['1', 'be'], ['5', 'question'], ['1', 'or'], ['2', 'not'], ['4', 'is'], ['2', 'to'], ['4', 'the']]
print(*countSort(arr))
