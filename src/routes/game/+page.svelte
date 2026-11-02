
<script>
  // 5x5 crossword puzzle
  // # represents a black square.
  const solution = [
    ['C', 'A', 'T', '#', '#'],
    ['A', '#', 'O', '#', '#'],
    ['R', 'A', 'P', '#', '#'],
    ['#', '#', '#', '#', '#'],
    ['S', 'U', 'N', '#', '#']
  ];

  const SIZE = 5;

  const numbers = {
    '0-0': 1,
    '0-2': 2,
    '1-0': 3,
    '2-0': 4,
    '4-0': 5
  };

  const across = [
    { number: 1, clue: 'A common pet that says meow (3)' },
    { number: 4, clue: 'A type of music with rhythmic rhymes (3)' },
    { number: 5, clue: 'The star at the center of our solar system (3)' }
  ];

  const down = [
    { number: 1, clue: 'A vehicle with four wheels (3)' },
    { number: 2, clue: 'The highest position or point (3)' }
  ];

  let answers = $state(
    Array.from({ length: SIZE }, () => Array(SIZE).fill(''))
  );

  let checked = $state(false);
  let revealed = $state(false);
  let message = $state('');

  function updateCell(row, col, value) {
    if (revealed) return;

    const letter = value.toUpperCase().replace(/[^A-Z]/g, '').slice(-1);

    answers[row][col] = letter;
    checked = false;
    message = '';
  }

  function checkAnswers() {
    checked = true;

    let correct = 0;
    let total = 0;

    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (solution[row][col] === '#') continue;

        total++;

        if (answers[row][col] === solution[row][col]) {
          correct++;
        }
      }
    }

    if (correct === total) {
      message = 'Congratulations! You solved the crossword!';
    } else {
      message = `You got ${correct} out of ${total} letters correct. Keep trying!`;
    }
  }

  function revealAnswers() {
    answers = solution.map((row) =>
      row.map((letter) => letter === '#' ? '' : letter)
    );

    revealed = true;
    checked = false;
    message = 'Answers revealed!';
  }

  function resetPuzzle() {
    answers = Array.from(
      { length: SIZE },
      () => Array(SIZE).fill('')
    );

    checked = false;
    revealed = false;
    message = '';
  }

  function handleKeydown(event, row, col) {
    const key = event.key;

    const directions = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1]
    };

    if (directions[key]) {
      event.preventDefault();

      const [dr, dc] = directions[key];
      let nextRow = row + dr;
      let nextCol = col + dc;

      while (
        nextRow >= 0 &&
        nextRow < SIZE &&
        nextCol >= 0 &&
        nextCol < SIZE
      ) {
        if (solution[nextRow][nextCol] !== '#') {
          document.getElementById(
            `cell-${nextRow}-${nextCol}`
          )?.focus();
          break;
        }

        nextRow += dr;
        nextCol += dc;
      }
    }

    if (key === 'Backspace') {
      answers[row][col] = '';
      checked = false;
      message = '';
    }
  }
</script>

<svelte:head>
  <title>Crossword | Hang Liu's Arcade</title>
  <meta
    name="description"
    content="Play the mini crossword puzzle in Hang Liu's Arcade."
  />
</svelte:head>

<main id="main-content" class="crossword-page">
  <div class="container">
    <p class="eyebrow">THE ARCADE</p>
    <h1>Mini Crossword</h1>

    <p class="description">
      Solve the clues and fill in the crossword puzzle.
    </p>

    <div class="game-layout">
      <section class="puzzle-section" aria-label="Crossword puzzle">
        <div class="board">
          {#each solution as row, rowIndex}
            {#each row as letter, colIndex}
              {#if letter === '#'}
                <div class="cell black" aria-label="Black square"></div>
              {:else}
                <div
                  class="cell playable"
                  class:correct={checked && answers[rowIndex][colIndex] === letter}
                  class:incorrect={checked && answers[rowIndex][colIndex] !== letter}
                >
                  {#if numbers[`${rowIndex}-${colIndex}`]}
                    <span class="number">
                      {numbers[`${rowIndex}-${colIndex}`]}
                    </span>
                  {/if}

                  <input
                    id={`cell-${rowIndex}-${colIndex}`}
                    type="text"
                    maxlength="1"
                    value={answers[rowIndex][colIndex]}
                    disabled={revealed}
                    aria-label={`Row ${rowIndex + 1}, column ${colIndex + 1}`}
                    oninput={(event) =>
                      updateCell(
                        rowIndex,
                        colIndex,
                        event.currentTarget.value
                      )}
                    onkeydown={(event) =>
                      handleKeydown(event, rowIndex, colIndex)}
                  />
                </div>
              {/if}
            {/each}
          {/each}
        </div>

        <div class="buttons">
          <button class="primary" onclick={checkAnswers}>
            Check Answers
          </button>

          <button onclick={revealAnswers}>
            Reveal Answers
          </button>

          <button onclick={resetPuzzle}>
            Reset Puzzle
          </button>
        </div>

        {#if message}
          <p class="message" role="status">{message}</p>
        {/if}
      </section>

      <aside class="clues">
        <section class="clue-card">
          <h2>Across</h2>

          <ol>
            {#each across as clue}
              <li>
                <strong>{clue.number}.</strong>
                {clue.clue}
              </li>
            {/each}
          </ol>
        </section>

        <section class="clue-card">
          <h2>Down</h2>

          <ol>
            {#each down as clue}
              <li>
                <strong>{clue.number}.</strong>
                {clue.clue}
              </li>
            {/each}
          </ol>
        </section>
      </aside>
    </div>

    <p class="instructions">
      Tip: Click a square and type a letter.
      Use arrow keys to move between squares.
    </p>
  </div>
</main>

<style>
  .crossword-page {
    min-height: 80vh;
    padding: 60px 20px;
    background: #f7f9fc;
    color: #172033;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .eyebrow {
    color: #315be8;
    font-weight: 800;
    letter-spacing: 0.15em;
    font-size: 0.8rem;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin: 12px 0;
  }

  .description {
    color: #53627d;
    margin-bottom: 40px;
  }

  .game-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 45px;
    align-items: start;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 3px;
    background: #172033;
    padding: 5px;
    border-radius: 8px;
    max-width: 430px;
  }

  .cell {
    position: relative;
    aspect-ratio: 1;
    min-width: 0;
  }

  .black {
    background: #172033;
  }

  .playable {
    background: white;
  }

  .number {
    position: absolute;
    top: 3px;
    left: 5px;
    font-size: 0.7rem;
    font-weight: 700;
    z-index: 1;
    pointer-events: none;
  }

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    background: transparent;
    text-align: center;
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-weight: 800;
    text-transform: uppercase;
    color: #172033;
  }

  input:focus-visible {
    outline: 3px solid #315be8;
    outline-offset: -3px;
    background: #eef2ff;
  }

  .correct {
    background: #dcfce7;
  }

  .incorrect {
    background: #fee2e2;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 25px;
  }

  button {
    padding: 12px 18px;
    border: 1px solid #315be8;
    border-radius: 8px;
    background: white;
    color: #315be8;
    font-weight: 700;
    cursor: pointer;
  }

  button.primary {
    background: #315be8;
    color: white;
  }

  button:hover {
    background: #e8edff;
  }

  button.primary:hover {
    background: #2347c5;
  }

  button:focus-visible {
    outline: 3px solid #172033;
    outline-offset: 3px;
  }

  .clues {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .clue-card {
    padding: 25px;
    background: white;
    border: 1px solid #e0e7f2;
    border-radius: 12px;
  }

  .clue-card h2 {
    margin: 0 0 18px;
    font-size: 1.5rem;
  }

  .clue-card ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .clue-card li {
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .clue-card strong {
    margin-right: 8px;
  }

  .message {
    margin-top: 20px;
    font-weight: 700;
    color: #315be8;
  }

  .instructions {
    margin-top: 35px;
    color: #53627d;
  }

  @media (max-width: 750px) {
    .game-layout {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .crossword-page {
      padding: 30px 15px;
    }

    .board {
      width: 100%;
    }
  }
</style>
