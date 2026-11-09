# Reto: lista de cursos con inscripción (Angular)

Proyecto completo del reto de la **diapositiva 19** de *Componentes padre e hijo*.

## Ejecución

1. Instala Node.js 20.19+ o 22.12+.
2. Abre una terminal en esta carpeta.
3. Ejecuta `npm install`.
4. Ejecuta `npm start` y abre la dirección indicada por Angular (normalmente http://localhost:4200).

## Requisitos del reto implementados

1. `curso.model.ts`: interface `Curso` con id, nombre, horas y precio.
2. `curso-card` usa `@Input() curso` y `@Output() inscribirse` con `EventEmitter<Curso>`.
3. Cada tarjeta muestra nombre, horas, precio y el botón **Inscribirme**.
4. El padre define 3 cursos, los muestra con `@for` y recibe el curso con `inscribir(curso)`.
5. El padre muestra **Inscritos: n** y **Total a pagar en Bs**. Al inscribir un curso, se desactiva su botón; además, `inscribir()` comprueba su ID para impedir inscripciones duplicadas.

Los estilos se adaptaron a partir de los archivos CSS adjuntos a la práctica inicial.
