This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Life Insurance Recommendation MVP

A full-stack MVP that collects basic user profile data and provides a personalized life insurance recommendation. Built as part of a Senior Full Stack Engineering assessment.

---

## Project Summary

This app allows users to:

- Enter key life profile details (age, income, dependents, risk tolerance)
- Receive an intelligent recommendation (e.g., Term Life – $500,000 for 20 years)
- See a short explanation for the recommendation
- Have their data stored in a PostgreSQL database for future use or analytics

The system is containerized with Docker and ready for cloud deployment (AWS ECS, EBS, or similar).

---

## Tech Stack

### Frontend
- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** for responsive UI
- **Axios** for API communication

### Backend
- **Node.js + Express** (REST API)
- **TypeScript** for maintainability
- **PostgreSQL** (via Docker) for persistence
- **Docker Compose** for orchestration

---

## Getting Started Locally

### Prerequisites

- Docker & Docker Compose installed
- Node.js (for manual dev work, optional)

### Clone the Repo

```bash
git clone https://github.com/AbioyeSamuel/life-insurance-mvp.git
cd life-insurance-mvp