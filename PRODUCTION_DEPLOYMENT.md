# 🚀 AMTOP Production Deployment Guide

This guide covers the complete production deployment of both Payload CMS and AMTOP Landing Page with enterprise-level features.

## 📋 Prerequisites

### System Requirements
- **OS**: Ubuntu 20.04+ / CentOS 8+ / RHEL 8+
- **RAM**: Minimum 8GB, Recommended 16GB+
- **CPU**: Minimum 4 cores, Recommended 8+ cores
- **Storage**: Minimum 100GB SSD, Recommended 500GB+ NVMe
- **Network**: Stable internet connection with static IP

### Software Requirements
- **Docker**: 20.10+
- **Docker Compose**: 2.0+
- **Node.js**: 18.20.2+ (for local development)
- **MongoDB**: 7.0+ (or MongoDB Atlas)
- **Redis**: 7.2+ (for caching)
- **Nginx**: 1.20+ (for reverse proxy)
- **SSL Certificates**: Let's Encrypt or commercial certificates

## 🏗️ Architecture Overview

```
Internet → Nginx (SSL Termination) → AMTOP Frontend + Payload CMS
                ↓
        Redis (Caching) + MongoDB (Data)
                ↓
        Prometheus (Monitoring) + Grafana (Dashboards)
```

## 🔧 Step 1: Server Setup

### 1.1 Update System
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget git htop nginx certbot python3-certbot-nginx
```

### 1.2 Install Docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo systemctl enable docker
sudo systemctl start docker
```

### 1.3 Install Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## 🔐 Step 2: SSL Certificates

### 2.1 Domain Configuration
```bash
# Set your domain
export DOMAIN="amtop.com"
export CMS_DOMAIN="cms.amtop.com"

# Create SSL directories
sudo mkdir -p /etc/nginx/ssl
sudo mkdir -p /etc/letsencrypt/live/$DOMAIN
sudo mkdir -p /etc/letsencrypt/live/$CMS_DOMAIN
```

### 2.2 Obtain SSL Certificates
```bash
# For main domain
sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN

# For CMS subdomain
sudo certbot certonly --standalone -d $CMS_DOMAIN

# Copy certificates to nginx directory
sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /etc/nginx/ssl/$DOMAIN.crt
sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /etc/nginx/ssl/$DOMAIN.key
sudo cp /etc/letsencrypt/live/$CMS_DOMAIN/fullchain.pem /etc/nginx/ssl/$CMS_DOMAIN.crt
sudo cp /etc/letsencrypt/live/$CMS_DOMAIN/privkey.pem /etc/nginx/ssl/$CMS_DOMAIN.key
```

## 🗄️ Step 3: Database Setup

### 3.1 MongoDB (Production)
```bash
# Create MongoDB data directory
sudo mkdir -p /opt/mongodb/data
sudo chown -R 999:999 /opt/mongodb/data

# Set MongoDB credentials
export MONGO_ROOT_USERNAME="admin"
export MONGO_ROOT_PASSWORD="your-super-secure-password"
```

### 3.2 Redis (Caching)
```bash
# Create Redis data directory
sudo mkdir -p /opt/redis/data
sudo chown -R 999:999 /opt/redis/data
```

## ⚙️ Step 4: Environment Configuration

### 4.1 Payload CMS Environment
```bash
cd payload-cms
cp production.env.example .env.production

# Edit .env.production with your values
nano .env.production
```

**Required Variables:**
```bash
NODE_ENV=production
DATABASE_URI=mongodb://admin:your-password@localhost:27017/amtop_production
PAYLOAD_SECRET=your-super-secure-32-character-secret
FRONTEND_URL=https://amtop.com
ADMIN_URL=https://cms.amtop.com
GCS_PROJECT_ID=your-gcs-project-id
GCS_BUCKET=amtop-production-media
GCP_KEYFILE_BASE64=your-base64-encoded-service-account-key
```

### 4.2 AMTOP Frontend Environment
```bash
cd ../amtop_landing_page
cp production.env.example .env.production

# Edit .env.production with your values
nano .env.production
```

**Required Variables:**
```bash
NODE_ENV=production
PAYLOAD_API_URL=https://cms.amtop.com/api
NEXT_PUBLIC_SITE_URL=https://amtop.com
NEXT_PUBLIC_APP_NAME=AMTOP
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 🚀 Step 5: Deploy Payload CMS

### 5.1 Build and Deploy
```bash
cd payload-cms

# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 5.2 Verify Deployment
```bash
# Check container status
docker-compose -f docker-compose.prod.yml ps

# Check logs
docker-compose -f docker-compose.prod.yml logs -f payload

# Test health endpoint
curl -f http://localhost:3000/api/health
```

## 🌐 Step 6: Deploy AMTOP Frontend

### 6.1 Build and Deploy
```bash
cd ../amtop_landing_page

# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 6.2 Verify Deployment
```bash
# Check container status
docker-compose -f docker-compose.prod.yml ps

# Check logs
docker-compose -f docker-compose.prod.yml logs -f amtop-frontend

# Test health endpoint
curl -f http://localhost:3001/health
```

## 🔒 Step 7: Security Hardening

### 7.1 Firewall Configuration
```bash
# Configure UFW firewall
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 27017/tcp # MongoDB (if external access needed)
sudo ufw enable
```

### 7.2 Fail2ban Setup
```bash
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 7.3 Regular Security Updates
```bash
# Create security update script
sudo tee /etc/cron.weekly/security-update << 'EOF'
#!/bin/bash
apt update && apt upgrade -y
apt autoremove -y
docker system prune -f
EOF

sudo chmod +x /etc/cron.weekly/security-update
```

## 📊 Step 8: Monitoring & Logging

### 8.1 Prometheus Configuration
```bash
# Create monitoring directory
mkdir -p payload-cms/monitoring
mkdir -p amtop_landing_page/monitoring

# Create Prometheus config for Payload CMS
cat > payload-cms/monitoring/prometheus.yml << 'EOF'
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'payload-cms'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: '/api/metrics'

  - job_name: 'amtop-frontend'
    static_configs:
      - targets: ['localhost:3001']
    metrics_path: '/api/metrics'

  - job_name: 'nginx'
    static_configs:
      - targets: ['localhost:80']
    metrics_path: '/nginx_status'
EOF

# Create Prometheus config for AMTOP Frontend
cat > amtop_landing_page/monitoring/prometheus.yml << 'EOF'
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'amtop-frontend'
    static_configs:
      - targets: ['localhost:3001']
    metrics_path: '/api/metrics'

  - job_name: 'nginx'
    static_configs:
      - targets: ['localhost:80']
    metrics_path: '/nginx_status'
EOF
```

### 8.2 Log Rotation
```bash
# Configure logrotate for Docker logs
sudo tee /etc/logrotate.d/docker << 'EOF'
/var/lib/docker/containers/*/*.log {
    rotate 7
    daily
    compress
    size=1M
    missingok
    delaycompress
    copytruncate
}
EOF
```

## 🔄 Step 9: Backup Strategy

### 9.1 Database Backup
```bash
# Create backup script
sudo tee /opt/backup-db.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# MongoDB backup
docker exec payload-cms_mongo_1 mongodump --out /data/backup
docker cp payload-cms_mongo_1:/data/backup $BACKUP_DIR/mongodb

# Compress backup
tar -czf $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).tar.gz $BACKUP_DIR/mongodb

# Cleanup
rm -rf $BACKUP_DIR/mongodb

# Keep only last 7 days of backups
find /opt/backups -type f -mtime +7 -delete
EOF

sudo chmod +x /opt/backup-db.sh

# Add to crontab (daily at 2 AM)
echo "0 2 * * * /opt/backup-db.sh" | sudo crontab -
```

### 9.2 Media Files Backup
```bash
# Create media backup script
sudo tee /opt/backup-media.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups/media/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# Backup media files
cp -r /opt/payload-cms/media-uploads/* $BACKUP_DIR/

# Compress backup
tar -czf $BACKUP_DIR/media-backup-$(date +%Y%m%d-%H%M%S).tar.gz $BACKUP_DIR/*

# Cleanup
rm -rf $BACKUP_DIR/*/

# Keep only last 30 days of media backups
find /opt/backups/media -type f -mtime +30 -delete
EOF

sudo chmod +x /opt/backup-media.sh

# Add to crontab (weekly on Sunday at 3 AM)
echo "0 3 * * 0 /opt/backup-media.sh" | sudo crontab -
```

## 🚀 Step 10: Performance Optimization

### 10.1 Nginx Optimization
```bash
# Optimize Nginx worker processes
sudo tee -a /etc/nginx/nginx.conf << 'EOF'
# Add to http block
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 65535;
    use epoll;
    multi_accept on;
}

http {
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;
}
EOF

sudo systemctl reload nginx
```

### 10.2 Docker Optimization
```bash
# Create Docker daemon configuration
sudo tee /etc/docker/daemon.json << 'EOF'
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}
EOF

sudo systemctl restart docker
```

## 🔍 Step 11: Testing & Validation

### 11.1 Load Testing
```bash
# Install Apache Bench
sudo apt install -y apache2-utils

# Test main page
ab -n 1000 -c 100 https://amtop.com/

# Test blog API
ab -n 500 -c 50 https://amtop.com/api/blog

# Test CMS admin
ab -n 100 -c 10 https://cms.amtop.com/admin
```

### 11.2 Security Testing
```bash
# Install security testing tools
sudo apt install -y nmap nikto

# Port scan
nmap -sS -O localhost

# Web vulnerability scan
nikto -h https://amtop.com
```

## 📈 Step 12: Maintenance & Updates

### 12.1 Automated Updates
```bash
# Create update script
sudo tee /opt/update-system.sh << 'EOF'
#!/bin/bash
echo "Starting system update..."

# Update system packages
apt update && apt upgrade -y

# Update Docker images
docker-compose -f /opt/payload-cms/docker-compose.prod.yml pull
docker-compose -f /opt/amtop_landing_page/docker-compose.prod.yml pull

# Restart services
docker-compose -f /opt/payload-cms/docker-compose.prod.yml up -d
docker-compose -f /opt/amtop_landing_page/docker-compose.prod.yml up -d

echo "System update completed!"
EOF

sudo chmod +x /opt/update-system.sh

# Add to crontab (weekly on Saturday at 4 AM)
echo "0 4 * * 6 /opt/update-system.sh" | sudo crontab -
```

### 12.2 Health Monitoring
```bash
# Create health check script
sudo tee /opt/health-check.sh << 'EOF'
#!/bin/bash
# Check Payload CMS
if ! curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "Payload CMS is down!" | mail -s "Service Alert" admin@amtop.com
fi

# Check AMTOP Frontend
if ! curl -f http://localhost:3001/health > /dev/null 2>&1; then
    echo "AMTOP Frontend is down!" | mail -s "Service Alert" admin@amtop.com
fi

# Check MongoDB
if ! docker exec payload-cms_mongo_1 mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
    echo "MongoDB is down!" | mail -s "Service Alert" admin@amtop.com
fi
EOF

sudo chmod +x /opt/health-check.sh

# Add to crontab (every 5 minutes)
echo "*/5 * * * * /opt/health-check.sh" | sudo crontab -
```

## 🎯 Production Checklist

- [ ] SSL certificates installed and configured
- [ ] Environment variables properly set
- [ ] Database credentials secured
- [ ] Firewall configured
- [ ] Monitoring and logging enabled
- [ ] Backup strategy implemented
- [ ] Load testing completed
- [ ] Security testing passed
- [ ] Performance optimized
- [ ] Documentation updated
- [ ] Team trained on deployment process
- [ ] Rollback plan prepared
- [ ] Support contacts configured
- [ ] SLA defined and monitored

## 🆘 Troubleshooting

### Common Issues

1. **SSL Certificate Errors**
   ```bash
   sudo certbot renew --dry-run
   sudo systemctl reload nginx
   ```

2. **Database Connection Issues**
   ```bash
   docker-compose -f docker-compose.prod.yml logs mongo
   docker exec -it payload-cms_mongo_1 mongosh
   ```

3. **Container Health Issues**
   ```bash
   docker-compose -f docker-compose.prod.yml ps
   docker-compose -f docker-compose.prod.yml logs -f
   ```

4. **Performance Issues**
   ```bash
   docker stats
   nginx -t
   sudo systemctl status nginx
   ```

## 📞 Support

For production deployment support:
- **Email**: devops@amtop.com
- **Slack**: #production-support
- **Documentation**: https://docs.amtop.com/deployment
- **Emergency**: +1-XXX-XXX-XXXX

---

**🎉 Congratulations! Your AMTOP system is now production-ready with enterprise-level features!**
