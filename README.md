# ตลาดรถยนต์มือสอง - Used Car Marketplace

เว็บไซต์ขายรถยนต์มือสองที่สร้างด้วย Next.js และ TypeScript

## ✨ คุณสมบัติ

- 🚗 แสดงรายการรถยนต์มือสอง
- 🔍 ระบบค้นหาและกรองข้อมูล
- 💰 แสดงราคาและรายละเอียดรถยนต์
- ❤️ ระบบเพิ่มรถยนต์ในรายการโปรด
- 📱 Responsive Design รองรับทุกอุปกรณ์
- 🎨 UI/UX ที่ทันสมัยและใช้งานง่าย

## 🛠️ เทคโนโลยีที่ใช้

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hooks** - State Management

## 🚀 การติดตั้งและใช้งาน

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. รันในโหมด Development

```bash
npm run dev
```

เว็บไซต์จะเปิดที่: http://localhost:7856

### 3. Build สำหรับ Production

```bash
npm run build
npm start
```

## 📁 โครงสร้างโปรเจค

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # หน้าหลัก
│   └── globals.css        # Global styles
├── public/                # Static files
├── package.json           # Dependencies
├── next.config.js         # Next.js config
├── tailwind.config.ts     # Tailwind config
└── tsconfig.json          # TypeScript config
```

## 🎯 ฟีเจอร์หลัก

### หน้าหลัก
- แสดงรายการรถยนต์มือสอง
- ระบบค้นหาตามยี่ห้อและรุ่น
- กรองตามราคา
- เพิ่มรถยนต์ในรายการโปรด

### ข้อมูลรถยนต์
- รูปภาพรถยนต์
- ราคา
- ปีที่ผลิต
- ระยะทางที่ใช้งาน
- ประเภทเชื้อเพลิง
- ระบบเกียร์
- สถานที่ตั้ง
- คะแนนรีวิว

## 🎨 การออกแบบ

- ใช้ Tailwind CSS สำหรับ styling
- Responsive design รองรับทุกขนาดหน้าจอ
- Modern UI ด้วย gradient และ shadow effects
- Icon จาก Lucide React

## 📱 Responsive Design

เว็บไซต์รองรับการแสดงผลบน:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔧 การพัฒนา

### เพิ่มรถยนต์ใหม่

แก้ไขข้อมูลใน `app/page.tsx` ในส่วน `mockCars` array:

```typescript
{
  id: 7,
  brand: 'BMW',
  model: 'X5',
  year: 2022,
  price: 2500000,
  mileage: 25000,
  fuelType: 'เบนซิน',
  transmission: 'อัตโนมัติ',
  location: 'กรุงเทพมหานคร',
  image: 'https://example.com/image.jpg',
  rating: 4.8,
  isFavorite: false
}
```

### เพิ่มฟีเจอร์ใหม่

1. สร้าง component ใหม่ใน `components/` folder
2. Import และใช้งานใน `app/page.tsx`
3. อัปเดต TypeScript interfaces ตามต้องการ

## 🚀 Deployment

### Vercel (แนะนำ)

1. Push code ไปยัง GitHub
2. เชื่อมต่อกับ Vercel
3. Deploy อัตโนมัติ

### Docker

```bash
# Build image
docker build -t used-car-marketplace .

# Run container
docker run -p 7856:7856 used-car-marketplace
```

## 📞 ติดต่อ

- 📧 Email: info@usedcar.com
- 📱 Phone: 02-123-4567
- 💬 Line: @usedcar

## 📄 License

MIT License - ดูรายละเอียดใน [LICENSE](LICENSE) file

---

**สร้างด้วย ❤️ โดย Next.js และ TypeScript** 