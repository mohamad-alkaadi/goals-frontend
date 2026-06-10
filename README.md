# Goals App - Frontend

A responsive and intuitive web application designed to help users manage their daily tasks, group their goals, and share objectives with friends.

## Features

- **Task Management**: Create, complete, and track tasks (goals) effortlessly.
- **Smart Grouping**: Organize your life with constant groups like "My Day", "Overdue", "Completed", and "Shared", or create custom groups tailored to your workflow.
- **Social Sharing**: Add friends and collaborate on shared tasks.
- **Responsive Design**: A seamless experience across desktop and mobile devices, featuring a sliding drawer menu on smaller screens.
- **Authentication**: Secure sign-in and sign-up flows.
- **Customization**: Mark tasks as favorites and sort them by importance, due date, alphabetically, or creation date.

## Tech Stack

This project is built using modern web development tools:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with NativeWind considerations.
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives for dialogs, dropdowns, tooltips, sheets, etc.)
- **Icons**: `react-icons` and `lucide-react`
- **Authentication/Session**: `cookies-next` and `jwt-decode`

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v20 or higher is recommended).

### Installation

1. Clone the repository and navigate into the project directory:

   ```bash
   cd goals-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Deployment Link

https://goals-frontend-nu.vercel.app/

## Scripts

- `npm run dev`: Starts the application in development mode.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the application in production mode.
- `npm run lint`: Runs the Next.js linter.

## Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/api`: Client and server API utilities for interacting with the backend.
- `/components`: Reusable React components.
  - `/auth`: Forms and inputs for authentication.
  - `/common`: Core application components (goals, sheets, sidebar).
  - `/ui`: Accessible, unstyled UI primitives from shadcn/ui.
- `/lib`: Utility functions, hooks, and Redux store configuration.
- `/utils`: Helper functions for tokens, strings, and validation.
