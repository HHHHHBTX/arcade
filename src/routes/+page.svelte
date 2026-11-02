
<script>
  import { resolve } from '$app/paths';

  const games = [
    {
      number: '01',
      title: '2048',
      category: 'NUMBER PUZZLE',
      description:
        'Slide the tiles, combine matching numbers, and work your way to 2048.',
      href: '/2048',
      button: 'Play 2048',
      theme: 'numbers'
    },
    {
      number: '02',
      title: 'Crossword',
      category: 'WORD PUZZLE',
      description:
        'Test your vocabulary and solve a mini crossword, one clue at a time.',
      href: '/game',
      button: 'Play Crossword',
      theme: 'words'
    }
  ];
</script>

<svelte:head>
  <title>Hang Liu | The Arcade</title>
  <meta
    name="description"
    content="Play 2048 and Crossword in Hang Liu's interactive SvelteKit arcade."
  />
</svelte:head>

<main id="main-content" class="home-page">

  <!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-content">
      <div class="eyebrow">
        <span class="status-dot"></span>
        CS5610 · WEB DEVELOPMENT
      </div>

      <h1>
        Your next
        <span>favorite game</span>
        starts here.
      </h1>

      <p class="hero-description">
        Welcome to Hang's Arcade — a collection of
        small games built with thoughtful design,
        modern web technology, and a love for puzzles.
      </p>

      <div class="hero-actions">
        <a class="primary-button" href="#games">
          Explore Games
          <span aria-hidden="true">→</span>
        </a>

        <a class="outline-button" href={resolve('/about')}>
          About the Creator
        </a>
      </div>

      <div class="hero-details">
        <span>✦ 2 PLAYABLE GAMES</span>
        <span>✦ BUILT WITH SVELTEKIT</span>
        <span>✦ FREE TO PLAY</span>
      </div>
    </div>

    <!-- DECORATIVE 2048 PREVIEW -->
    <div class="hero-visual" aria-hidden="true">
      <div class="visual-glow"></div>

      <div class="floating-label">
        <span class="live-dot"></span>
        READY TO PLAY
      </div>

      <div class="preview-board">
        {#each [2, 4, 0, 8, 0, 8, 16, 0, 4, 0, 32, 2, 0, 64, 0, 128] as tile, index (index)}
          <div
            class:empty={tile === 0}
            class="preview-tile"
            data-value={tile}
          >
            {tile || ''}
          </div>
        {/each}
      </div>

      <div class="visual-caption">
        <span>2048</span>
        <span>THE CLASSIC NUMBER GAME ↗</span>
      </div>
    </div>
  </section>

  <!-- GAMES SECTION -->
  <section class="games-section" id="games">
    <div class="section-header">
      <div>
        <p class="section-eyebrow">CHOOSE YOUR CHALLENGE</p>
        <h2>Pick a game<span class="blue-dot">.</span></h2>
        <p class="section-description">
          Two different puzzles. One place to play.
        </p>
      </div>

      <span class="game-count">02 GAMES AVAILABLE</span>
    </div>

    <div class="games-grid">
      {#each games as game (game.number)}
        <article class="game-card">
          <div class="card-art" class:word-art={game.theme === 'words'}>

            <div class="art-top">
              <span>{game.category}</span>
              <span>{game.number} / 02</span>
            </div>

            {#if game.theme === 'numbers'}
              <div class="mini-2048" aria-hidden="true">
                {#each [2, 4, 8, 16, 4, 8, 16, 32, 8, 16, 32, 64, 16, 32, 64, 128] as value, index (index)}
                  <div class="mini-number" data-value={value}>
                    {value}
                  </div>
                {/each}
              </div>
            {:else}
              <div class="crossword-preview" aria-hidden="true">
                {#each [
                  'H', 'E', 'L', 'L', 'O',
                  'A', '', '', '', 'W',
                  'N', '', 'A', '', 'O',
                  'G', '', '', '', 'R',
                  'S', 'V', 'E', 'L', 'D'
                ] as letter, index (index)}
                  <div
                    class="crossword-cell"
                    class:dark={letter === ''}
                  >
                    {letter}
                  </div>
                {/each}
              </div>
            {/if}
          </div>

          <div class="card-content">
            <div class="card-heading">
              <h3>{game.title}</h3>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>

            <p>{game.description}</p>

            <a class="play-button" href={resolve(game.href)}>
              {game.button}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about-strip">
    <div>
      <p class="section-eyebrow">BEHIND THE ARCADE</p>
      <h2>Built for fun. Designed with purpose.</h2>
      <p>
        This arcade is part of my CS5610 web development journey.
        Every game is an opportunity to explore accessibility,
        reusable components, and better user experiences.
      </p>
    </div>

    <a href={resolve('/about')} class="about-link">
      More about this project
      <span aria-hidden="true">↗</span>
    </a>
  </section>

</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  .home-page {
    font-family: inherit;
    color: #172033;
    background: #f5f7fc;
  }

  /* HERO */

  .hero {
    min-height: 610px;
    padding: 95px max(6%, calc((100vw - 1180px) / 2));
    background:
      radial-gradient(
        circle at 80% 40%,
        rgba(59, 99, 246, 0.18),
        transparent 35%
      ),
      linear-gradient(135deg, #111a30, #192947);
    color: white;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 65px;
    align-items: center;
    box-sizing: border-box;
  }

  .hero-content {
    max-width: 620px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #a9bcff;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .status-dot,
  .live-dot {
    width: 8px;
    height: 8px;
    background: #59e1b2;
    border-radius: 50%;
    display: inline-block;
  }

  h1 {
    font-size: clamp(3rem, 5.3vw, 5.2rem);
    line-height: 1.12;
    letter-spacing: -2.5px;
    margin: 28px 0;
    font-weight: 850;
  }

  h1 span {
    display: block;
    color: #7294ff;
  }

  .hero-description {
    color: #b9c5dd;
    font-size: 17px;
    line-height: 1.85;
    max-width: 510px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 35px;
  }

  .primary-button,
  .outline-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 15px 23px;
    border-radius: 10px;
    font-weight: 750;
    text-decoration: none;
    transition: transform 0.2s, background 0.2s;
  }

  .primary-button {
    background: #4169f5;
    color: white;
  }

  .primary-button:hover {
    background: #5a7eff;
    transform: translateY(-3px);
  }

  .outline-button {
    border: 1px solid #60708e;
    color: white;
  }

  .outline-button:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  .hero-details {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 55px;
    color: #94a8cb;
    font-size: 10px;
    font-weight: 750;
    letter-spacing: 1px;
  }

  /* HERO VISUAL */

  .hero-visual {
    position: relative;
    max-width: 430px;
    width: 100%;
    margin: 0 auto;
  }

  .visual-glow {
    position: absolute;
    inset: 15%;
    background: #315be8;
    filter: blur(90px);
    opacity: 0.3;
    pointer-events: none;
  }

  .floating-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #263755;
    border: 1px solid #405478;
    padding: 11px 17px;
    border-radius: 10px;
    margin-bottom: 18px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .preview-board {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    padding: 12px;
    border-radius: 16px;
    background: #bbada0;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
    transform: rotate(-3deg);
  }

  .preview-tile,
  .mini-number {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #eee4da;
    color: #776e65;
    font-size: clamp(15px, 2.3vw, 28px);
    font-weight: 850;
  }

  .preview-tile.empty {
    background: rgba(238, 228, 218, 0.35);
  }

  .preview-tile[data-value='4'],
  .mini-number[data-value='4'] {
    background: #ede0c8;
  }

  .preview-tile[data-value='8'],
  .mini-number[data-value='8'] {
    background: #f2b179;
    color: white;
  }

  .preview-tile[data-value='16'],
  .mini-number[data-value='16'] {
    background: #f59563;
    color: white;
  }

  .preview-tile[data-value='32'],
  .mini-number[data-value='32'] {
    background: #f67c5f;
    color: white;
  }

  .preview-tile[data-value='64'],
  .mini-number[data-value='64'] {
    background: #f65e3b;
    color: white;
  }

  .preview-tile[data-value='128'],
  .mini-number[data-value='128'] {
    background: #edcf72;
    color: white;
  }

  .visual-caption {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
    color: #aab8d1;
    font-size: 11px;
    font-weight: 750;
    letter-spacing: 1px;
  }

  .visual-caption span:first-child {
    color: white;
    font-size: 22px;
    font-weight: 850;
  }

  /* GAMES */

  .games-section {
    padding: 100px max(6%, calc((100vw - 1180px) / 2));
  }

  .section-header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
  }

  .section-eyebrow {
    color: #4169f5;
    font-size: 12px;
    font-weight: 850;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }

  .section-header h2 {
    font-size: clamp(2.3rem, 4vw, 3.3rem);
    margin: 0;
    letter-spacing: -1.5px;
  }

  .blue-dot {
    color: #4169f5;
  }

  .section-description {
    color: #68758c;
    font-size: 16px;
    margin-top: 12px;
  }

  .game-count {
    color: #8a96aa;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .games-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .game-card {
    background: white;
    border: 1px solid #e2e8f2;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 12px 35px rgba(20, 35, 65, 0.04);
    transition: transform 0.25s, box-shadow 0.25s;
  }

  .game-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(20, 35, 65, 0.12);
  }

  .card-art {
    min-height: 300px;
    padding: 22px;
    background: linear-gradient(135deg, #dbe7ff, #f1f5ff);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .word-art {
    background: linear-gradient(135deg, #d9f3ee, #edf9f5);
  }

  .art-top {
    display: flex;
    justify-content: space-between;
    color: #516b9d;
    font-size: 11px;
    font-weight: 850;
    letter-spacing: 1px;
  }

  .mini-2048 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    background: #bbada0;
    padding: 8px;
    border-radius: 12px;
    width: min(230px, 75%);
    margin: auto;
    box-shadow: 0 15px 30px rgba(20, 35, 65, 0.12);
    transform: rotate(-5deg);
  }

  .mini-number {
    border-radius: 5px;
    font-size: clamp(12px, 1.5vw, 20px);
  }

  .crossword-preview {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3px;
    background: #172033;
    padding: 7px;
    width: min(220px, 75%);
    margin: auto;
    border-radius: 7px;
    box-shadow: 0 15px 30px rgba(20, 35, 65, 0.12);
    transform: rotate(5deg);
  }

  .crossword-cell {
    aspect-ratio: 1;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(12px, 1.5vw, 19px);
    font-weight: 850;
    color: #172033;
  }

  .crossword-cell.dark {
    background: #172033;
  }

  .card-content {
    padding: 28px;
  }

  .card-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-heading h3 {
    font-size: 28px;
    margin: 0;
    color: #172033;
  }

  .card-arrow {
    font-size: 26px;
    color: #4169f5;
  }

  .card-content p {
    color: #68758c;
    line-height: 1.75;
    min-height: 58px;
    margin: 14px 0 24px;
  }

  .play-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #315be8;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 750;
    text-decoration: none;
    transition: background 0.2s;
  }

  .play-button:hover {
    background: #2347c5;
  }

  /* ABOUT */

  .about-strip {
    background: #eaf0fb;
    padding: 65px max(6%, calc((100vw - 1180px) / 2));
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .about-strip h2 {
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    margin: 0 0 16px;
  }

  .about-strip p:not(.section-eyebrow) {
    color: #68758c;
    max-width: 680px;
    line-height: 1.8;
  }

  .about-link {
    display: inline-flex;
    gap: 12px;
    align-items: center;
    color: #315be8;
    font-weight: 800;
    text-decoration: none;
    white-space: nowrap;
  }

  .about-link:hover {
    text-decoration: underline;
  }

  a:focus-visible {
    outline: 3px solid #7294ff;
    outline-offset: 5px;
  }

  /* RESPONSIVE */

  @media (max-width: 850px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 75px 6%;
      gap: 60px;
    }

    .hero-content {
      max-width: 100%;
    }

    .hero-visual {
      max-width: 340px;
    }

    .games-section {
      padding: 75px 6%;
    }

    .about-strip {
      padding: 55px 6%;
    }
  }

  @media (max-width: 600px) {
    .hero {
      padding: 65px 20px;
    }

    h1 {
      font-size: clamp(2.6rem, 11vw, 3.6rem);
      letter-spacing: -1.5px;
    }

    .hero-description {
      font-size: 15px;
    }

    .hero-details {
      gap: 12px;
      margin-top: 35px;
    }

    .games-section {
      padding: 65px 20px;
    }

    .games-grid {
      grid-template-columns: 1fr;
    }

    .section-header {
      align-items: start;
      flex-direction: column;
    }

    .card-art {
      min-height: 260px;
    }

    .about-strip {
      padding: 50px 20px;
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }

    .game-card,
    .primary-button,
    .outline-button {
      transition: none;
    }
  }
</style>
