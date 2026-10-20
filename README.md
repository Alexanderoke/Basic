# To-Do List

A simple to-do list that runs in your browser. Tasks are saved in the browser's
local storage, so they remain available when you return to the page on the same
browser and device.

## Features

- Add tasks using the **Add** button or by pressing **Enter**.
- Click a task to mark it complete or active.
- Double-click a task to edit it. Press **Enter** or click away to save, or press
  **Escape** to cancel.
- Delete an individual task with its **×** button.
- Clear all completed tasks, or delete all tasks after confirming.
- See how many tasks remain.

## Run locally

No installation or build step is required. Open `index.html` in a modern web
browser to use the app.

## Project files

- `index.html` — page structure and controls.
- `style.css` — page and task-list styles.
- `script.js` — task behavior and local-storage persistence.

## Data storage

Tasks are stored in the browser's `localStorage` under the `tasks` key. They are
not synced between browsers or devices. Clearing the browser's site data will
remove saved tasks.
