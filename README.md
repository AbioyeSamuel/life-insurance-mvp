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

- git clone https://github.com/AbioyeSamuel/life-insurance-mvp.git
- cd life-insurance-mvp

### Vercel Link: https://life-insurance-mvp-peach.vercel.app/

### Run the App Locally Using Docker

- docker-compose up --build
- This will start:

- Frontend: http://localhost:3000

- Backend: http://localhost:4000

- PostgreSQL: running at localhost:5432 (inside Docker)

---

### API Endpoint

- POST /recommendation

### - e.g 

- Request Body:

{
  "age": 35,
  "income": 80000,
  "dependents": 2,
  "riskTolerance": "High"
}

- Response:
{
  "recommendation": "Term Life – $500,000 for 20 years",
  "explanation": "You are young with high risk tolerance. Term life is best."
}

---

### PostgreSQL Access (via Docker)
- You can directly inspect submitted data in the PostgreSQL database.

1. Find the running DB container:
docker ps
Look for a container named life-insurance-mvp-db-1.

2. Connect to the database:

docker exec -it life-insurance-mvp-db-1 psql -U postgres -d insurance
3. Query the submissions table:

- SELECT * FROM submissions;

### Deploying Backend to AWS Elastic Beanstalk

- This project includes deployment readiness for AWS Elastic Beanstalk (Node.js environment).

---

### ```Steps to Deploy
1. Install Elastic Beanstalk CLI:

pip install awsebcli
2. Initialize EB in the backend directory:

- cd backend
- eb init -p node.js backend --region <your-region>
Follow the prompts and select an existing IAM user or create a new one.

3. Create an environment:
- eb create life-insurance-backend-env

4. Deploy:
- eb deploy
Once deployed, a sample public URL is generated:

- e.g http://life-insurance-backend-env.eba-xyz.us-east-1.elasticbeanstalk.com

- Next: Update frontend .env file as follows:

- NEXT_PUBLIC_API_BASE_URL=https://life-insurance-backend-env.eba-xyz.us-east-1.elasticbeanstalk.com

### Then re-deploy the frontend.