# DID Verification Workflow

TrustChain uses decentralized identity concepts inspired by Hyperledger Indy to validate buyers and sellers before allowing feedback submission.

## Workflow

1. User registers on the platform.
2. System generates decentralized identity credentials.
3. Buyer identity is verified using verifiable credentials.
4. Purchase transaction generates a feedback token.
5. Feedback submission is allowed only for verified users.
6. Smart contracts validate token legitimacy.
7. Reputation score is updated immutably on blockchain.

## Security Goals

- Prevent fake reviews
- Prevent identity fraud
- Reduce Sybil attacks
- Enable privacy-preserving verification
- Support trusted e-commerce reputation systems
