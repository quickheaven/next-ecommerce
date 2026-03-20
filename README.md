# Next.js E-Commerce Platform

A modern, full-featured e-commerce application built with [Next.js 15](https://nextjs.org) as part of the [Master Next.JS 15 - Build and Deploy an E-Commerce Project](https://www.udemy.com/course/master-nextjs-15-the-missing-guide/) course on Udemy.

## Features

- **Product Catalog**: Browse products with categories, search functionality, and detailed product pages
- **Shopping Cart**: Add/remove items, view cart summary, manage quantities
- **User Authentication**: Sign up, login, and manage user accounts with NextAuth.js
- **Secure Checkout**: Stripe payment integration for secure transactions
- **Order Management**: Track orders, view order history, and order status
- **Responsive Design**: Mobile-first UI with dark mode support
- **Server Components**: Leveraging Next.js 15 App Router with React Server Components
- **TypeScript**: Full type safety throughout the application
- **Database**: PostgreSQL with Prisma ORM for type-safe database access

## Tech Stack

- **Frontend**: React 19, Next.js 15 with App Router
- **UI Components**: shadcn/ui (Radix UI primitives), Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Authentication**: NextAuth.js v5 with bcryptjs
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe API integration
- **Data Fetching**: SWR for client-side data fetching
- **Styling**: Tailwind CSS v4 with custom animations
- **Development**: TypeScript, Turbopack, Vitest, ESLint, Prettier
- **Code Quality**: Husky + lint-staged for pre-commit hooks

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── api/                  # API routes (auth, cart, webhooks)
│   ├── auth/                 # Authentication pages
│   ├── account/              # User account page
│   ├── cart/                 # Shopping cart page
│   ├── checkout/             # Checkout flow
│   ├── order/                # Order management
│   ├── product/              # Product detail pages
│   ├── products/             # Product listing
│   ├── search/               # Product search
│   └── layout.tsx            # Root layout
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   └── (feature components)  # Product cards, cart, navbar, etc.
├── lib/                      # Utility functions and helpers
│   ├── actions.ts            # Server actions
│   ├── auth.ts               # Authentication helpers
│   ├── stripe.ts             # Stripe integration
│   ├── prisma.ts             # Prisma client
│   └── (other utilities)
├── prisma/                   # Database schema and migrations
│   ├── schema.prisma         # Data models
│   └── seed.ts               # Database seeding
└── public/                   # Static assets
```

## Database Schema

The application uses the following core models:

- **Product**: Items for sale with pricing, inventory, and categorization
- **Category**: Product categories with slugs for routing
- **Cart**: Shopping carts with line items
- **CartItem**: Individual cart entries linking products and quantities
- **Order**: Customer orders with payment and status tracking
- **OrderItem**: Order line items with pricing snapshots
- **User**: Customer accounts with authentication and order history

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- PostgreSQL database
- Stripe account (for payment processing)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables by creating a `.env.local` file:

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sk_..."
STRIPE_PUBLISHABLE_KEY="pk_..."
```

4. Set up the database:

```bash
npx prisma generate
npx prisma db push
pnpm seed  # Optional: seed sample data
```

### Development

Run the development server with Turbopack for faster builds:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests with Vitest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Prettier
- `pnpm seed` - Seed the database with initial data

## Key Features in Detail

### Server Components & Actions

The app leverages Next.js Server Components for optimal performance and React Server Actions for mutations.

### Authentication Flow

- NextAuth.js integration with email/password strategy
- Secure password hashing with bcryptjs
- Protected routes and user-only features

### Payment Processing

Stripe integration handles the entire checkout flow including:

- Session creation and management
- Webhook handling for payment confirmations
- Order status tracking

### Real-time Cart

Shopping cart managed with SWR for up-to-date inventory and pricing information.

## Learning Resources

This project implements patterns and best practices from the Udemy course:

- [Master Next.JS 15 - The Missing Guide](https://www.udemy.com/course/master-nextjs-15-the-missing-guide/)

Additional resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://authjs.dev)
- [Stripe API Documentation](https://stripe.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Development Workflow

- **Code Quality**: Husky hooks run ESLint and Prettier on every commit
- **Testing**: Vitest is configured for unit and integration tests
- **Type Safety**: Full TypeScript coverage with strict mode enabled
- **Database Migrations**: Prisma migrations tracked in version control

## License

This project is licensed under the MIT License - see the LICENSE file for details.
