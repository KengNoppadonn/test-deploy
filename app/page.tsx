'use client'

import { useState } from 'react'
import { Search, Car, MapPin, Filter, Heart, Star, Phone, MessageCircle } from 'lucide-react'

interface Car {
  id: number
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType: string
  transmission: string
  location: string
  image: string
  rating: number
  isFavorite: boolean
}

const mockCars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camอ้วน',
    year: 2003,
    price: 1,
    mileage: 120,
    fuelType: 'ความแค้น',
    transmission: 'อัตโนมัติ(ขับเคลื่อนด้วยแรงด่า)',
    location: 'เกาะรัสเซีย',
    image: '/FB_IMG_1741625621406.jpg',
    rating: 1,
    isFavorite: false
  },
  {
    id: 2,
    brand: 'Honba',
    model: 'Ciciv',
    year: 2000,
    price: 20,
    mileage: 60000,
    fuelType: 'หี',
    transmission: 'อัตโนมัติ(ใช้ระบบหีนำทาง)',
    location: 'เลย',
    image: '/IMG20240804142706.jpg',
    rating: 2,
    isFavorite: false
  },
  {
    id: 3,
    brand: 'คนใจเดียว',
    model: 'สูงยาว',
    year: 0,
    price: 950000,
    mileage: 1,
    fuelType: 'พลังบุญ',
    transmission: '(ขับเคลื่อนด้วยพลังบุญ)',
    location: 'ปทุมธานี',
    image: '/IMG20250514150823.jpg',
    rating: 5,
    isFavorite: true
  }
]

export default function Home() {
  const [cars, setCars] = useState<Car[]>(mockCars)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const brands = ['Toyota', 'Honda', 'Mazda', 'Nissan', 'Mitsubishi', 'Ford']

  const toggleFavorite = (id: number) => {
    setCars(cars.map(car => 
      car.id === id ? { ...car, isFavorite: !car.isFavorite } : car
    ))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH').format(price)
  }

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrand === '' || car.brand === selectedBrand
    const matchesPrice = priceRange === '' || 
      (priceRange === '0-500k' && car.price <= 500000) ||
      (priceRange === '500k-1m' && car.price > 500000 && car.price <= 1000000) ||
      (priceRange === '1m+' && car.price > 1000000)
    
    return matchesSearch && matchesBrand && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">ตลาดรถยนต์มือสาม</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600">
                <MessageCircle className="h-5 w-5 mr-2" />
                ติดต่อเรา
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                ลงขายรถ
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ค้นหารถยนต์..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">ทุกยี่ห้อ</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">ทุกราคา</option>
              <option value="0-500k">ต่ำกว่า 500,000 บาท</option>
              <option value="500k-1m">500,000 - 1,000,000 บาท</option>
              <option value="1m+">มากกว่า 1,000,000 บาท</option>
            </select>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
              <Filter className="h-5 w-5 mr-2" />
              กรอง
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">พบรถยนต์ {filteredCars.length} คัน</p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover "
                
                />
                <button
                  onClick={() => toggleFavorite(car.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    car.isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${car.isFavorite ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{car.brand} {car.model}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{car.rating}</span>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  ฿{formatPrice(car.price)}
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>ระยะทาง:</span>
                    <span>{formatPrice(car.mileage)} กม.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เชื้อเพลิง:</span>
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เกียร์:</span>
                    <span>{car.transmission}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {car.location}
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    โทร
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    แชท
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบรถยนต์ที่ค้นหา</h3>
            <p className="text-gray-600">ลองเปลี่ยนเงื่อนไขการค้นหาดูครับ</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ตลาดรถยนต์มือสอง</h3>
              <p className="text-gray-400">เว็บไซต์ขายรถยนต์มือสองที่ดีที่สุดในประเทศไทย</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">บริการ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ขายรถยนต์</li>
                <li>ซื้อรถยนต์</li>
                <li>ประเมินราคา</li>
                <li>ประกันรถยนต์</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">ช่วยเหลือ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>วิธีใช้งาน</li>
                <li>คำถามที่พบบ่อย</li>
                <li>ติดต่อเรา</li>
                <li>เงื่อนไขการใช้งาน</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">ติดต่อ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>โทร: 02-123-4567</li>
                <li>อีเมล: info@usedcar.com</li>
                <li>Line: @usedcar</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ตลาดรถยนต์มือสอง. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 