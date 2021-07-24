# Lección 01: Tipos Primitivos

# 🐾 Primeros pasos

### 🎯Objetivos

### 🏋️‍♂️Ejercicios

En este Ejercicio, definiremos nuestra propia versión de la función `Object.is()`.

## Instructions

1. `Object.is(..)` debe aceptar dos parametros.

2. Debe devlover `true` si los parametros psados son "exactamente iguales" (no solamente `===`, sigue leyendo las otras instrucciones!), o `false` si no lo son.

3. Para `NaN`, puedes usar la función `Number.isNaN()`

4. Para `-0`, lastimosamente no hay ninguna función nativa disponible, pero te dejo una pista para comprobarlo bien: `-Infinity`.

5. Si los parámetros son de cualquier otro tipo, entonces podemos comprobar si ugualdad de maneda estricta (`===`).

6. No puedes usar el mñetodo por defecto `Object.is()`, No hagas trampas!

### 🍬 Crédito Extra

1. Intenta comprobar `NaN` sin usar la función `Number.isNaN()`, ¿Cómo lo harías?

## 📣 Feedback

Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSf6hxzKdcgkQv6EKjS1AXmGO_Y49Aa86zOpcveI3Xp-ZIHYTg/viewform?usp=pp_url&entry.1972342453={{MI-EMAIL}}&entry.1828471740=leccion-01)

## Recursos

- El ejercicio que hemos hecho en esta lección fue traducido del curso "Deep JavaScript Foundations, v3" de [Kyle Simpson](https://github.com/getify) que puedes encontrar en [Frontend Masters](https://frontendmasters.com/courses/deep-javascript-v3/). Kyle me ha dado concentimiento para usar su mismo ejercicio!