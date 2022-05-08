# Lección 01: Tipos Primitivos

# 🐾 Primeros pasos

En JavaScript **NO** todo es un objeto. Debido a la naturaleza Dinámica de JavaScript, conocer sus tipos primitivos nos ayuda a solucionar y resolver problemas de una manera más eficiente y con bases claras. Sabiendo sobre los tipos primitivos nos ayuda a poder resolver problemas en nuestras aplicaciones de manera eficiente y más correcta.

📜 Te recomiendo leer ["Aprendamos Sobre los Tipos de Datos Primitivos en JavaScript"](https://escuelafrontend.com/articulos/los-tipos-primitivos-en-javascript) en [Escuela Frontend](https://escuelafrontend.com).

### 🏋️‍♂️ Ejercicios

En este Ejercicio, crearemos la funcion `sum`. El objetivo de ésta función es sumar las variables que recibe.

## Configuración de la lección

Es requerido tener instalado una versión de `node` superior a `15.x`. Puedes instalarla [directamente](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) o puedes cambiar a una version igual o mayour [usando nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```bash
git clone <REPO>
cd leccion01
npm install # o yarn install o pnpm install
```

Para poder empezar con el ejercicio, necesitas ejecutar el siguiente comando:

```bash
npm run start
```

Verás un montón de tests fallidos en la consola:

![muestra de tests fallidos](assets/tests-fallidos.png)

Ahora puedes abrir el archivo [`./sum.js`](sum.js) y empezar a implementar la funcion `sum` siguiento las siguientes instrucciones

## Instrucciones

- [ ] 1. Comprueba que los tipos de `a` y de `b` son de tipo `number` o `string`
- [ ] 2. antes de sumar ambos numeros, tienes que asegurarte que ambos sean de tipo `number` para evitar concatenación de cadenas de texto!

### 🍬 Crédito Extra

- [ ] 3. recuerda que `NaN` es de tipo `number`, ¿Cómo puedes comprobar que no sea `NaN`?
- [ ] 4. que pasa si permitimos pasar más de dos valores? (`sum(2, 3, 4)`)

## 📣 Feedback

Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSf6hxzKdcgkQv6EKjS1AXmGO_Y49Aa86zOpcveI3Xp-ZIHYTg/viewform?usp=pp_url&entry.1972342453={{MI-EMAIL}}&entry.1828471740=leccion-01)
