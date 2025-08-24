import React from 'react';
import { Video, FileText, Calendar, Users, BookOpen, MessageSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();

  const upcomingClasses = [
    {
      id: '1',
      title: 'Beginner Japanese - Class 5',
      date: '2024-01-15',
      time: '10:00 AM',
      students: 12,
      level: 'N5'
    },
    {
      id: '2',
      title: 'Elementary Japanese - Class 8',
      date: '2024-01-15',
      time: '2:00 PM',
      students: 8,
      level: 'N4'
    }
  ];

  const recentNotes = [
    {
      id: '1',
      title: 'Hiragana Teaching Tips',
      content: 'Students are struggling with similar characters...',
      date: '2024-01-14',
      course: 'Beginner'
    },
    {
      id: '2',
      title: 'Grammar Lesson Plan',
      content: 'Focus on particle usage in next class...',
      date: '2024-01-13',
      course: 'Elementary'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
        <p className="text-blue-100">Manage your classes and students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conduct Meeting */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Conduct Meeting</h2>
          </div>
          
          <div className="space-y-3">
            {upcomingClasses.map((class_) => (
              <div key={class_.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{class_.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{class_.level}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {class_.date} at {class_.time}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <Users className="w-4 h-4 inline mr-1" />
                  {class_.students} students
                </p>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Start Meeting
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Notes */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Share Notes</h2>
          </div>
          
          <div className="space-y-3 mb-4">
            {recentNotes.map((note) => (
              <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-gray-900 text-sm">{note.title}</h3>
                  <span className="text-xs text-gray-500">{note.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{note.content}</p>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{note.course}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
            Create New Note
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
            <BookOpen className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-medium text-gray-900">Upload Materials</h3>
            <p className="text-sm text-gray-600">Share study resources</p>
          </button>
          
          <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-medium text-gray-900">View Students</h3>
            <p className="text-sm text-gray-600">Manage class roster</p>
          </button>
          
          <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">Schedule Class</h3>
            <p className="text-sm text-gray-600">Plan upcoming sessions</p>
          </button>
          
          {/* <button className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-left">
            <MessageSquare className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-medium text-gray-900">Class Discussion</h3>
            <p className="text-sm text-gray-600">Engage with students</p>
          </button> */}
        </div>
      </div>

      {/* Class Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
        {/* <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Total Students</h3>
              <p className="text-2xl font-bold text-blue-600">24</p>
            </div>
          </div>
        </div> */}
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Active Courses</h3>
              <p className="text-2xl font-bold text-green-600">3</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">This Week</h3>
              <p className="text-2xl font-bold text-purple-600">8 Classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;