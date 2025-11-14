import time

def registrar_tiempo(func):
    def wrapper():
        print(f"[{time.strftime('%H:%M:%S')}] Ejecutando {func.__name__}()")
        func()
    return wrapper
    


@registrar_tiempo
def saludar():
    print("Hola!")

@registrar_tiempo
def despedir():
    print("Adiós!")

saludar()
despedir()



