# Prisma Test Project

A simple project to learn and test Prisma ORM functionality.

## What is Prisma?

Think of Prisma as a smart translator between your application and your database. Just like how Google Translate helps you communicate with someone who speaks a different language, Prisma helps your code "talk" to your database more easily.

## Setup Commands

```bash
# Initialize Project - Creates package.json with default settings
npm init -y

# Install TypeScript dependencies - Enables type safety and running .ts files
npm i typescript ts-node @types/node -D

# Initialize TypeScript - Creates tsconfig.json for TypeScript configuration
npx tsc --init

# Install Prisma - Main ORM toolkit and database client
npm install prisma @prisma/client

# Initialize Prisma with SQLite - Creates schema.prisma and .env files with SQLite setup (dev only)
npx prisma init --datasource-provider sqlite
```

## Database Migration

```bash
# Create and apply migration - Syncs your schema with the database
npx prisma migrate dev --name init
```