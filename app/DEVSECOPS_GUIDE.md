# DevSecOps Practicals Guide

## Overview
This document provides guidance on setting up and executing DevSecOps practicals using the Todo Application.

## 1. Source Code Analysis (SAST)

### Scan with Snyk
```bash
snyk auth
snyk test --severity-threshold=high
snyk code test
```

### Scan with SonarQube
```bash
sonar-scanner \
  -Dsonar.projectKey=todo-app \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=your-token
```

## 2. Dependency Management

### Check for vulnerable dependencies
```bash
cd backend
npm audit
npm audit fix
```

### Generate SBOM (Software Bill of Materials)
```bash
npm install -g @cyclonedx/bom
cyclonedx-npm . > sbom.json
```

## 3. Container Security

### Scan with Trivy
```bash
trivy image todo-backend:latest
trivy image --severity HIGH,CRITICAL todo-backend:latest
```

### Build and scan locally
```bash
docker build -t todo-backend:latest -f backend/Dockerfile ./backend
trivy image todo-backend:latest
```

## 4. Infrastructure as Code Security

### Scan Docker Compose
```bash
trivy config docker-compose.yml
checkov -f docker-compose.yml
```

### Scan Dockerfiles
```bash
trivy config backend/Dockerfile
trivy config frontend/Dockerfile
```

## 5. Secret Detection

### Scan for hardcoded secrets
```bash
truffleHog filesystem .
gitleaks detect --verbose
```

## 6. DAST (Dynamic Application Security Testing)

### Setup OWASP ZAP
```bash
docker run -t owasp/zap2docker-stable zap-baseline.py -t http://localhost
```

## 7. Code Quality

### Run ESLint
```bash
npm install -D eslint
npx eslint backend/server.js frontend/script.js
```

## 8. Build Secure Docker Images

### Multi-stage build
```bash
docker build -t todo-backend:secure -f backend/Dockerfile.prod ./backend
```

## 9. Kubernetes Deployment

### Create basic K8s manifests
```yaml
# backend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: todo-backend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: todo-backend
  template:
    metadata:
      labels:
        app: todo-backend
    spec:
      containers:
      - name: backend
        image: todo-backend:latest
        ports:
        - containerPort: 3001
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
```

## 10. CI/CD Security

### GitHub Actions Example
```yaml
name: DevSecOps Pipeline
on: [push]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Trivy
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
```

---

Happy practicing DevSecOps! 🚀
