# Lecci贸n 02: Igualdad

# 馃惥 Primeros pasos

Cuando hablamos de operaciones de igualdad en JavaScript inevitablemente estamos hablando de "coerci贸n de tipos" (recuerda los tipos primitivos de la [lecci贸n 1](../leccion01/readme.md)). La **coerci贸n** es un pilar elemental para tener unos fundamentos s贸lidos sobre el lenguaje; me atrever铆a a decir que de cualquier lenguaje din谩mico, pero no estoy tan seguro de eso...

En cualquier caso, entender como los tipos de los valores y variables que usamos son manipulados, los tipos de conversiones m谩s habituales, cuando aprovecharse y cu谩ndo evitarlos es clave para escribir programas bien estructurados y con menos errores. **驴Est谩s lista o listo?**

馃摐 Te recomiendo leer sobre Igualdad en JavaScript [Lo que Nadie te Ense帽a Sobre la Igualdad en JavaScript
](https://www.escuelafrontend.com/articulos/nadie-te-ensena-sobre-la-igualdad-en-js).

### 馃弸锔忊?嶁檪锔廍jercicios

En este Ejercicio, definiremos nuestra propia versi贸n de la funci贸n `Object.is()`.

## Configuraci贸n de la lecci贸n

Es requerido tener instalado una versi贸n de `node` superior a `15.x`. Puedes instalarla [directamente](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) o puedes cambiar a una version igual o mayour [usando nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Debes instalar [pnpm](https://pnpm.io/) para que tengas menos problemas ejecutando los ejercicios. Puedes seguir los pasos para instalarlo en tu sistema [aqu铆](https://pnpm.io/installation)

```bash
git clone <REPO>
cd leccion02
pnpm install
```

Para poder empezar con el ejercicio, necesitas ejecutar el siguiente comando:

```bash
pnpm start
```

Ver谩s un mont贸n de tests fallidos en la consola:

![muestra de tests fallidos](assets/tests-fallidos.png)

Ahora puedes abrir el archivo [`./custom-object.js`](custom-object.js) y empezar a implementar la funcion `Object.is` siguiento las siguientes instrucciones

## Instrucciones

- [ ] 1. `Object.is(..)` debe aceptar dos parametros.

- [ ] 2. Debe devolver `true` si los parametros pasados son "estrictamente iguales" (no solamente `===`, sigue leyendo las otras instrucciones!), o `false` si son estrictamente iguales.

- [ ] 3. Para `NaN`, puedes usar la funci贸n `Number.isNaN()`

- [ ] 4. Para `-0`, lastimosamente no hay ninguna funci贸n nativa disponible, pero te dejo una pista para comprobarlo bien: `-Infinity`.

- [ ] 5. Si los par谩metros son de cualquier otro tipo, entonces podemos comprobar si igualdad de maneda estricta (`===`).

- [ ] 6. No puedes usar el m茅todo por defecto `Object.is()`, **No hagas trampas**! 馃槄

### 馃崿 Cr茅dito Extra

- [ ] 7. Intenta comprobar `NaN` sin usar la funci贸n `Number.isNaN()`, 驴C贸mo lo har铆as?

## 馃摚 Feedback

Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSf6hxzKdcgkQv6EKjS1AXmGO_Y49Aa86zOpcveI3Xp-ZIHYTg/viewform?usp=pp_url&entry.1972342453={{MI-EMAIL}}&entry.1828471740=leccion-02)

---

**Agradecimientos**

El ejercicio que hemos hecho en esta lecci贸n fue traducido del curso "Deep JavaScript Foundations, v3" de [Kyle Simpson](https://github.com/getify) que puedes encontrar en [Frontend Masters](https://frontendmasters.com/courses/deep-javascript-v3/). Kyle me ha dado concentimiento para usar su mismo ejercicio!
