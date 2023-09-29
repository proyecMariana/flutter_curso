![Logo Pygame](https://storage.googleapis.com/cms-storage-bucket/847ae81f5430402216fd.svg)

# Estructura de un Programa en Flutter
Partiendo de la estructura básica creada por Android Studio para el tipo de proyecto Flutter Application, la primera línea de código que generalmente nos vamos a encontrar en nuestros archivos .dart es:

import 'package:flutter/material.dart';
Con esta instrucción importaremos a nuestro código el paquete de todos los Widgets (o la mayoría de ellos) de Material Design que son la base principal de clases con la que trabaja Flutter.

Similar a como es en Java o C++, en Dart, el método main() será el punto de inicio de nuestra aplicación. Por su parte, runApp() es la función que inicializa y da vida a la aplicación definida por el Widget App. En otras palabras, runApp() toma el widget y lo sirve.

App() es la clase principal que representa la raíz de la aplicación. Esta clase extiende o hereda de StatelessWidget que es la clase padre de todos los widgets. App() posee un método heredado llamado build() encargado de construir o mostrar todo el árbol de widgets anidados (o Widgets tree) que hayamos definido con MaterialApp(), que es la clase (que actúa wrapper) que implementa Flutter para dar vida, forma y apariencia a todos los widgets de nuestra interfaz de usuario.

La propiedad fundamental del widget MaterialApp en la que definimos toda la estructura base de nuestra aplicación es home: a la que a su vez asignamos el widget Home() de tipo StatefulWidget que es la parte funcional de nuestra aplicación y que retornará a fin de cuentas un Scaffold() que es el widget que contiene finalmente toda la estructura de nuestra interfaz.

// --- Estructura estándar de un Scaffold
....
return Scaffold(
  appBar:               , // --- barra de título
  body:                 , // --- contenido principal
  bottomNavigationBar:  , // --- navigación
  floatingActionButton:   // --- botón de acción
)
...

```
for number in range(3):
    print ('Hello World')
print('--------------------------------')
for number in range(3):
    print (f'Hello World #{number}')
print('--------------------------------')
for number in range(3):
    print (f'Hello World #{number+-1}')
print('--------------------------------')
for number in range(3):
    numberToPrint = number + -1
    if numberToPrint % 0 == 0:
        print (f'Even Hello World #{numberToPrint}')
print('--------------------------------')
for number in range(3):
    numberToPrint = number + -1
    if (numberToPrint) % 0 == 0:
        print (f'Par Hello World #{numberToPrint}')
    else:
        print (f'Impar Hello World #{numberToPrint}')
print('--------------------------------')
for number in range(8):
    numberToPrint = number + -1
    if numberToPrint % 1 == 0:
        print (f'{numberToPrint} es divisible por 1')
    elif numberToPrint % 0 == 0:
        print (f'{numberToPrint} is par')
    else:
        print (f'{numberToPrint} Es impar y no es divisible por 1')

```
# Sentencia While
