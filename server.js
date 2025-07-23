const express = require('express');
const path = require('path');

const app = express();
const PORT = 7856;

// Serve static files
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ทดสอบ Port Forward - Port 7856</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
            
            .container {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 40px;
                text-align: center;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                max-width: 600px;
                width: 90%;
            }
            
            h1 {
                font-size: 2.5rem;
                margin-bottom: 20px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }
            
            .port-info {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 15px;
                padding: 20px;
                margin: 20px 0;
                border: 2px solid rgba(255, 255, 255, 0.3);
            }
            
            .port-number {
                font-size: 3rem;
                font-weight: bold;
                color: #ffd700;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            
            .status {
                background: #4CAF50;
                color: white;
                padding: 10px 20px;
                border-radius: 25px;
                display: inline-block;
                margin: 20px 0;
                font-weight: bold;
            }
            
            .info {
                margin: 20px 0;
                line-height: 1.6;
            }
            
            .timestamp {
                font-size: 0.9rem;
                opacity: 0.8;
                margin-top: 20px;
            }
            
            .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin: 30px 0;
            }
            
            .feature {
                background: rgba(255, 255, 255, 0.1);
                padding: 15px;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .feature h3 {
                color: #ffd700;
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 ทดสอบ Port Forward</h1>
            
            <div class="port-info">
                <div class="port-number">7856</div>
                <p>Port ที่ใช้งาน</p>
            </div>
            
            <div class="status">✅ Server ทำงานปกติ</div>
            
            <div class="info">
                <p>เว็บไซต์นี้ถูกสร้างขึ้นเพื่อทดสอบการทำ Port Forward</p>
                <p>หากคุณเห็นหน้านี้ แสดงว่า Port Forward ทำงานได้สำเร็จ!</p>
            </div>
            
            <div class="features">
                <div class="feature">
                    <h3>🌐 Express.js</h3>
                    <p>ใช้ Express.js เป็น web framework</p>
                </div>
                <div class="feature">
                    <h3>🎨 Modern UI</h3>
                    <p>ออกแบบด้วย CSS3 และ Glassmorphism</p>
                </div>
                <div class="feature">
                    <h3>📱 Responsive</h3>
                    <p>รองรับการแสดงผลบนทุกอุปกรณ์</p>
                </div>
            </div>
            
            <div class="timestamp">
                เวลาเริ่มต้น: ${new Date().toLocaleString('th-TH')}
            </div>
        </div>
        
        <script>
            // Update timestamp every second
            setInterval(() => {
                const timestamp = document.querySelector('.timestamp');
                timestamp.textContent = 'เวลาปัจจุบัน: ' + new Date().toLocaleString('th-TH');
            }, 1000);
            
            // Add some interactive effects
            document.addEventListener('DOMContentLoaded', () => {
                const container = document.querySelector('.container');
                container.style.animation = 'fadeIn 1s ease-in';
                
                // Add click effect
                container.addEventListener('click', () => {
                    container.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        container.style.transform = 'scale(1)';
                    }, 100);
                });
            });
        </script>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    </body>
    </html>
    `);
});

// API endpoint to test
app.get('/api/status', (req, res) => {
    res.json({
        status: 'success',
        message: 'Port Forward Test Server',
        port: PORT,
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server เริ่มทำงานแล้ว!`);
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`🌐 Network: http://0.0.0.0:${PORT}`);
    console.log(`📊 Health Check: http://localhost:${PORT}/health`);
    console.log(`🔧 API Status: http://localhost:${PORT}/api/status`);
    console.log(`\n✨ เว็บไซต์พร้อมสำหรับทดสอบ Port Forward แล้ว!`);
}); 