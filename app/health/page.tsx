export default function HealthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Healthy</h1>
        <p className="text-gray-600">Server is running on port 7856</p>
        <p className="text-sm text-gray-500 mt-2">
          {new Date().toLocaleString('th-TH')}
        </p>
      </div>
    </div>
  )
} 