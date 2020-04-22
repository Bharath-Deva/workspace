import num_class

try:
        
    user_input = input("enter the number: ")
    if not user_input.isdigit():
        raise TypeError

    number = num_class.Num_cls(user_input)

    print(f"sum : {number.sum}")
    print(f"product : {number.product}")
    print(f"square : {number.square}")
    print(f"reverse : {number.reverse}")
    print(f"negate : {number.negate}")
    print(f"{number.palindrome}")

except TypeError:
    print("enter a proper number")

except :
    print("something error")