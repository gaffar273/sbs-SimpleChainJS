const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, timeStamp, data, prevHash = '') {
        this.index = index
        this.timeStamp = timeStamp
        this.data = data
        this.prevHash = prevHash
        this.nonce = 0
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return SHA256(this.index + this.timeStamp + this.prevHash + JSON.stringify(this.data) + this.nonce).toString()
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log("Block mined with hash: " + this.hash)
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 2  // <-- make this smaller for faster testing
    }

    createGenesisBlock() {
        return new Block(1, '02/12/24', 'Genesis Block', '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const prevBlock = this.chain[i - 1]
            const currentBlock = this.chain[i]

            if (prevBlock.hash !== currentBlock.prevHash) return false
            if (currentBlock.hash !== currentBlock.calculateHash()) return false
        }
        return true
    }
}
module.exports={Block,BlockChain}

