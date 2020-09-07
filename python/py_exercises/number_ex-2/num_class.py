from functools import reduce

class Num_cls:
    try:

        def __init__(self,value):
            self.value = value
            self.sum = self.num_sum()
            self.product = self.num_product()
            self.square = self.num_square()
            self.reverse = self.num_reverse()
            self.negate = self.num_negate()
            self.palindrome = self.num_palindrome()


        def num_sum(self):
            sum = reduce((lambda a,b : int(a)*int(b)),self.value)
            return(sum)

        def num_product(self):
            product = reduce((lambda a,b : int(a)*int(b)),self.value)
            return(product)
            
        def num_square(self):
            square = int(self.value) * int(self.value)
            return(square)

        def num_reverse(self):
            reverse = int(self.value[::-1])
            return(reverse)
        
        def num_negate(self):
            negate = int(self.value) * -1
            return(negate)
        
        def num_palindrome(self):
            if self.value != self.value[::-1]:
                return("No, its not a plaindrome")
            else:
                return("Yes, its a palindrome")
    
    except:
        print("something went wrong")

