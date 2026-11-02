
<script>
  import favicon from '#lib/assets/favicon.svg';
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Crossword', path: '/game' },
    { name: '2048', path: '/2048' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href={resolve('/css/shared.css')} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<header>
  <nav aria-label="Main navigation">
    <div class="brand">Hang Liu's Arcade</div>

    <ul>
      {#each links as link (link.path)}
        <li>
          <a
            href={resolve(link.path)}
            aria-current={page.url.pathname === resolve(link.path) ? 'page' : undefined}
            class:active={page.url.pathname === resolve(link.path)}
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<div id="main-content">
  {@render children()}
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f8fafc;
    color: #172033;
  }

  header {
    background: #172033;
    color: white;
  }

  nav {
    max-width: 1100px;
    margin: auto;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .brand {
    font-size: 1.3rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 6px;
  }

  a:hover,
  a.active {
    background: #365c9a;
  }

  a:focus-visible {
    outline: 3px solid #ffcc66;
    outline-offset: 3px;
  }

  .skip-link {
    position: absolute;
    top: -100px;
    left: 12px;
    background: white;
    color: black;
    z-index: 10;
  }

  .skip-link:focus {
    top: 12px;
  }

  @media (max-width: 600px) {
    nav {
      justify-content: center;
    }

    ul {
      justify-content: center;
    }
  }
</style>
