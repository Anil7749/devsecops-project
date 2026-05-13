#!/bin/bash

# Setup script for Todo Application

echo "🚀 Setting up Todo Application..."

# Check prerequisites
check_prerequisites() {
    echo "📋 Checking prerequisites..."

    if ! command -v docker &> /dev/null; then
        echo "❌ Docker is not installed"
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null; then
        echo "❌ Docker Compose is not installed"
        exit 1
    fi

    echo "✅ Prerequisites verified"
}

# Build and run with Docker Compose
run_docker_compose() {
    echo "🐳 Building and starting services with Docker Compose..."
    docker-compose up -d --build
    
    echo "⏳ Waiting for services to be ready..."
    sleep 5
    
    echo "✅ Services are running!"
    echo ""
    echo "📍 Access points:"
    echo "  Frontend: http://localhost"
    echo "  Backend API: http://localhost:3001/api"
    echo "  Health Check: http://localhost:3001/api/health"
}

# Setup local development
run_local_dev() {
    echo "💻 Setting up local development environment..."
    
    echo "📦 Installing backend dependencies..."
    cd backend
    npm install
    cd ..
    
    echo "✅ Setup complete!"
    echo ""
    echo "To run locally:"
    echo "  Terminal 1: cd backend && npm start"
    echo "  Terminal 2: cd frontend && npx http-server"
}

# Main menu
echo ""
echo "Choose setup method:"
echo "1) Docker Compose (Recommended for DevSecOps)"
echo "2) Local Development"
echo "3) Exit"
echo ""

read -p "Enter choice [1-3]: " choice

case $choice in
    1)
        check_prerequisites
        run_docker_compose
        ;;
    2)
        run_local_dev
        ;;
    3)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid choice!"
        exit 1
        ;;
esac

echo ""
echo "📚 For DevSecOps practicals, see DEVSECOPS_GUIDE.md"
