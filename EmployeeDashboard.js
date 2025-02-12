import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, Bell, User, X, Home, Calendar, DollarSign, Users, MessageSquare, Camera, ClipboardCheck, Book, Tool } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { name: "Mon", sales: 800, tips: 100 },
  { name: "Tue", sales: 900, tips: 120 },
  { name: "Wed", sales: 750, tips: 90 },
  { name: "Thu", sales: 1100, tips: 140 },
  { name: "Fri", sales: 1300, tips: 180 },
  { name: "Sat", sales: 1600, tips: 200 },
  { name: "Sun", sales: 1400, tips: 170 },
];

const EmployeeDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 pb-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </Button>
        <h2 className="text-xl font-semibold">Employee Dashboard</h2>
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
              <li className="p-2 border-b">Employee Profile</li>
              <li className="p-2 border-b">Payroll Details</li>
              <li className="p-2 border-b">Equipment Purchases</li>
              <li className="p-2 border-b">Performance Reports</li>
              <li className="p-2 border-b">Training & Compliance</li>
              <li className="p-2 border-b">Maintenance Requests</li>
              <li className="p-2 border-b">Barber Equipment Orders</li>
              <li className="p-2">Monthly Focus Points</li>
            </ul>
          </div>
        </div>
      )}

      {/* Quick Access Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">QR Code Check-in/Out</h3>
          <Button variant="outline" className="mt-2 flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" /> Scan QR Code
          </Button>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Upcoming Shifts</h3>
          <p className="text-2xl font-bold">10:00 AM - 6:00 PM</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Earnings Overview</h3>
          <p className="text-2xl font-bold text-green-600">$1,200</p>
        </Card>
        <Card className="p-4 text-center">
          <h3 className="text-lg font-semibold">Leave Tracker</h3>
          <p className="text-2xl font-bold">2 Days Remaining</p>
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
          <span className="text-xs">Schedule</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <DollarSign className="w-6 h-6" />
          <span className="text-xs">Performance</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <Book className="w-6 h-6" />
          <span className="text-xs">Training</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs">Messages</span>
        </Button>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
