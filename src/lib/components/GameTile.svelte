
<script>
  let { value = 0, index = 0 } = $props();

  const SIZE = 4;
</script>

<div
  class="tile"
  class:empty={value === 0}
  class:tile-2={value === 2}
  class:tile-4={value === 4}
  class:tile-8={value === 8}
  class:tile-16={value === 16}
  class:tile-32={value === 32}
  class:tile-64={value === 64}
  class:tile-128={value === 128}
  class:tile-256={value === 256}
  class:tile-512={value === 512}
  class:tile-1024={value === 1024}
  class:tile-2048={value >= 2048}
  aria-label={`Row ${Math.floor(index / SIZE) + 1}, column ${index % SIZE + 1}: ${value || 'empty'}`}
>
  {value || ''}
</div>

<style>
  .tile {
    aspect-ratio: 1;
    min-width: 0;
    border-radius: 7px;
    background: #eee4da;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(1rem, 4vw, 2rem);
    font-weight: 800;
    color: #776e65;
  }

  .empty {
    background: #cdc1b4;
  }

  .tile-2 {
    background: #eee4da;
  }

  .tile-4 {
    background: #ede0c8;
  }

  .tile-8 {
    background: #f2b179;
  }

  .tile-16 {
    background: #f59563;
  }

  .tile-32 {
    background: #f67c5f;
  }

  .tile-64 {
    background: #f65e3b;
  }

  .tile-128 {
    background: #edcf72;
  }

  .tile-256 {
    background: #edcc61;
  }

  .tile-512 {
    background: #edc850;
  }

  .tile-1024 {
    background: #edc53f;
  }

  .tile-2048 {
    background: #edc22e;
  }

  .tile-8,
  .tile-16,
  .tile-32,
  .tile-64,
  .tile-128,
  .tile-256,
  .tile-512,
  .tile-1024,
  .tile-2048 {
    color: white;
  }

  @media (max-width: 480px) {
    .tile {
      font-size: clamp(1rem, 5vw, 1.6rem);
    }
  }
</style>
