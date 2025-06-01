# Minimum Blockchain Implementation

This project creates a minimal blockchain in JavaScript.

## Block Structure
Every `Block` includes:
- `index`: Chain position (e.g., 1 for genesis block).
- `timeStamp`: Time of creation (e.g., '02/12/24').
- `data`: Random payload (e.g., `{ amount: 4 }`).
- `prevHash`: Hash of previous block.
- `nonce`: Proof-of-work counter.
- `hash`: SHA-256 hash of `index + timeStamp + prevHash + JSON.stringify(data) + nonce`.

The `calculateHash` function employs the `crypto-js` SHA256 library to calculate the hash.

## Validation Logic
The `isChainValid` function:
1. Verifies that every block's `prevHash` is equal to the previous block's `hash`.
2. Checks that every block's `hash` is the same as its recalculated hash (`calculateHash`).
Returns `true` if both are successful, `false` otherwise if tampering is noticed.

## Proof-of-Work
The `mineBlock(difficulty)` function increments `nonce` until the block's hash begins with `difficulty` zeros (e.g. "00" for difficulty 2). This mimics computational effort for block generation.



