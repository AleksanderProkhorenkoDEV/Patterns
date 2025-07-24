# Factory Method Pattern Implementation

```typescript
// Project Structure
factorymethod/
├── src/
│   ├── interfaces/       // Type definitions
│   ├── notifications/    // Concrete implementations
│   ├── class/            // Factory classes and base classes
│   └── index.ts          // Entry point
├── tsconfig.json         // TypeScript config
└── package.json          // Project config
```

# Prerequisites

- Node.js 23.11.0
- npm/yarn

# Installation

1. Clone repository
2. Install dependencies:
   npm install

# Available Commands

type-check -> Validate types without emitting JS
start -> Run in dev mode with TSX

## Why This Setup?

- **No build step** needed for development (using TSX)
- **Type safety** verified before runtime
- **Clean separation** of concerns
- **Modern ES Modules** support
