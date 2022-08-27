function knightMoves(crrPosition, endPosition) {
    let queue = []
    queue.push(Node(null, crrPosition))

    //Offsets for knight moves
    let knightMoves = [[-1, +2], [+1, +2],
    [-2, +1], [+2, +1],
    [-2, -1], [+2, -1],
    [-1, -2], [+1, -2]]

    //Enqueueing and dequeueing infinitely until Current Node matches target position
    while (queue.length) {
        let crrNode = queue.shift()
        if (crrNode.crrNodeData.join() == endPosition.join()) {
            displayPath(crrNode)
            break;
        }
        //Splitting current node on all possible moves
        knightMoves.forEach(offset => {
            queue.push(Node(crrNode, [crrNode.crrNodeData[0] + offset[0], crrNode.crrNodeData[1] + offset[1]]))

        })

    }
}
//Node for linked list containing pointer to parent node 
function Node(parentNode, crrNodeData) {
    return { parentNode, crrNodeData }
}
//Display path and turns of given node
function displayPath(node, turns = 0) {
    if (!node.parentNode) {
        console.log(`\n => You made it in ${turns} moves!  Here's your path:`)
        process.stdout.write(`[${node.crrNodeData.join()}] -> `)
        return
    }
    displayPath(node.parentNode, turns + 1)
    process.stdout.write(`[${node.crrNodeData.join()}] -> `)
}
knightMoves([3, 3], [4, 3])
knightMoves([3, 3], [0, 0])
knightMoves([0, 0], [1, 2])