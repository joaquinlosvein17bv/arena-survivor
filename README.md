# Arena Survivor 🎮

Juego de supervivencia en canvas HTML5 + landing page **Nova**.

## ¿Qué hay acá?

| Archivo | Qué es |
|---------|--------|
| `juego.html` | Arena Survivor — juego en canvas con HTML/CSS/JS vanilla |
| `landing.html` | Nova — landing page de producto tech |
| `landing.op` | Diseño original (Penpot) de la landing |

## Cómo levantar el proyecto

Es 100% estático — no necesita build, solo un servidor HTTP local.

### Opción A — Python (viene instalado en casi todos lados)

```bash
python -m http.server 8080
# → http://localhost:8080
```

### Opción B — Node / npx live-server

```bash
npx live-server --port=8080 --no-browser
# → http://localhost:8080
```

### Opción C — VS Code Live Server

Instalá el plugin **Live Server**, hacé clic derecho en cualquier `.html` y elegí *Open with Live Server*.

## Tech Stack

- HTML5 Canvas (juego)
- CSS vanilla + diseño responsive
- Sin frameworks, sin dependencias, sin build step
