class Animal:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def hacer_sonido(self):
        pass

class Perro(Animal):
    def hacer_sonido(self):
        return "¡Guau!"

class Gato(Animal):
    def hacer_sonido(self):
        return "¡Miau!"

# Creamos instancias de diferentes tipos de animales
mi_perro = Perro("Fido", "3")
mi_gato = Gato("Garfield","5")

# Llamamos al método hacer_sonido para cada animal
print(mi_perro.nombre + " tiene de edad " + mi_perro.edad + " y dice: " + mi_perro.hacer_sonido())
print(mi_gato.nombre + " tiene de edad " + mi_gato.edad + " dice: " + mi_gato.hacer_sonido())