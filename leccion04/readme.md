# Lección 04: Closures

---

# 🐾 Primeros pasos

Closures es uno de los conceptos más fundamentales de JavaScript. Conocerlo bien y saber identificarlo será escencial para tu carrera como programador.

### 🎯Objetivos

### 🏋️‍♂️Ejercicios

En este Ejercicio, implementaremos un `contador`. Este contador es especial ya que define unos métodos especiales para sumar, restar, reset y acceder al valor (printValue).

## Configuración de la lección

Es requerido tener instalado una versión de `node` superior a `15.x`. Puedes instalarla [directamente](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) o puedes cambiar a una version igual o mayour [usando nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Debes instalar [pnpm](https://pnpm.io/) para que tengas menos problemas ejecutando los ejercicios. Puedes seguir los pasos para instalarlo en tu sistema [aquí](https://pnpm.io/installation)

```bash
git clone <REPO>
cd leccion04
pnpm install
```

Para poder empezar con el ejercicio, necesitas ejecutar el siguiente comando:

```bash
pnpm start
```

Verás un montón de tests fallidos en la consola:

![muestra de tests fallidos](assets/tests-fallidos.png)

Ahora puedes abrir el archivo [`./contador.js`](contador.js) y empezar a implementar la funcion `Contador` siguiento las siguientes instrucciones

## Instrucciones

- [ ] 1. El contador debe tener un sitio en donde guarde el valor de sí mismo. Necesitamos una variable.
- [ ] 2. Implementar `sumar`: aumenta por 1 el contador
- [ ] 3. restar: disminuye por 1 el contador
- [ ] 4. reset: fija el contador a cero (0)
- [ ] 5. printValue: devuelve el valor actual del contador

### 🍬 Crédito Extra

- [ ] 6. Cómo podriamos crear un contador que aumente o disminuya el valor por un numero determinado? ¿Cómo harías para hacer un contador que vaya de 3 en 3?
- [ ] 7. Y si quisieramos que el contador empieze por otro valor distinto a cero?

## 📣 Feedback

Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSf6hxzKdcgkQv6EKjS1AXmGO_Y49Aa86zOpcveI3Xp-ZIHYTg/viewform?usp=pp_url&entry.1972342453={{MI-EMAIL}}&entry.1828471740=leccion-04)
