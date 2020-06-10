# #how to install
# # sudo apt-get install python3-scipy ## for Python3


# import sympy

# x = sympy.S('x')
# y = sympy.S('y')


# print(sympy.solve(2*x+2 - 4, x))

# eqn = 4*x**2 + 4*x + 1 
# print(sympy.factor(eqn))

# print(sympy.expand((x+1)*(x-1)))

# a = sympy.S('a')
# b = sympy.S('b')
# c = sympy.S('c')

# print(sympy.together(b/c+x/a))

# print(sympy.cos(0))

# sympy.plotting.plot(x**2, (x, -5, 5))


# print(sympy.diff(x**2, x,1))
# print(sympy.integrate(x**2, x))
# print(sympy.integrate(x**2, (x,0,1)))

# eqn = 4*x**2 + 2*x + 1 
# print(eqn.subs(x, 23))



# import numpy as np
# data = ['2','3','4','5']
# print(data)
# myarray = np.array(data)
# # turns list into array
# print(myarray)
# thing = [1,2,3,4]
# print(np.sin(thing))
# print(np.sqrt(49))



# data=np.loadtxt('file.csv', delimiter='')
# np.max(data)
# np.min(data)
# np.mean(data)

# print(np.zeros([5,6])) #makes array w 5 rows, 6 colums, values=0

# print(np.linspace(0,10,101)) #splits into 101 pieces


# from matplotlib.pyplot import plot, show
# x = np.linspace(0,1,11)
# y = np.sin(np.pi*x)
# plot(x,y)
# show()

# import matplotlib.pyplot as plot
# plt.plot(x,y,'b--')

# import random
# print(np.random.randint(0,11))
# print(np.random.uniform()) #from 0 to 1
# print(np.random.normal()) #bellcurve

# print(np.random.uniform(size=(5,5))) #5by5 array of rand values

# np.mean(x)
# mylist = [3,6,8,9]
# print(np.random.choice(mylist)) #choosee form valeus in a list
# np.random.shuffle(mylist) #changes order
# print(mylist)

# import itertools
# a = [1,2,3,4]
# b = ['a','b','c']
# #creates all poss sets of 2, one form each
# for a,b in itertools.product(a,b):
#     print(a,b)