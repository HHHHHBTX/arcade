
export const gameState = $state({
  gamesStarted: 0
});

export function recordNewGame() {
  gameState.gamesStarted += 1;
}
