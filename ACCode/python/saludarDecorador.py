def antes_y_despues(func):
    def wrapper():
        print("Antes de ejecutar la función")
        func()
        print("Después de ejecutar la función")
    return wrapper
    
    
@antes_y_despues

def saludar():
    print("¡Hola!")

@antes_y_despues
def despedir():
    print("¡Adiós!")

saludar()
despedir()