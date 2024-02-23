# the fibonacci sequence take the current number and adds the previous number to get the next number in the iteration
# 0, 1, 1, 2, 3, 5, 8, 13, 21 ,34


def fibonacci(n: int, memo={}):  
    if n in memo:    # this checks the memory to see if the n'th value is already present
        return memo[n]
    
    if n == 0:   # base calulations for the fibonacci sequence
        result = 0
    elif n == 1:
        result = 1
    else:
        result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)  # recursive calulations
        
        
    memo[n] = result # stors all the calulated n'th values in the variable then returns it
    return result
