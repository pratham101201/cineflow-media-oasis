
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Users, Film } from 'lucide-react';
import MovieUploadForm from './MovieUploadForm';

interface Movie {
  id: number;
  title: string;
  year: string;
  rating: string;
  genre: string;
  status: 'active' | 'draft';
}

const AdminDashboard = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [movies] = useState<Movie[]>([
    { id: 1, title: "The Matrix", year: "1999", rating: "8.7", genre: "Sci-Fi", status: "active" },
    { id: 2, title: "Inception", year: "2010", rating: "8.8", genre: "Thriller", status: "active" },
    { id: 3, title: "Interstellar", year: "2014", rating: "8.6", genre: "Sci-Fi", status: "draft" },
  ]);

  const handleMovieUpload = (movieData: any) => {
    console.log('Movie data to upload:', movieData);
    // Here you would integrate with your Python backend
    setShowUploadForm(false);
  };

  if (showUploadForm) {
    return (
      <div className="min-h-screen bg-black p-8">
        <MovieUploadForm
          onSubmit={handleMovieUpload}
          onCancel={() => setShowUploadForm(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your movie collection and platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Movies</p>
                <p className="text-2xl font-bold">342</p>
              </div>
              <Film className="text-primary" size={32} />
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Users className="text-green-500" size={32} />
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Views Today</p>
                <p className="text-2xl font-bold">8,432</p>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-sm">👁</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Storage Used</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-sm">💾</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8">
          <Button
            onClick={() => setShowUploadForm(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus size={20} className="mr-2" />
            Add New Movie
          </Button>
        </div>

        {/* Movies Table */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-semibold">Recent Movies</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Genre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {movies.map((movie) => (
                  <tr key={movie.id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{movie.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{movie.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">⭐ {movie.rating}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{movie.genre}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        movie.status === 'active' 
                          ? 'bg-green-900/50 text-green-400' 
                          : 'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {movie.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
