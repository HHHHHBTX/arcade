
<script>
  let { score = 0, bestScore = 0 } = $props();
</script>

<div class="score-row">
  <div class="score-box">
    <span>Score</span>
    <strong>{score}</strong>
  </div>

  <div class="score-box">
    <span>Best</span>
    <strong>{bestScore}</strong>
  </div>
</div>

<style>
  .score-row {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
  }

  .score-box {
    background: #bbada0;
    color: white;
    padding: 10px 24px;
    border-radius: 8px;
    min-width: 105px;
    display: flex;
    flex-direction: column;
  }

  .score-box span {
    font-size: 0.85rem;
    font-weight: 700;
  }

  .score-box strong {
    font-size: 1.6rem;
  }
</style>
