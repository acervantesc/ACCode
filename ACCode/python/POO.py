class Persona:
    def __init__(self, nombre):
        self._nombre = nombre

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nuevo_nombre):
        self._nombre = nuevo_nombre

# Crear una instancia de Persona
persona = Persona("Juan")

# Utilizar el getter
print(persona.nombre)  # Salida: Juan

# Utilizar el setter
persona.nombre = "Pedro"

# Utilizar nuevamente el getter
print(persona.nombre)  # Salida: Pedro