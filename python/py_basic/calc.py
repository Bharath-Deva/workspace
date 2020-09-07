import calc_module


def execute(fun,*args):
    def wrapper(*args):
        print("your answer is:")
        print(fun(*args))
    return wrapper

while(1):
    print("operations available: \n 1.addition \n 2.subraction \n 3.multiplication \n 4.division")
    choice=input("enter ur choice: ")
    try:
        if(choice=='1'):
            op=tuple(map(int,input("enter the sequence: ").split()))
            c=execute(calc_module.add)
            c(op)


        elif(choice=='2'):
            (a,b)=tuple(map(int,input("enter the two numbers: ").split()))
            c=execute(calc_module.add)
            c(a,-b)


        elif(choice=='3'):
            op=tuple(map(int,input("enter the sequence: ").split()))
            c=execute(calc_module.mul,op)
            c(op)

        elif(choice=='4'):
            (a,b)=tuple(map(int,input("enter the sequence: ").split()))
            c=execute(calc_module.div,a,b)
            c(a,-b)

        else:
            print("enter the choice with in the range")

    except TypeError:
        print("use only numbers")
    if(int(input("0 to continue \n1 to stop: "))):
        break


