class  itr:
    def __init__(self):
        self.num = 
    
    def __iter__(self):
        return self.num

    def __next__(self):
        if self.num <= 10:
            val=self.num
            self.num +=1
            return val
        raise StopIteration

valuse =itr()

for i in valuse:
    print(i)