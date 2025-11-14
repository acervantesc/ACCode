def generador_pares(n):
    for i in range(0,n,2):
        yield i


gen_pares = generador_pares(12)
for num in gen_pares:
    print(num)