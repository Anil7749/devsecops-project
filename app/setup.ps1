# PowerShell setup script for Todo Application

Write-Host "🚀 Setting up Todo Application..." -ForegroundColor Green

function Check-Prerequisites {
    Write-Host "📋 Checking prerequisites..." -ForegroundColor Cyan
    
    $docker = docker --version 2>$null
    $compose = docker-compose --version 2>$null
    
    if (-not $docker) {
        Write-Host "❌ Docker is not installed" -ForegroundColor Red
        exit 1
    }
    
    if (-not $compose) {
        Write-Host "❌ Docker Compose is not installed" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "✅ Prerequisites verified" -ForegroundColor Green
}

function Run-Docker-Compose {
    Write-Host "🐳 Building and starting services with Docker Compose..." -ForegroundColor Cyan
    docker-compose up -d --build
    
    Write-Host "⏳ Waiting for services to be ready..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    Write-Host "✅ Services are running!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Access points:" -ForegroundColor Cyan
    Write-Host "  Frontend: http://localhost"
    Write-Host "  Backend API: http://localhost:3001/api"
    Write-Host "  Health Check: http://localhost:3001/api/health"
}

function Run-Local-Dev {
    Write-Host "💻 Setting up local development environment..." -ForegroundColor Cyan
    
    Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
    Push-Location backend
    npm install
    Pop-Location
    
    Write-Host "✅ Setup complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To run locally:" -ForegroundColor Yellow
    Write-Host "  Terminal 1: cd backend ; npm start"
    Write-Host "  Terminal 2: cd frontend ; npx http-server"
}

# Main menu
Write-Host ""
Write-Host "Choose setup method:" -ForegroundColor Yellow
Write-Host "1) Docker Compose (Recommended for DevSecOps)"
Write-Host "2) Local Development"
Write-Host "3) Exit"
Write-Host ""

$choice = Read-Host "Enter choice [1-3]"

switch ($choice) {
    "1" {
        Check-Prerequisites
        Run-Docker-Compose
    }
    "2" {
        Run-Local-Dev
    }
    "3" {
        Write-Host "Exiting..." -ForegroundColor Yellow
        exit 0
    }
    default {
        Write-Host "Invalid choice!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "📚 For DevSecOps practicals, see DEVSECOPS_GUIDE.md" -ForegroundColor Cyan
