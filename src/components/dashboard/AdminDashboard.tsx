import React from 'react';
import { BookOpen, Video, Users, Calendar, FileText, Settings, TrendingUp, Award } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const recentMaterials = [
    {
      id: '1',
      title: 'N5 Grammar Workbook',
      type: 'PDF',
      uploadedBy: 'Tanaka Sensei',
      date: '2024-01-14',
      course: 'Beginner'
    },
    {
      id: '2',
      title: 'Conversation Practice Video',
      type: 'Video',
      uploadedBy: 'Sato Sensei',
      date: '2024-01-13',
      course: 'Intermediate'
    }
  ];

  const recentVideos = [
    {
      id: '1',
      title: 'Advanced Keigo Usage',
      instructor: 'Yamada Sensei',
      duration: '52 min',
      views: 45,
      date: '2024-01-12'
    },
    {
      id: '2',
      title: 'Business Japanese Basics',
      instructor: 'Tanaka Sensei',
      duration: '38 min',
      views: 67,
      date: '2024-01-11'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-purple-100">Manage content and oversee platform activities</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Active Courses</h3>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Video Lectures</h3>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Post Study Materials */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Study Materials</h2>
          </div>
          
          <div className="space-y-3 mb-4">
            {recentMaterials.map((material) => (
              <div key={material.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-gray-900 text-sm">{material.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{material.type}</span>
                </div>
                <p className="text-sm text-gray-600">By {material.uploadedBy} • {material.date}</p>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{material.course}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
            Upload New Material
          </button>
        </div>

        {/* Post Video Lectures */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Video Lectures</h2>
          </div>
          
          <div className="space-y-3 mb-4">
            {recentVideos.map((video) => (
              <div key={video.id} className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 text-sm mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  By {video.instructor} • {video.duration}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{video.views} views</span>
                  <span className="text-xs text-gray-500">{video.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            Upload New Video
          </button>
        </div>
      </div>

      {/* Management Tools */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Management Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900">User Management</h3>
            <p className="text-sm text-gray-600">Manage students and teachers</p>
          </button>
          
          <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
            <BookOpen className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-medium text-gray-900">Course Management</h3>
            <p className="text-sm text-gray-600">Create and edit courses</p>
          </button>
          
        </div>
      </div>

      {/* Recent Activity */}
      {/* <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">New student enrolled in Beginner course</span>
            <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Tanaka Sensei uploaded new material</span>
            <span className="text-xs text-gray-500 ml-auto">4 hours ago</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Video lecture published for N3 level</span>
            <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminDashboard;