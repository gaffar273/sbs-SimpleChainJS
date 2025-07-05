const { Block, BlockChain } = require('./blockChain')

let agsChain = new BlockChain()


console.log('Mining block 1...')
agsChain.addBlock(new Block(2, '03/02/25', { amount: 4 }))

console.log('Mining block 2...')
agsChain.addBlock(new Block(3, '01/12/25', { amount: 5 }))

console.log("Is Blockchain valid?", agsChain.isChainValid())
