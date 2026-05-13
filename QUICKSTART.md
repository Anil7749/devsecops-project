# Quick Start Guide - Todo Application

## 📦 Project Ready!

Your simple full-stack application for DevSecOps learning is ready to use.

---

## 🚀 Start in 3 Easy Steps

### Step 1: Install Dependencies (Backend)

```bash
cd app/backend
npm install
```

### Step 2: Run the Backend

```bash
npm start
```

Output: `Backend server is running on http://localhost:3001`

### Step 3: Open Frontend

- Navigate to `app/frontend/index.html` in your browser
- OR use a simple HTTP server: `npx http-server app/frontend`

---

## 🐳 OR Use Docker Compose (Recommended)

```bash
cd app
docker-compose up -d
```

Then open http://localhost in your browser.

---

## ✨ Application Features

| Feature | Details |
|---------|---------|
| **Frontend** | Modern, responsive UI (HTML/CSS/JS) |
| **Backend** | REST API built with Node.js/Express |
| **Database** | SQLite for persistent storage |
| **CRUD** | Create, Read, Update, Delete tasks |
| **Filtering** | Filter by All/Pending/Completed |
| **Status** | Pending/Completed task management |
| **Statistics** | Real-time task counters |

---

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get specific todo |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
| GET | `/api/health` | Health check |

---

## 📊 DevSecOps Practicals

This application is designed for learning DevSecOps. You can practice:

### Security Testing
- **SAST:** Code vulnerability scanning
- **DAST:** Dynamic application testing
- **Dependency Check:** Find vulnerable packages
- **Container Scanning:** Scan Docker images

### Infrastructure Security
- **IaC Scanning:** Scan Dockerfiles and docker-compose
- **Secret Detection:** Find hardcoded credentials
- **Compliance:** Check against security standards

### CI/CD Security
- **Build Pipeline:** Secure your build process
- **Container Registry:** Secure image storage
- **Deployment:** Secure Kubernetes deployment

---

## 📁 Directory Structure

```
app/
├── backend/              # Node.js Express API
│   ├── server.js        # Main server
│   ├── package.json     # Dependencies
│   ├── Dockerfile       # Production image
│   └── .env             # Config
├── frontend/            # Web interface
│   ├── index.html       # Main page
│   ├── styles.css       # Styling
│   ├── script.js        # Logic
│   ├── nginx.conf       # Web server config
│   └── Dockerfile       # Web server image
├── database/            # SQLite storage
├── docker-compose.yml   # Container orchestration
└── DEVSECOPS_GUIDE.md   # Practicals guide
```

---

## 🛠️ Common Commands

### Local Development
```bash
# Backend
cd app/backend
npm install
npm start

# Frontend (new terminal)
cd app/frontend
npx http-server
```

### Docker
```bash
# Build and run
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Remove everything (including data)
docker-compose down -v
```

### Testing API
```bash
# Create task
curl -X POST http://localhost:3001/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","description":"Task details"}'

# Get all tasks
curl http://localhost:3001/api/todos

# Health check
curl http://localhost:3001/api/health
```

---

## 🔐 Security Features

✅ CORS enabled  
✅ Input validation  
✅ SQL injection protection  
✅ XSS prevention  
✅ Security headers  
✅ Health checks  
✅ Error handling  

---

## 📚 Next Steps

1. **Run the application** - Get it working first
2. **Explore the code** - Understand the architecture
3. **Practice DevSecOps** - See DEVSECOPS_GUIDE.md
4. **Enhance features** - Add authentication, logging, etc.

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Change in backend/.env
PORT=3002
```

### Database Error
```bash
# Delete and recreate
rm -rf app/database/todos.db
npm start  # Will auto-create
```

### Docker Issues
```bash
# Clean up
docker-compose down -v
docker system prune -a

# Rebuild
docker-compose build --no-cache
docker-compose up
```

---

## 📞 Support Resources

- **Backend Issues:** Check `backend/server.js`
- **Frontend Issues:** Check browser console (F12)
- **Database Issues:** Check `database/` directory
- **Docker Issues:** Run `docker logs <container-name>`

---

**Ready to learn DevSecOps? Let's go! 🚀**

See [DEVSECOPS_GUIDE.md](DEVSECOPS_GUIDE.md) for practical exercises.
