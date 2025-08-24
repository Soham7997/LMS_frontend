import React from 'react';
import { Users, Calendar, Settings, TrendingUp, DollarSign, Award, BookOpen, MessageSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const MainHeadDashboard: React.FC = () => {
  const { user } = useAuth();

  const staffMembers = [
    { id: '1', name: 'Tanaka Sensei', role: 'Senior Teacher', status: 'Active', students: 24 },
    { id: '2', name: 'Sato Sensei', role: 'Teacher', status: 'Active', students: 18 },
    { id: '3', name: 'Admin User', role: 'Administrator', status: 'Active', students: 0 },
    { id: '4', name: 'Yamada Sensei', role: 'Teacher', status: 'On Leave', students: 15 }
  ];

  const upcomingMeetings = [
    {
      id: '1',
      title: 'Monthly Staff Meeting',
      date: '2024-01-20',
      time: '10:00 AM',
      attendees: 8,
      type: 'Staff Meeting'
    },
    {
      id: '2',
      title: 'Curriculum Review',
      date: '2024-01-22',
      time: '2:00 PM',
      attendees: 5,
      type: 'Academic'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Main Head Dashboard</h1>
        <p className="text-red-100">Oversee all operations and strategic management</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-xs text-green-600">+12% this month</p>
            </div>
          </div>
        </div>
      </div>
        

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Oversee Meetings */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Oversee Meetings</h2>
          </div>
          
          <div className="space-y-3 mb-4">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{meeting.type}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {meeting.date} at {meeting.time}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <Users className="w-4 h-4 inline mr-1" />
                  {meeting.attendees} attendees
                </p>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Join Meeting
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            Schedule New Meeting
          </button>
        </div>

        {/* All Staff Powers */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Settings className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Staff Management</h2>
          </div>
          
          <div className="space-y-3 mb-4">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-gray-900 text-sm">{staff.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    staff.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {staff.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{staff.role}</p>
                {staff.students > 0 && (
                  <p className="text-xs text-gray-500">{staff.students} students</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <button className="py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
              Manage Staff
            </button>
            <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Add Staff
            </button>
          </div>
        </div>
      </div>
      {/* Recent Decisions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Decisions & Actions</h2>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Approved new N1 advanced course curriculum</span>
            <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Hired new teacher for intermediate classes</span>
            <span className="text-xs text-gray-500 ml-auto">3 days ago</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Implemented new student feedback system</span>
            <span className="text-xs text-gray-500 ml-auto">1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeadDashboard;