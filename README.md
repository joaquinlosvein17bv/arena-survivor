# Arena Survivor ⚔

> *"En un mundo donde la arena misma respira, solo los que bailan con la muerte vuelven a ver el amanecer."*

## 📖 Historia

Hace mil años, el **Coliseo Eterno** fue sellado por los antiguos dioses. Dentro de sus muros encerraron a las criaturas más abominables de la creación — reyes demonio, cíclopes, dragones, necromantes, titanes y brujas de la noche.

Pero el sello se está rompiendo. Las fisuras en la realidad comienzan a abrirse, y las criaturas emergen una vez más.

Vos sos un guerrero sin nombre, despertado por el temblor de la arena. No hay salida. No hay tregua. Solo el brillo de tu ataque y la promesa de un próximo jefe cada vez más fuerte.

**Bienvenido a la Arena.** Sobreviví. Mejorá. Y cuando caigas, que tu puntuación sea leyenda.

## 🎮 Cómo se juega

Sobreviví oleadas interminables de enemigos mientras mejorás a tu personaje. Cada enemigo que derrotás suelta orbes de XP. Juntalos para subir de nivel y elegí mejoras que transforman tu build.

| Tecla | Acción |
|-------|--------|
| **WASD** / Flechas | Movimiento |
| **SHIFT** | Sprint (consume aguante) |

En **tablet** aparecen controles táctiles automáticamente:

| Control | Acción |
|---------|--------|
| **Joystick** (abajo derecha) | Movimiento direccional |
| **Botón CORRER** (abajo izquierda) | Sprint |

## ⚡ Características

- **Ataque automático** — apuntás al enemigo más cercano automáticamente
- **Sistema de sprint** — corré con aguante limitado que se regenera
- **3 tipos de enemigos** — normales, pesados (más vida) y rápidos
- **Jefes épicos** — cada tantas mejoras aparece un jefe: Rey Demonio, Cíclope, Dragón, Necromante, Titán, Bruja
- **Sistema de mejoras** — al subir nivel elegí entre 3 mejoras al azar: daño, vida, velocidad, proyectiles múltiples, perforación, alcance, regen, sprint
- **Enemigos furiosos** — si un enemigo vive mucho tiempo se vuelve más fuerte (se vuelve violeta)
- **Dificultad progresiva** — más enemigos, más vida, más oleadas con el tiempo
- **XP bar, stamina bar, vida, puntuación y tiempo** visibles en pantalla
- **Controles táctiles para tablet** — joystick virtual + botón de sprint

## 🚀 Cómo levantar el proyecto

```bash
# Opción 1 — Python
python -m http.server 8080

# Opción 2 — Node
npx live-server --port=8080 --no-browser

# Opción 3 — VS Code Live Server
```

Abrí [`http://localhost:8080`](http://localhost:8080) y jugá.

## 🛠 Tech Stack

HTML5 Canvas · CSS vanilla · JavaScript puro — cero dependencias.

## 🌐 Deploy

El proyecto está deployado en Vercel: [`arena-survivor`](https://arena-survivor.vercel.app)

## 📁 Estructura

| Archivo | Descripción |
|---------|-------------|
| `juego.html` | Juego completo (HTML+CSS+JS en un solo archivo) |
| `landing.html` | Landing page del producto Nova |
| `landing.op` | Diseño original en Penpot |
| `vercel.json` | Config de deploy para Vercel |
