def generador_num(n):
    for i in range(n):
        yield i


gen=generador_num(5)
for num in gen:
    print(num)        

