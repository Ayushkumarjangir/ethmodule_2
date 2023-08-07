# Smart Contract and React Wallet App: Fund Management

## Smart Contract Overview

The Solidity smart contract manages funds and enables basic interaction with user wallets. It includes functionalities for depositing and withdrawing funds, querying the contract balance, and displaying the wallet address of the contract owner.

### Contract Details
# Smart Contract and React Wallet App: Fund Management

## Smart Contract Overview

The Solidity smart contract manages funds and enables basic interaction with user wallets. It includes functionalities for depositing and withdrawing funds, querying the contract balance, and displaying the wallet address of the contract owner.

### Contract Details

- **Solidity Version:** ^0.8.7
- **License:** UNLICENSED (Please replace with appropriate license information)

### Contract Functions

1. **getBalance()**: Returns the current balance of the contract.

2. **displayAddress()**: Emits the `ShowAddress` event, displaying the wallet address associated with the contract owner.

3. **deposit(uint256 depositAmount)**: Allows users to deposit funds into the contract. Emits the `Deposit` event with the deposited amount.

4. **withdraw(uint256 withdrawAmount)**: Allows users to withdraw funds from the contract. Emits the `Withdraw` event with the withdrawn amount.

### Events

- **ShowAddress(address walletAddress)**: Emitted when the `displayAddress` function is called to display the wallet address of the contract owner.

- **Deposit(uint256 depositAmount)**: Emitted when funds are deposited into the contract. Logs the deposited amount.

- **Withdraw(uint256 withdrawAmount)**: Emitted when funds are withdrawn from the contract. Logs the withdrawn amount.

## React Wallet App Overview

The React wallet application provides a user-friendly interface for interacting with the smart contract deployed on the Ethereum blockchain. Users can connect their MetaMask wallet, view their account details, and perform deposit and withdrawal transactions.

### Getting Started

1. Clone or download this repository to your local machine.

2. Navigate to the project folder and install dependencies:

   ```sh
   npm install
   # or
   yarn install

- **Solidity Version:** ^0.8.7
- **License:** UNLICENSED (Please replace with appropriate license information)

### Contract Functions

1. **getBalance()**: Returns the current balance of the contract.

2. **displayAddress()**: Emits the `ShowAddress` event, displaying the wallet address associated with the contract owner.

3. **deposit(uint256 depositAmount)**: Allows users to deposit funds into the contract. Emits the `Deposit` event with the deposited amount.

4. **withdraw(uint256 withdrawAmount)**: Allows users to withdraw funds from the contract. Emits the `Withdraw` event with the withdrawn amount.

### Events

- **ShowAddress(address walletAddress)**: Emitted when the `displayAddress` function is called to display the wallet address of the contract owner.

- **Deposit(uint256 depositAmount)**: Emitted when funds are deposited into the contract. Logs the deposited amount.

- **Withdraw(uint256 withdrawAmount)**: Emitted when funds are withdrawn from the contract. Logs the withdrawn amount.

## React Wallet App Overview

The React wallet application provides a user-friendly interface for interacting with the smart contract deployed on the Ethereum blockchain. Users can connect their MetaMask wallet, view their account details, and perform deposit and withdrawal transactions.

### Getting Started

1. Clone or download this repository to your local machine.

2. Navigate to the project folder and install dependencies:

   ```sh
   npm install
   # or
   yarn install
