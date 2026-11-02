
<script>
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>Hang Liu | The Arcade</title>
  <meta
    name="description"
    content="Hang Liu's web development arcade and professional portfolio."
  />
</svelte:head>

<section class="hero">
  <div>
    <p class="eyebrow">CS5610 · Web Development</p>
    <h1>Small games. Thoughtful web design.</h1>
    <p class="lede">
      Welcome to my growing arcade: a semester-long project where
      I am building accessible web experiences from the fundamentals up.
    </p>
    <div class="actions">
      <a class="button" href={resolve('/game')}>
        Play the mini crossword
      </a>
      <a class="button secondary" href={resolve('/2048')}>
        Play 2048
      </a>
      <a class="button secondary" href={resolve('/about')}>
        About me
      </a>
    </div>
  </div>

  <div class="hero-mark">
    <img
      src={resolve('/assets/arcade.svg')}
      alt="A five-by-five arcade puzzle grid logo"
    />
  </div>
</section>

<section class="section" aria-labelledby="build-heading">
  <h2 id="build-heading">What I'm building</h2>
  <div class="cards">
    <article class="card">
      <h3>Accessible by default</h3>
      <p>
        Keyboard navigation, visible focus states, semantic markup,
        and readable contrast are part of the design rather than afterthoughts.
      </p>
    </article>
    <article class="card">
      <h3>Built from fundamentals</h3>
      <p>
        This arcade started with HTML and CSS and is now expanding
        with SvelteKit and reusable components.
      </p>
    </article>
    <article class="card">
      <h3>Designed to grow</h3>
      <p>
        The visual system uses reusable color, type, and spacing
        tokens so the arcade can expand without losing consistency.
      </p>
    </article>
  </div>
</section>
