# 💰 Finance Tracker (Containerized)

A full-stack finance tracking application built with a microservices architecture that allows users to track income/expenses and persists data using a containerized MongoDB instance The entire stack is automated via a CI/CD pipeline.

## 🚀 Key Features
- **Real-time Tracking:** Add income and expenses instantly.
- **Data Persistence:** Transactions are stored in a MongoDB volume, surviving container restarts.
- **Admin Controls:** "Reset" button to clear database for testing.
- **Containerized:** Runs anywhere (Linux, Windows, Mac) with zero dependency installation.
- **Automated DevOps:** Code is automatically built and pushed to Docker Hub on every commit.

## 🛠 Tech Stack
| Component | Technology |
|-----------|------------|
| **Frontend** | Vanilla JS, HTML5, CSS3 (Served via **Nginx**) |
| **Backend** | Node.js, Express REST API |
| **Database** | MongoDB (Running in container) |
| **DevOps** | Docker, Docker Compose, GitHub Actions |

## ⚡ How to Run (The Easy Way)
You do not need Node.js or MongoDB installed. Just Docker.

1. **Clone the repo**
   ```bash
   git clone https://github.com/smadizaid15/finance-tracker.git
   cd finance-tracker

## then run 
   docker-compose up
   and then visit : http://localhost:3000