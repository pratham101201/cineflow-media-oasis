
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X } from 'lucide-react';

interface MovieData {
  title: string;
  description: string;
  year: string;
  rating: string;
  genre: string;
  duration: string;
  poster: File | null;
  video: File | null;
}

interface MovieUploadFormProps {
  onSubmit: (movieData: MovieData) => void;
  onCancel: () => void;
}

const MovieUploadForm: React.FC<MovieUploadFormProps> = ({ onSubmit, onCancel }) => {
  const [movieData, setMovieData] = useState<MovieData>({
    title: '',
    description: '',
    year: '',
    rating: '',
    genre: '',
    duration: '',
    poster: null,
    video: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(movieData);
  };

  const handleFileChange = (field: 'poster' | 'video', file: File | null) => {
    setMovieData(prev => ({ ...prev, [field]: file }));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Upload New Movie</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title" className="text-gray-300">Title</Label>
            <Input
              id="title"
              value={movieData.title}
              onChange={(e) => setMovieData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="year" className="text-gray-300">Year</Label>
            <Input
              id="year"
              value={movieData.year}
              onChange={(e) => setMovieData(prev => ({ ...prev, year: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="rating" className="text-gray-300">Rating</Label>
            <Input
              id="rating"
              value={movieData.rating}
              onChange={(e) => setMovieData(prev => ({ ...prev, rating: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="e.g., 8.5"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="genre" className="text-gray-300">Genre</Label>
            <Input
              id="genre"
              value={movieData.genre}
              onChange={(e) => setMovieData(prev => ({ ...prev, genre: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="e.g., Action, Drama"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="duration" className="text-gray-300">Duration</Label>
            <Input
              id="duration"
              value={movieData.duration}
              onChange={(e) => setMovieData(prev => ({ ...prev, duration: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="e.g., 2h 30m"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="text-gray-300">Description</Label>
          <textarea
            id="description"
            value={movieData.description}
            onChange={(e) => setMovieData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full h-24 bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 resize-none"
            required
          />
        </div>

        {/* File Upload Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Poster Upload */}
          <div>
            <Label className="text-gray-300">Movie Poster</Label>
            <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('poster', e.target.files?.[0] || null)}
                className="hidden"
                id="poster-upload"
              />
              <label htmlFor="poster-upload" className="cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-400">
                  {movieData.poster ? movieData.poster.name : 'Click to upload poster'}
                </p>
              </label>
            </div>
          </div>

          {/* Video Upload */}
          <div>
            <Label className="text-gray-300">Movie Video</Label>
            <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange('video', e.target.files?.[0] || null)}
                className="hidden"
                id="video-upload"
              />
              <label htmlFor="video-upload" className="cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-400">
                  {movieData.video ? movieData.video.name : 'Click to upload video'}
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
            Upload Movie
          </Button>
          <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MovieUploadForm;
