try:
        
    def add(operators):
        s=0
        for i in operators:
            s=s+i
        return s

    def mul(operators):
        s=0
        for i in operators:
            s=s*i
        return s

    def div(a,b):
        return(a//b,a%b)

except ZeroDivisionError:
    print("math error: infinity")
        