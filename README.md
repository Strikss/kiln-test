# Kiln Test Assignment

A test assignment for Kiln featuring wallet connectivity and NFT minting functionality.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_BASE_URL=your_api_base_url
VITE_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

### Running the Project

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Features

- **Wallet Connectivity**: Integrated with RainbowKit and Wagmi for Web3 wallet connections
- **NFT Minting**: Claim and mint NFTs on Base Sepolia network
- **Modern Stack**: React, TypeScript, Vite, Tailwind CSS

## Tech Stack

- React 19
- TypeScript
- Vite
- Wagmi & RainbowKit
- React Query
- Tailwind CSS

