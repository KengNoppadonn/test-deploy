# test-deploy

# 🚀 เว็บไซต์ทดสอบ Port Forward

เว็บไซต์ง่ายๆ สำหรับทดสอบการทำ Port Forward ที่ใช้ **Port 7856**

## ✨ คุณสมบัติ

- 🌐 Express.js Web Server
- 🎨 Modern UI ด้วย Glassmorphism Design
- 📱 Responsive Design
- ⏰ Real-time Timestamp
- 🔧 API Endpoints สำหรับทดสอบ
- 📊 Health Check Endpoint

## 🛠️ การติดตั้ง

### วิธีที่ 1: รันโดยตรง (Development)

1. **ติดตั้ง Dependencies:**
   ```bash
   npm install
   ```

2. **รัน Server:**
   ```bash
   npm start
   ```

3. **สำหรับ Development (Auto-reload):**
   ```bash
   npm run dev
   ```

### วิธีที่ 2: ใช้ Docker (Production)

1. **Build Docker Image:**
   ```bash
   docker build -t port-forward-test .
   ```

2. **รัน Container:**
   ```bash
   docker run -d -p 7856:7856 --name port-forward-test-app port-forward-test
   ```

3. **ใช้ Docker Compose (แนะนำ):**
   ```bash
   docker-compose up -d
   ```

4. **ดู Logs:**
   ```bash
   docker-compose logs -f
   ```

5. **หยุด Container:**
   ```bash
   docker-compose down
   ```

## 🌐 การเข้าถึง

หลังจากรัน server แล้ว คุณสามารถเข้าถึงได้ที่:

- **หน้าหลัก:** http://localhost:7856
- **Health Check:** http://localhost:7856/health
- **API Status:** http://localhost:7856/api/status

## 🔧 การทดสอบ Port Forward

### 1. ทดสอบในเครื่องเดียวกัน
```bash
curl http://localhost:7856
```

### 2. ทดสอบจากเครื่องอื่นในเครือข่ายเดียวกัน
```bash
curl http://[IP_ADDRESS]:7856
```

### 3. ทดสอบ Health Check
```bash
curl http://localhost:7856/health
```

## 📋 Endpoints ที่มี

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | หน้าหลักของเว็บไซต์ |
| `/health` | GET | Health check endpoint |
| `/api/status` | GET | API status information |

## 🎯 การใช้งานสำหรับ Port Forward

1. **รัน Server บนเครื่องของคุณ**
2. **ตั้งค่า Port Forward บน Router:**
   - External Port: 7856 (หรือ port อื่นที่ต้องการ)
   - Internal Port: 7856
   - Internal IP: IP ของเครื่องที่รัน server
3. **ทดสอบจากภายนอก:**
   - เข้า http://[YOUR_PUBLIC_IP]:7856
   - หรือ http://[YOUR_DOMAIN]:7856

## 🔍 การตรวจสอบ

หาก Port Forward ทำงานได้สำเร็จ คุณจะเห็น:
- ✅ หน้าเว็บที่สวยงาม
- 📊 ข้อมูล Port 7856
- ⏰ เวลาปัจจุบันที่อัพเดทแบบ Real-time

## 🐳 Docker Commands

### Build และ Run
```bash
# Build image
docker build -t port-forward-test .

# Run container
docker run -d -p 7856:7856 --name port-forward-test-app port-forward-test

# หรือใช้ docker-compose
docker-compose up -d
```

### Management
```bash
# ดู logs
docker logs port-forward-test-app

# หยุด container
docker stop port-forward-test-app

# ลบ container
docker rm port-forward-test-app

# ดู images
docker images
```

### Health Check
```bash
# ตรวจสอบ container status
docker ps

# ตรวจสอบ health check
docker inspect port-forward-test-app | grep Health -A 10
```

## 🚨 หมายเหตุ

- Server จะรันบน `0.0.0.0` เพื่อให้เข้าถึงได้จากภายนอก
- ตรวจสอบ Firewall settings ของระบบ
- ตรวจสอบ Router Port Forward settings
- Docker container มี health check และ auto-restart
- ใช้ non-root user เพื่อความปลอดภัย

---

**สร้างโดย:** Port Forward Test Project  
**Port:** 7856  
**Framework:** Express.js  
**Container:** Docker Alpine Node.js 18 