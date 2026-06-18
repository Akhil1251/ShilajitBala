# Onboarding Guide - Shilajit Bala

Welcome to the **Shilajit Bala** landing page project! This document outlines how to get up and running, build, and deploy the application.

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later) and npm installed.

## Running the Project Locally

To start the development server, run:

```bash
npm run dev
```

The server will start by default at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create an optimized production build of the application:

```bash
npm run build
```

This runs the Next.js compiler and generates a `.next` folder containing the optimized assets.

## Running the Production Build Locally

After building the application, you can run the production server locally:

```bash
npm run start
```

## Deployment

This is a Next.js application, which can be deployed easily to modern cloud hosting platforms:

### 1. Vercel (Recommended)
- Push your code to your GitHub repository.
- Connect your GitHub account to [Vercel](https://vercel.com).
- Import this repository and click **Deploy**. Vercel will automatically configure and optimize Next.js.

### 2. Netlify
- Create a new site from Git on [Netlify](https://netlify.com).
- Next.js is supported out-of-the-box with Netlify's Next.js Runtime.

### 3. Docker / Self-Hosted
- You can build and run Next.js in a Docker container using a Node.js base image.

## Common Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the Turbopack local development server |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server locally |
| `npm run lint` | Runs ESLint to check for code style issues |

## Git Workflow

The current development branch is `sahadev-dev`. 
- To push your local changes:
  ```bash
  git push
  ```
