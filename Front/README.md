🔸 Historia de Usuario
✏️ Título: Filtrado de Productos por Color
📝 Descripción: "Como usuario, quiero filtrar los productos por color para encontrar más fácilmente los artículos que coincidan con mis preferencias estéticas."

🔸 Criterios de Aceptación

Dado que los usuarios pueden tener preferencias de color específicas al buscar productos, la aplicación deberá proporcionar un filtro de colores.
Cuando el usuario seleccione un color en el filtro, el sistema deberá mostrar únicamente los productos que coincidan con esa selección.
Entonces la lista de productos deberá actualizarse en menos de 500ms para reflejar los resultados filtrados.
🔸 Diseño
🎨 Se añadirá un menú desplegable o una paleta de colores en la sección de productos.
⚙️ Se definirá una clase CSS para resaltar la opción de color seleccionada.

🔸 Implementación
📌 Creación de un nuevo estado en React para manejar el color seleccionado.
🗂️ Aplicación de un filtro dinámico a la lista de productos basada en el color elegido.

🔸 Pruebas
🔍 Caso de prueba 1: Seleccionar un color y verificar que solo se muestran productos de ese color.
🔍 Caso de prueba 2: Seleccionar "Todos" y comprobar que se muestran todos los productos nuevamente.
🔍 Caso de prueba 3: Probar en distintos navegadores y dispositivos para asegurar compatibilidad.


### Demostración

![Cambio de color](/T2/Sprint3/GIF/1.gif)
Prueba 1: 1: Seleccionar un color y verificar que solo se muestran productos de ese color.


![Cambio de color](/T2/Sprint3/GIF/2.gif)
Prueba 2: Seleccionar "Todos" y comprobar que se muestran todos los productos nuevamente.


![Cambio de color](/T2/Sprint3/GIF/3.gif)
Prueba 3: Probar en distintos navegadores y dispositivos para asegurar compatibilidad.

✏️ Título: Gestión de Productos Favoritos
📝 Descripción: "Como usuario, quiero poder marcar productos como favoritos para acceder rápidamente a ellos en una sección dedicada."

🔸 Criterios de Aceptación

Dado que los usuarios pueden querer guardar productos para revisarlos más tarde, la aplicación deberá permitir marcar y desmarcar productos como favoritos.
Cuando el usuario haga clic en el icono de "favorito" en un producto, este deberá guardarse en una lista accesible desde la navegación.
Entonces, la lista de favoritos deberá actualizarse en tiempo real y persistir tras recargar la página.
🔸 Diseño
🎨 Se añadirá un icono de corazón en cada tarjeta de producto para marcarlo como favorito.
⚙️ Se incluirá una sección de "Favoritos" en la navegación para acceder rápidamente a los productos guardados.

🔸 Implementación
📌 Creación de un contexto en React para gestionar el estado de los productos favoritos.
🗂️ Uso de localStorage para guardar los favoritos y mantenerlos tras una recarga.

🔸 Pruebas
🔍 Caso de prueba 1: Marcar un producto como favorito y verificar que aparece en la sección correspondiente.
🔍 Caso de prueba 2: Recargar la página y comprobar que los favoritos siguen guardados.
🔍 Caso de prueba 3: Desmarcar un producto de favoritos y verificar que desaparece de la lista.

![Cambio de color](/T2/Sprint3/GIF/4.gif)
Prueba 1: Marcar un producto como favorito y verificar que aparece en la sección correspondiente.


![Cambio de color](/T2/Sprint3/GIF/5.gif)
Prueba 2: Recargar la página y comprobar que los favoritos siguen guardados.


![Cambio de color](/T2/Sprint3/GIF/6.gif)
Prueba 3: Desmarcar un producto de favoritos y verificar que desaparece de la lista.


✏️ Título: Eliminar Productos del Carrito
📝 Descripción: "Como usuario, quiero poder eliminar productos del carrito de compras para gestionar mi pedido de manera eficiente."

🔸 Criterios de Aceptación

Dado que los usuarios pueden cambiar de opinión sobre los productos en su carrito, la aplicación deberá permitir eliminar productos fácilmente.
Cuando el usuario haga clic en el botón de eliminar junto a un producto en el carrito, este deberá desaparecer de la lista de compras.
Entonces, el total del carrito deberá actualizarse automáticamente y la eliminación deberá persistir tras recargar la página.
🔸 Diseño
🎨 Se añadirá un botón de "🗑 Eliminar" junto a cada producto dentro del carrito.
⚙️ Se mostrará una animación o efecto visual al eliminar un producto para mejorar la experiencia del usuario.

🔸 Implementación
📌 Modificación del contexto de carrito en React para gestionar la eliminación de productos.
🗂️ Uso de localStorage para mantener la lista del carrito actualizada incluso tras una recarga de la página.

🔸 Pruebas
🔍 Caso de prueba 1: Agregar un producto al carrito y luego eliminarlo, verificando que desaparece de la lista.
🔍 Caso de prueba 2: Eliminar un producto y confirmar que el total del carrito se actualiza correctamente.
🔍 Caso de prueba 3: Recargar la página y comprobar que el producto eliminado no reaparece en el carrito.

![Cambio de color](/T2/Sprint3/GIF/7.gif.gif)
Prueba 1: Agregar un producto al carrito y luego eliminarlo, verificando que desaparece de la lista.


![Cambio de color](/T2/Sprint3/GIF/8.gif)
Prueba 2: Eliminar un producto y confirmar que el total del carrito se actualiza correctamente.


![Cambio de color](/T2/Sprint3/GIF/9.gif)
Prueba 3: Recargar la página y comprobar que el producto eliminado no reaparece en el carrito.



