# Getting Started with SelfState

Welcome to the **SelfState** project! This guide will help you set up your development environment.

## Prerequisites

- **Node.js** (LTS version recommended, v20+)
- **pnpm** (Package Manager)
- **Git**

## Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/Quandes-Projects/selfstate.git
    cd selfstate
    ```

2.  **Install dependencies**:
    We use `pnpm` for managing dependencies in this monorepo.
    ```bash
    pnpm install
    ```

## Project Structure

This project is a **Turborepo** monorepo:

- **`apps/`**: Application source code
    - `cms`: Payload CMS (Backend)
    - `web`: Next.js Dashboard (Frontend)
    - `mobile`: Expo React Native App
- **`packages/`**: Shared libraries
    - `ui`: Shared UI components (shadcn/ui)
    - `shared`: Shared Types and Schemas

## Running the Project

To start all applications in development mode:

```bash
pnpm dev
```

- **CMS:** http://localhost:3000 (Admin Panel)
- **Web:** http://localhost:3001
- **Mobile:** Starts Metro Bundler for Expo

## Development Workflow

Please refer to `AGENTS.md` for detailed coding guidelines and our "Vibecoding" workflow.
