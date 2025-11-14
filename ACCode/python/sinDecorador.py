import time

def saludar():
	print(f"[{time.strftime('%H:%M:%S')}] Ejecutando saludar()")
print("Hola!")

def despedir():
	print(f"[{time.strftime('%H:%M:%S')}] Ejecutando despedir()")
print("Adiós!")

saludar()
despedir()