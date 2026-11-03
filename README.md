# Hang Liu's Arcade — CS5610 Project 2

A collection of interactive browser games built with SvelteKit and Svelte 5 for Northeastern University's CS5610 Web Development course.

## Live Website

https://arcade-hhhhhbtx.vercel.app/

## GitHub Repositories

- SvelteKit Application: https://github.com/HHHHHBTX/arcade
- JavaScript Game Library: https://github.com/HHHHHBTX/arcade-core

## Features

The Arcade includes:

- **2048 Game:** Move and merge numbered tiles to reach 2048.
- **Crossword:** A mini crossword puzzle carried over from Project 1.
- **Home:** A redesigned landing page featuring both games.
- **About:** Information about the project and its creator.
- **Contact:** Contact information and links.

## Svelte 5 Implementation

This project uses SvelteKit and Svelte 5, including:

- `$state` for reactive game state.
- `$derived` for computed values.
- `$props` for component properties.
- Reusable Svelte components, including `GameTile`, `GameControls`, and `ScoreBoard`.
- Shared reactive state in `src/lib/gameState.svelte.js`.
- Keyed each blocks and event callback props.
- Scoped component styling and responsive layouts.
- CSS transitions and interactive visual feedback.

## Published JavaScript Package

The 2048 game logic is maintained in a separate, reusable JavaScript package:

**Package:** `@hhhhhbtx/arcade-core`

**npm:** https://www.npmjs.com/package/@hhhhhbtx/arcade-core

The package provides four pure JavaScript functions:

- `move(board, direction)` — moves and merges tiles.
- `spawn(board, rng)` — adds a new tile to an available position.
- `canMove(board, direction)` — checks whether a move is valid.
- `hasMoves(board)` — checks whether any moves remain.

The package contains an internal merge helper named `fuseQuartz`, which handles combining matching tile values during a move.

The library is independent of Svelte and browser DOM APIs and includes automated tests.

Published versions include `1.0.0` and `1.0.1`.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Accessibility and Responsive Design

The application includes semantic HTML, keyboard-accessible navigation, visible focus states, responsive layouts, and controls designed for different screen sizes.

## Deployment

The SvelteKit application is deployed using Vercel.

## Author

Hang Liu
CS5610 — Web Development
Northeastern University