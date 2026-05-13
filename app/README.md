# Todo Application - DevSecOps Learning Project

A simple, full-stack application for practicing DevSecOps concepts.

## 📋 Project Structure

```
app/
├── backend/                 # Node.js Express API
│   ├── server.js           # Main server file
│   ├── package.json        # Dependencies
│   ├── .env                # Environment variables
│   └── Dockerfile          # Docker configuration
├── frontend/               # Static web interface
│   ├── index.html          # HTML markup
│   ├── styles.css          # Styling
│   ├── script.js           # JavaScript logic
│   ├── nginx.conf          # Nginx configuration
│   └── Dockerfile          # Docker configuration
├── database/               # SQLite database storage
├── docker-compose.yml      # Docker Compose orchestration
└── README.md              # This file
```

## 🎯 Features

- ✅ Create, Read, Update, Delete (CRUD) tasks
- ✅ Task status management (pending/completed)
- ✅ Filter tasks by status
- ✅ Persistent storage with SQLite
- ✅ RESTful API backend
- ✅ Responsive modern UI
- ✅ Docker & Docker Compose support
- ✅ Security headers in Nginx

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (for local development)
- Docker & Docker Compose (for containerized setup)
- npm or yarn

### Option 1: Local Development

**Backend:**
```bash
cd backend
npm install
npm start
# Backend runs on http://localhost:3001
```

**Frontend (in another terminal):**
```bash
cd frontend
# Open index.html in your browser or use a simple server:
npx http-server
# Frontend runs on http://localhost:8080
```

### Option 2: Docker Compose (Recommended for DevSecOps)

```bash
docker-compose up -d
```

Access the application:
- Frontend: http://localhost
- Backend API: http://localhost:3001/api
- Health Check: http://localhost:3001/api/health

## 📚 API Endpoints

### Get All Todos
```
GET /api/todos
```

### Get Single Todo
```
GET /api/todos/:id
```

### Create Todo
```
POST /api/todos
Body: { "title": "Task title", "description": "Optional description" }
```

### Update Todo
```
PUT /api/todos/:id
Body: { "title": "Updated title", "description": "Updated description", "status": "completed" }
```

### Delete Todo
```
DELETE /api/todos/:id
```

### Health Check
```
GET /api/health
```

## 🔒 DevSecOps Practicals You Can Perform

1. **SAST (Static Application Security Testing)**
   - Code vulnerability scanning
   - Dependency vulnerability checks
   - Secret detection

2. **Container Security**
   - Image scanning for vulnerabilities
   - Base image security analysis
   - Container registry scanning

3. **Network Security**
   - Network policies
   - Port security
   - SSL/TLS implementation

4. **Infrastructure Security**
   - Infrastructure as Code (IaC) scanning
   - Docker security best practices
   - Container hardening

5. **Secrets Management**
   - Environment variable handling
   - Credential management
   - Access control

6. **Compliance & Governance**
   - CIS Benchmarks
   - OWASP Top 10
   - Compliance scanning

7. **CI/CD Pipeline Security**
   - GitHub Actions/GitLab CI security
   - Build pipeline scanning
   - Artifact verification

8. **Runtime Security**
   - Container monitoring
   - Application performance monitoring
   - Security event logging

## 🐛 Database

The application uses SQLite for simplicity. The database file is stored in the `database/` directory:
- `todos.db` - Main database file (auto-created on first run)

### Database Schema

```sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** SQLite3
- **Containerization:** Docker, Docker Compose
- **Web Server:** Nginx
- **Security:** CORS, HTTPS-ready

## 📝 Environment Variables

### Backend (.env)
```
PORT=3001
DB_PATH=../database/todos.db
NODE_ENV=development
```

## 🔐 Security Features Implemented

- ✅ CORS configuration
- ✅ Input validation
- ✅ SQL injection prevention (parameterized queries)
- ✅ XSS protection
- ✅ Security headers in Nginx
- ✅ HTTPS-ready
- ✅ Health checks
- ✅ Graceful error handling

## 📊 Testing DevSecOps Tools

### Popular tools to test with this application:

1. **SAST:** Snyk, SonarQube, Checkmarx, Veracode
2. **Dependency Check:** OWASP Dependency-Check, npm audit
3. **Container Scanning:** Trivy, Clair, Anchore
4. **IaC Scanning:** Checkov, TFLint, PolicyAsCode
5. **DAST:** OWASP ZAP, Burp Suite
6. **Secret Detection:** GitGuardian, TruffleHog
7. **Compliance:** Aqua Trivy, Falco

## 🚦 Health & Monitoring

The application includes health check endpoints:
- Backend: `http://localhost:3001/api/health`
- Frontend: `http://localhost/health`

Docker Compose health checks are configured in the backend service.

## 📦 Cleanup

To stop and remove all containers:

```bash
docker-compose down
docker-compose down -v  # Remove volumes too
```

## 🤝 Contributing

This is a learning project. Feel free to:
- Add more security features
- Implement authentication
- Add logging and monitoring
- Enhance the UI
- Add more database features

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Learning! 🎓**

This simple application is perfect for understanding DevSecOps principles in a real-world scenario.
