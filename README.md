## Minimal Blockchain Implementation

This project implements a simple blockchain in JavaScript.

## Block Structure
Each `Block` contains:
- `index`: Position in the chain (e.g., 1 for genesis block).
- `timeStamp`: Creation time (e.g., '02/12/24').
- `data`: Arbitrary payload (e.g., `{ amount: 4 }`).
- `prevHash`: Hash of the previous block.
- `nonce`: Counter for proof-of-work.
- `hash`: SHA-256 hash of `index + timeStamp + prevHash + JSON.stringify(data) + nonce`.

The `calculateHash` method uses the `crypto-js` SHA256 library to compute the hash.

## Validation Logic
The `isChainValid` method:
1. Checks if each block’s `prevHash` matches the previous block’s `hash`.
2. Verifies each block’s `hash` equals its recalculated hash (`calculateHash`).
Returns `true` if both checks pass, `false` if tampering is detected.

## Proof-of-Work
The `mineBlock(difficulty)` method increments `nonce` until the block’s hash starts with `difficulty` zeros (e.g. "00" for difficulty 2). This simulates computational work for block creation.



