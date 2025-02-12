import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, Bell, User, X, Home, Calendar, DollarSign, Users, MessageSquare, Camera } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const salesData = [
  { name: "Mon", sales: 1200, tips: 150 },
  { name: "Tue", sales: 1500, tips: 200 },
  { name: "Wed", sales: 1100, tips: 170 },
  { name: "Thu", sales: 1800, tips: 250 },
  { name: "Fri", sales: 2000, tips: 300 },
  { name: "Sat", sales: 2200, tips: 350 },
  { name: "Sun", sales: 1700, tips: 280 },
];

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 pb-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </Button>
        <h2 className="text-xl font-semibold">Branch Dashboard</h2>
        <div className="flex gap-2">
          <Button variant="ghost">
            <Bell className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <User className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex">
          <div className="bg-white w-64 p-4 shadow-lg">
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
            <ul className="mt-4">
              <li className="p-2 border-b">Employee Profiles</li>
              <li className="p-2 border-b">Role-Based Access Control</li>
              <li className="p-2 border-b">Payroll Module</li>
              <li className="p-2 border-b">Equipment Purchases</li>
              <li className="p-2 border-b">Employee Retention Analytics</li>
              <li className="p-2 border-b">Training Library</li>
              <li className="p-2 border-b">Training Progress Tracker</li>
              <li className="p-2 border-b">Municipality Files</li>
              <li className="p-2 border-b">Barber Equipment Orders</li>
              <li className="p-2">Monthly Focus Points</li>
            </ul>
          </div>
        </div>
      )}

      {/* Quick Access Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Today's Sales</h3>
          <p className="text-2xl font-bold text-green-600">$2,500</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Total Appointments</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Pending Maintenance</h3>
          <p className="text-2xl font-bold text-red-600">2 Requests</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Employee Attendance</h3>
          <p className="text-2xl font-bold">9/10 Present</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">QR Code Check-in/Out</h3>
          <Button variant="outline" className="mt-2 flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" /> Scan QR Code
          </Button>
        </Card>
      </div>

      {/* Sales & Tips Chart */}
      <Card className="p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Sales & Tips</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="tips" stroke="#f59e0b" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around items-center">
        <Button variant="ghost" className="flex flex-col items-center">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Appointments</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <DollarSign className="w-6 h-6" />
          <span className="text-xs">Sales</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Users className="w-6 h-6" />
          <span className="text-xs">Employees</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs">Messages</span>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
