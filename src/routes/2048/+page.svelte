
<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import ScoreBoard from '../../lib/components/ScoreBoard.svelte';
  import GameControls from '../../lib/components/GameControls.svelte';
  import GameTile from '../../lib/components/GameTile.svelte';

  import {
    gameState,
    recordNewGame
  } from '../../lib/gameState.svelte.js';

  import {
    move as coreMove,
    spawn as coreSpawn,
    hasMoves,
    canMove as coreCanMove
  } from '@hhhhhbtx/arcade-core';

  const SIZE = 4;

  let board = $state(Array(16).fill(0));
  let score = $state(0);
  let bestScore = $state(0);
  let gameOver = $state(false);
  let won = $state(false);

  let highestTile = $derived(Math.max(...board));

  /**
   * @param {number[]} flatBoard
   * @returns {number[][]}
   */
  function toMatrix(flatBoard) {
    return Array.from({ length: SIZE }, (_, row) =>
      flatBoard.slice(row * SIZE, (row + 1) * SIZE)
    );
  }

  /**
   * @param {number[][]} matrix
   * @returns {number[]}
   */
  function toFlat(matrix) {
    return matrix.flat();
  }

  function newGame() {
    recordNewGame();

    let next = Array.from(
      { length: SIZE },
      () => Array(SIZE).fill(0)
    );

    next = coreSpawn(next);
    next = coreSpawn(next);

    board = toFlat(next);
    score = 0;
    gameOver = false;
    won = false;
  }

  /**
   * Calculate the score gained from merged tiles.
   *
   * @param {number[][]} before
   * @param {number[][]} after
   * @returns {number}
   */
  function calculateGained(before, after) {
    let gained = 0;

    /** @type {Map<number, number>} */
    const beforeCounts = new Map();

    /** @type {Map<number, number>} */
    const afterCounts = new Map();

    for (const value of before.flat()) {
      if (value > 0) {
        beforeCounts.set(
          value,
          (beforeCounts.get(value) || 0) + 1
        );
      }
    }

    for (const value of after.flat()) {
      if (value > 0) {
        afterCounts.set(
          value,
          (afterCounts.get(value) || 0) + 1
        );
      }
    }

    const values = [
      ...new Set([
        ...beforeCounts.keys(),
        ...afterCounts.keys()
      ])
    ].sort((a, b) => a - b);

    let mergesFromPreviousValue = 0;

    for (const value of values) {
      const oldCount = beforeCounts.get(value) || 0;
      const newCount = afterCounts.get(value) || 0;

      const consumed = Math.max(
        0,
        oldCount + mergesFromPreviousValue - newCount
      );

      const merges = consumed / 2;

      gained += merges * value * 2;
      mergesFromPreviousValue = merges;
    }

    return gained;
  }

  /**
   * @param {'up' | 'down' | 'left' | 'right'} direction
   */
  function move(direction) {
    // The player can continue after reaching 2048.
    if (gameOver) return;

    const currentMatrix = toMatrix(board);

    // Invalid moves do not create a new tile.
    if (!coreCanMove(currentMatrix, direction)) {
      return;
    }

    const movedMatrix = coreMove(
      currentMatrix,
      direction
    );

    const gained = calculateGained(
      currentMatrix,
      movedMatrix
    );

    score += gained;

    if (score > bestScore) {
      bestScore = score;

      try {
        localStorage.setItem(
          'arcade-2048-best',
          String(bestScore)
        );
      } catch {
        // Storage may be unavailable.
      }
    }

    const updatedMatrix = coreSpawn(movedMatrix);

    board = toFlat(updatedMatrix);

    // Winning does not end the game.
    if (!won && board.some((value) => value >= 2048)) {
      won = true;
    }

    // Game over can occur after a win.
    if (!hasMoves(updatedMatrix)) {
      gameOver = true;
    }
  }

  /**
   * @param {KeyboardEvent} event
   */
  function handleKeydown(event) {
    /** @type {Record<string, 'up' | 'down' | 'left' | 'right'>} */
    const directions = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right'
    };

    const direction = directions[event.key];

    if (!direction) return;

    const target = event.target;

    if (
      target instanceof HTMLElement &&
      (
        target.isContentEditable ||
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(
          target.tagName
        )
      )
    ) {
      return;
    }

    event.preventDefault();
    move(direction);
  }

  onMount(() => {
    try {
      bestScore =
        Number(
          localStorage.getItem('arcade-2048-best')
        ) || 0;
    } catch {
      bestScore = 0;
    }

    newGame();
  });
</script>

<svelte:head>
  <title>2048 Game | Hang Liu's Arcade</title>
  <meta
    name="description"
    content="Play 2048 in Hang Liu's Arcade."
  />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<main id="main-content" class="game-page">
  <div class="game-container">

    <p class="eyebrow">THE ARCADE</p>

    <h1>2048 Game</h1>

    <p class="description">
      Join the numbers and reach the 2048 tile!
    </p>

    <ScoreBoard {score} {bestScore} />

    <!-- Announce score updates to screen readers. -->
    <p
      class="sr-only"
      aria-live="polite"
      aria-atomic="true"
    >
      Current score: {score}. Best score: {bestScore}.
    </p>

    <p class="highest-tile">
      Highest Tile:
      <strong>{highestTile}</strong>
    </p>

    <p class="games-started">
      Games Started:
      <strong>{gameState.gamesStarted}</strong>
    </p>

    <div
      class="board"
      role="group"
      aria-label="2048 game board"
    >
      {#each board as value, index (index)}
        <GameTile {value} {index} />
      {/each}
    </div>

    {#if gameOver}
      <div
        class="message"
        role="status"
        transition:fly={{ y: 20, duration: 350 }}
      >
        Game Over! Final score: {score}.
      </div>
    {:else if won}
      <div
        class="message success"
        role="status"
        transition:fly={{ y: 20, duration: 350 }}
      >
        You win! You reached 2048!
        Keep playing or start a new game.
      </div>
    {/if}

    <button
      class="new-game"
      onclick={newGame}
    >
      New Game
    </button>

    <p class="instructions">
      Use your arrow keys to move the tiles.
      Matching numbers merge into one!
    </p>

    <GameControls onMove={move} />

  </div>
</main>

<style>
  .game-page {
    min-height: 80vh;
    padding: 60px 20px;
    display: flex;
    justify-content: center;
    background: #f7f9fc;
  }

  .game-container {
    width: 100%;
    max-width: 520px;
    text-align: center;
  }

  .eyebrow {
    color: #315be8;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.15em;
  }

  h1 {
    margin: 12px 0;
    color: #172033;
    font-size: clamp(2.5rem, 7vw, 4rem);
  }

  .description {
    color: #53627d;
    margin-bottom: 25px;
  }

  .highest-tile {
    margin: 12px 0 8px;
    color: #53627d;
    font-size: 1rem;
    font-weight: 600;
  }

  .highest-tile strong {
    color: #315be8;
    font-weight: 800;
  }

  .games-started {
    margin: 0 0 20px;
    color: #53627d;
    font-size: 1rem;
    font-weight: 600;
  }

  .games-started strong {
    color: #315be8;
    font-weight: 800;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(
      4,
      minmax(0, 1fr)
    );
    gap: 10px;
    background: #bbada0;
    padding: 10px;
    border-radius: 12px;
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .new-game {
    margin-top: 25px;
    background: #315be8;
    color: white;
    border: none;
    padding: 13px 30px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .new-game:hover {
    background: #2347c5;
  }

  button:focus-visible {
    outline: 3px solid #172033;
    outline-offset: 4px;
  }

  .instructions {
    margin-top: 25px;
    color: #53627d;
    line-height: 1.7;
  }

  .message {
    margin-top: 20px;
    padding: 14px;
    border-radius: 8px;
    background: #fee2e2;
    color: #991b1b;
    font-weight: 800;
  }

  .success {
    background: #dcfce7;
    color: #166534;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 480px) {
    .game-page {
      padding: 30px 12px;
    }

    .board {
      gap: 7px;
      padding: 7px;
    }
  }
</style>
