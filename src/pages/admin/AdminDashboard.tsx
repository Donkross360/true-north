import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Package, Users, ShoppingCart, AlertTriangle, Eye, DollarSign, Clock } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

const AdminDashboard: React.FC = () => {
  // Mock data
  const salesData = [
    { name: 'Mon', sales: 1200000, orders: 24 },
    { name: 'Tue', sales: 1900000, orders: 38 },
    { name: 'Wed', sales: 800000, orders: 16 },
    { name: 'Thu', sales: 2400000, orders: 48 },
    { name: 'Fri', sales: 3200000, orders: 64 },
    { name: 'Sat', sales: 2800000, orders: 56 },
    { name: 'Sun', sales: 1600000, orders: 32 }
  ];

  const categoryData = [
    { name: 'Phones', value: 65, color: '#3B82F6' },
    { name: 'Accessories', value: 20, color: '#10B981' },
    { name: 'Audio', value: 10, color: '#F59E0B' },
    { name: 'Power', value: 5, color: '#EF4444' }
  ];

  const topProducts = [
    { id: 1, name: 'iPhone 15 Pro Max', sales: 120, revenue: 222000000, stock: 15 },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', sales: 85, revenue: 140250000, stock: 12 },
    { id: 3, name: 'AirPods Pro 3rd Gen', sales: 200, revenue: 77000000, stock: 30 },
    { id: 4, name: 'Tecno Camon 30 Pro', sales: 95, revenue: 27075000, stock: 25 }
  ];

  const lowStockItems = [
    { id: 1, name: 'iPhone 15 Pro Max Natural Titanium', stock: 2, threshold: 5 },
    { id: 2, name: 'Galaxy Buds3 Pro Silver', stock: 1, threshold: 10 },
    { id: 3, name: 'Anker PowerCore 20000mAh Black', stock: 3, threshold: 15 }
  ];

  const recentOrders = [
    { id: 'TN-2024-001', customer: 'John Doe', amount: 1850000, status: 'processing', time: '5 min ago' },
    { id: 'TN-2024-002', customer: 'Jane Smith', amount: 385000, status: 'paid', time: '12 min ago' },
    { id: 'TN-2024-003', customer: 'Mike Johnson', amount: 285000, status: 'pending', time: '25 min ago' },
    { id: 'TN-2024-004', customer: 'Sarah Wilson', amount: 45000, status: 'shipped', time: '1 hour ago' }
  ];

  const stats = [
    { title: 'Today\'s Sales', value: '₦3,240,000', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Total Orders', value: '156', change: '+8.2%', icon: ShoppingCart, color: 'text-blue-600' },
    { title: 'Active Products', value: '342', change: '+2.1%', icon: Package, color: 'text-orange-600' },
    { title: 'Total Customers', value: '1,247', change: '+15.3%', icon: Users, color: 'text-purple-600' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'paid': return 'info';
      case 'processing': return 'info';
      case 'shipped': return 'success';
      case 'delivered': return 'success';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.color} font-medium`}>{stat.change} from yesterday</p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-100`}>
                <stat.icon size={24} className={stat.color} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">7-Day Sales Overview</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Orders</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'sales' ? formatPrice(Number(value)) : value,
                  name === 'sales' ? 'Revenue' : 'Orders'
                ]}
              />
              <Bar dataKey="sales" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <span>{item.name}</span>
                </div>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-600">
                    <span>{product.sales} sold</span>
                    <span>Stock: {product.stock}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-sm">{formatPrice(product.revenue)}</p>
                  <p className="text-xs text-gray-600">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Orders */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-sm">{order.id}</span>
                    <Badge variant={getStatusColor(order.status)} size="sm">
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">{formatPrice(order.amount)}</p>
                  <p className="text-xs text-gray-500">{order.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts & Low Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Alert */}
        <Card>
          <div className="flex items-center space-x-2 mb-6">
            <AlertTriangle size={20} className="text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">Low Stock Alert</h3>
            <Badge variant="warning" size="sm">{lowStockItems.length}</Badge>
          </div>
          <div className="space-y-3">
            {lowStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-sm text-gray-600">Threshold: {item.threshold} units</p>
                </div>
                <div className="text-right">
                  <Badge variant="danger" size="sm">{item.stock} left</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
              <Package size={24} className="text-blue-600 mb-2" />
              <p className="font-medium text-gray-900 text-sm">Add Product</p>
              <p className="text-xs text-gray-600">Add new inventory</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
              <ShoppingCart size={24} className="text-green-600 mb-2" />
              <p className="font-medium text-gray-900 text-sm">View Orders</p>
              <p className="text-xs text-gray-600">Manage orders</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <Users size={24} className="text-purple-600 mb-2" />
              <p className="font-medium text-gray-900 text-sm">Customers</p>
              <p className="text-xs text-gray-600">View customer list</p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
              <TrendingUp size={24} className="text-orange-600 mb-2" />
              <p className="font-medium text-gray-900 text-sm">Analytics</p>
              <p className="text-xs text-gray-600">View reports</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;