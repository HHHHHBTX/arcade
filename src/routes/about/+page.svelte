
<svelte:head>
  <title>About | Hang Liu's Arcade</title>
  <meta
    name="description"
    content="Education, experience, and interests of Hang Liu."
  />
</svelte:head>

<div class="about-page">
  <header>
    <p class="eyebrow">About</p>
    <h1>Hang Liu</h1>
    <p class="lede">
      Computer science graduate and M.S. Artificial Intelligence
      student interested in building useful, understandable software.
    </p>
  </header>

  <section class="section" aria-labelledby="education">
    <h2 id="education">Education</h2>
    <div class="timeline">
      <article>
        <h3>Northeastern University</h3>
        <p><strong>M.S. in Artificial Intelligence</strong> · Seattle</p>
        <h4>Graduate focus</h4>
        <p>
          Artificial intelligence, computational methods, and software
          systems, alongside practical web development.
        </p>
        <h5>Current web-development work</h5>
        <p>
          Building this arcade in CS5610, starting with semantic HTML
          and responsive CSS and expanding into SvelteKit.
        </p>
        <h6>Foundation used here</h6>
        <p>
          Accessibility, responsive layout, maintainable styling,
          and clear information architecture.
        </p>
      </article>

      <article>
        <h3>Miami University</h3>
        <p><strong>B.S. in Computer Science</strong> · Completed 2025</p>
      </article>
    </div>
  </section>

  <section class="section" aria-labelledby="experience">
    <h2 id="experience">Projects &amp; experience</h2>
    <div class="timeline">
      <article>
        <h3>The Arcade — Web Development</h3>
        <p>
          Building a responsive and accessible browser-game collection
          for CS5610. The project began with semantic HTML and
          handcrafted CSS and is now expanding with SvelteKit and
          reusable components.
        </p>
      </article>

      <article>
        <h3>Computational &amp; AI coursework</h3>
        <p>
          Graduate coursework focused on artificial intelligence,
          computational methods, software systems, and communicating
          technical ideas through practical projects.
        </p>
      </article>
    </div>
  </section>

  <section class="section" aria-labelledby="skills">
    <h2 id="skills">Skills &amp; interests</h2>
    <ul class="tag-list">
      <li>Computer Science</li>
      <li>Artificial Intelligence</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Responsive Design</li>
      <li>Accessibility</li>
    </ul>
  </section>
</div>

<style>
  .about-page {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
  }

  .about-page > header {
    margin-bottom: 2rem;
  }
</style>
