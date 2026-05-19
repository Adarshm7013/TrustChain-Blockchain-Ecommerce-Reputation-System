# TrustChain: Blockchain Powered E-Commerce Reputation System

TrustChain is a blockchain-based e-commerce reputation framework designed to reduce fake reviews, identity fraud, feedback manipulation, and centralized control over seller reputation. The system uses permissioned blockchain concepts, decentralized identity, feedback tokens, discount tokens, smart contracts, and privacy-preserving verification.

## Problem Statement

Traditional e-commerce reputation systems are centralized and vulnerable to fake reviews, biased moderation, identity manipulation, and reputation inflation. TrustChain proposes a decentralized, tamper-resistant, and privacy-preserving reputation framework where only verified buyers can submit feedback and seller reputation is updated through transparent blockchain-backed logic.

## Objectives

- Design a decentralized architecture for buyer feedback and seller reputation.
- Use verifiable credentials to authenticate buyers and sellers.
- Issue feedback tokens only after verified purchases.
- Prevent fake reviews, Sybil attacks, ballot-stuffing, and identity-based manipulation.
- Store feedback and reputation trails immutably on blockchain.
- Incentivize honest feedback through discount tokens.
- Enable cross-platform seller reputation portability.
- Preserve user privacy using decentralized identity and Zero-Knowledge Proof concepts.

## Core Features

- Buyer and seller registration
- Verifiable credential-based identity validation
- Feedback token generation after purchase
- Blockchain-backed feedback verification
- Smart contract-based reputation update
- Discount token generation for verified feedback
- Immutable feedback and transaction ledger
- Admin monitoring dashboard
- Fraud-resistant reputation scoring model

## Technologies Used

- Hyperledger Fabric
- Hyperledger Indy
- Smart Contracts / Chaincode
- Java
- Java Swing / JavaFX
- Socket Programming
- MySQL
- Verifiable Credentials
- Decentralized Identifiers
- Zero-Knowledge Proof concepts
- Blockchain-based token validation

## System Architecture
### Architecture Diagram

![Architecture Diagram](architecture-diagram.png)

### Blockchain Server Page

![Blockchain Server Page](blockchain-server-page.png)

### Feedback Verification Flow

![Feedback Verification Flow](feedback-verification-flow.png)

### Product Purchase Page

![Product Purchase Page](product-purchase-page.png)

### Workflow Diagram

![Workflow Diagram](workflow-diagram.png)


TrustChain follows a layered architecture:

1. User Interface Layer  
   Buyer, seller, and admin interfaces for product listing, purchase, feedback, and monitoring.

2. Middleware / Backend Layer  
   Handles user logic, authentication, token validation, and communication with blockchain services.

3. Blockchain Layer  
   Hyperledger Fabric is used for reputation transactions, token storage, and immutable feedback recording.

4. Identity Layer  
   Hyperledger Indy concepts are used for decentralized identity, verifiable credentials, and privacy-preserving validation.

5. Smart Contract Layer  
   Automates feedback token validation, reputation calculation, and discount token generation.

## Workflow

1. Seller registers and receives a verified digital identity.
2. Buyer registers and completes identity verification.
3. Buyer purchases a product.
4. System generates a unique feedback token.
5. Buyer submits feedback using the valid feedback token.
6. Smart contract verifies the token and transaction.
7. Feedback is stored immutably on blockchain.
8. Seller reputation score is updated.
9. Buyer receives a discount token as an incentive.

## Security and Privacy

- Feedback tokens are single-use and transaction-linked.
- Discount tokens are issued only after verified feedback.
- Blockchain immutability prevents tampering.
- Verifiable credentials reduce identity fraud.
- Zero-Knowledge Proof concepts support privacy-preserving validation.
- Role-based access separates buyer, seller, and admin operations.

## Testing

The system was evaluated through:

- Unit testing
- Functional testing
- Integration testing
- Token validation testing
- Feedback submission testing
- Blockchain transaction testing
- User acceptance testing

## Results

The project demonstrated that blockchain-backed reputation systems can improve trust, transparency, and auditability in e-commerce environments. The system prevents unauthorized feedback, reduces fake review attacks, and supports verifiable seller reputation through immutable transaction records.

## Academic Context

This project was developed as a final-year Bachelor of Engineering project in Computer Science and Engineering under Visvesvaraya Technological University.

## Authors

- Adarsh M
- Princy Dey
- Shashank U
- Sinchana Nagesh

## Publication

Presented at the International Conference on Global Convergence in Technology, Entrepreneurship, Computing & Value Engineering
(ICGCP-2025), April 2025. 
A research publication was prepared based on this project, covering the system methodology, architecture, token-based feedback validation, decentralized identity model, and blockchain-backed reputation scoring.

## Disclaimer

This repository presents an academic prototype and documentation of the TrustChain project. Hyperledger Fabric and Hyperledger Indy are referenced as blockchain and decentralized identity frameworks supporting the proposed design.
