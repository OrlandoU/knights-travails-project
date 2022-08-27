function knightMoves(currentPosition, targetPosition, visited = {}, turns = 0) {
    if (currentPosition[0] < 0 || currentPosition[1] < 0 || currentPosition[0] > 7 || currentPosition[1] > 7) return 0
    if (currentPosition.join('') == targetPosition.join('')) return 1
    if (!visited[currentPosition.join('')]) {
        visited[currentPosition.join('')] = turns
    }
    else if (visited[currentPosition.join('')] < turns) {
        return 0
    }
    else {
        visited[currentPosition.join('')] = turns
    }
    let possibility1 = knightMoves([currentPosition[0] - 1, currentPosition[1] + 2], targetPosition, visited, turns++)
    let possibility2 = knightMoves([currentPosition[0] + 1, currentPosition[1] + 2], targetPosition, visited, turns++)
    let possibility3 = knightMoves([currentPosition[0] - 2, currentPosition[1] + 1], targetPosition, visited, turns++)
    let possibility4 = knightMoves([currentPosition[0] + 2, currentPosition[1] + 1], targetPosition, visited, turns++)
    let possibility5 = knightMoves([currentPosition[0] - 2, currentPosition[1] - 1], targetPosition, visited, turns++)
    let possibility6 = knightMoves([currentPosition[0] + 2, currentPosition[1] - 1], targetPosition, visited, turns++)
    let possibility7 = knightMoves([currentPosition[0] - 1, currentPosition[1] - 2], targetPosition, visited, turns++)
    let possibility8 = knightMoves([currentPosition[0] + 1, currentPosition[1] - 2], targetPosition, visited, turns++)
    return Math.min(possibility1, possibility2, possibility3, possibility4, possibility5, possibility6, possibility7, possibility8) + 1
}

console.log(knightMoves([3, 3], [0, 0]))
