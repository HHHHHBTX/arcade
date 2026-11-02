
<script>
  // Svelte 5 callback prop
  let { onMove } = $props();
</script>

<div
  class="mobile-controls"
  role="group"
  aria-label="Game controls"
>
  <button
    onclick={() => onMove('up')}
    aria-label="Move up"
  >
    ↑
  </button>

  <div class="control-row">
    <button
      onclick={() => onMove('left')}
      aria-label="Move left"
    >
      ←
    </button>

    <button
      onclick={() => onMove('down')}
      aria-label="Move down"
    >
      ↓
    </button>

    <button
      onclick={() => onMove('right')}
      aria-label="Move right"
    >
      →
    </button>
  </div>
</div>

<style>
  .mobile-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
  }

  .control-row {
    display: flex;
    gap: 8px;
  }

  button {
    width: 55px;
    height: 48px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: white;
    color: #172033;
    font-size: 1.5rem;
    cursor: pointer;
  }

  button:hover {
    background: #e2e8f0;
  }

  button:focus-visible {
    outline: 3px solid #172033;
    outline-offset: 4px;
  }
</style>
