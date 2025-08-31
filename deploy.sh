#!/bin/bash

# Production Deployment Script for AMTOP Landing Page
set -e

echo "🚀 Starting AMTOP Landing Page production deployment..."

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | grep -v '^#' | xargs)
else
    echo "❌ .env.production file not found!"
    exit 1
fi

# Check required environment variables
required_vars=("PAYLOAD_API_URL" "NEXT_PUBLIC_SITE_URL" "NEXT_PUBLIC_APP_NAME")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "❌ Required environment variable $var is not set!"
        exit 1
    fi
done

echo "✅ Environment variables loaded successfully"

# Build production Docker image
echo "🔨 Building production Docker image..."
docker build -f Dockerfile.prod -t amtop-frontend:latest .

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down || true

# Start production services
echo "🚀 Starting production services..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
timeout=300
counter=0

while [ $counter -lt $timeout ]; do
    if curl -f http://localhost:3001/health > /dev/null 2>&1; then
        echo "✅ AMTOP Frontend is healthy!"
        break
    fi
    
    echo "⏳ Waiting for AMTOP Frontend to be ready... ($counter/$timeout)"
    sleep 10
    counter=$((counter + 10))
done

if [ $counter -ge $timeout ]; then
    echo "❌ Timeout waiting for services to be healthy"
    docker-compose -f docker-compose.prod.yml logs
    exit 1
fi

# Health check
echo "🏥 Running health checks..."
if curl -f http://localhost:3001/health > /dev/null 2>&1; then
    echo "✅ Health check passed!"
else
    echo "❌ Health check failed!"
    exit 1
fi

# Performance test
echo "⚡ Running performance tests..."
if command -v ab > /dev/null 2>&1; then
    echo "📊 Running Apache Bench test..."
    ab -n 100 -c 10 http://localhost:3001/ > performance_test.log 2>&1
    echo "✅ Performance test completed. Check performance_test.log for results."
else
    echo "⚠️  Apache Bench not found. Skipping performance test."
fi

echo "🎉 Production deployment completed successfully!"
echo "🌐 AMTOP Landing Page is running at: http://localhost:3001"
echo "📊 Monitoring: http://localhost:9091"
echo "🔐 Payload CMS API: $PAYLOAD_API_URL"

# Show running containers
echo "🐳 Running containers:"
docker-compose -f docker-compose.prod.yml ps

# Show resource usage
echo "📈 Resource usage:"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}\t{{.BlockIO}}"
