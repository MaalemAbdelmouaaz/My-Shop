# Multi-vendor E-commerce Platform

A modern, full-featured e-commerce platform built with Next.js 14, allowing multiple vendors to sell their products through a unified marketplace.

## Features

- 🛍️ Multi-vendor support
- 🔐 Secure authentication with Clerk
- 💳 Payment processing
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔍 Product search and filtering
- 📦 Order management
- 📊 Vendor dashboard
- 🌐 Internationalization support

## Tech Stack

- Next.js 14
- TypeScript
- Prisma
- MySQL
- Tailwind CSS
- Clerk Authentication
- React Hook Form
- Zod Validation
- Cloudinary (Image hosting)

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd multivendor-ecommerce-build-2025-1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the necessary environment variables.

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
