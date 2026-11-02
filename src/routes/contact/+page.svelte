
<svelte:head>
  <title>Contact | Hang Liu's Arcade</title>
  <meta
    name="description"
    content="Contact Hang Liu through email, GitHub, or LinkedIn."
  />
</svelte:head>

<main>
  <p class="eyebrow">CONTACT</p>
  <h1>Get in Touch</h1>

  <p class="intro">
    Have a question or want to connect?
    Feel free to reach out through the links below.
  </p>

  <section aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact Information</h2>

    <div class="contact-card">
      <h3>Email</h3>
      <p>
        <a href="mailto:liu.h9@northeastern.edu">
          liu.h9@northeastern.edu
        </a>
      </p>

      <h3>GitHub</h3>
      <p>
        <a
          href="https://github.com/HHHHHBTX"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </p>

      <h3>LinkedIn</h3>
      <p>
        <a
          href="https://www.linkedin.com/in/james-liu-liuh74/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my LinkedIn
        </a>
      </p>
    </div>
  </section>
</main>

<style>
  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 24px;
    color: #172033;
  }

  .eyebrow {
    color: #3156d3;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.15em;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin: 16px 0 24px;
  }

  .intro {
    color: #52627e;
    font-size: 1.15rem;
    line-height: 1.8;
    max-width: 650px;
  }

  section {
    margin-top: 55px;
  }

  h2 {
    font-size: 1.8rem;
  }

  .contact-card {
    background: white;
    border: 1px solid #dce3f0;
    border-radius: 14px;
    padding: 28px;
    margin-top: 20px;
  }

  h3 {
    margin: 20px 0 8px;
  }

  a {
    color: #3156d3;
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus-visible {
    outline: 3px solid #3156d3;
    outline-offset: 4px;
    border-radius: 2px;
  }
</style>
