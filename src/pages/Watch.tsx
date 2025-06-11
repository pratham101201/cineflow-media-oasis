
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { ArrowLeft, Plus, ThumbsUp, ThumbsDown, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Watch = () => {
  const { id } = useParams();
  
  // Mock movie data - in real app, fetch from your backend
  const movie = {
    id: 1,
    title: "The Matrix",
    description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
    year: "1999",
    rating: "8.7",
    genre: "Sci-Fi, Action",
    duration: "2h 16m",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", // Sample video
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Player Section */}
      <div className="relative">
        <VideoPlayer
          src={movie.videoUrl}
          poster={movie.posterUrl}
          title={movie.title}
        />
        
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors z-10"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Movie Info Section */}
      <div className="px-4 md:px-16 py-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
            <span className="text-green-400 font-semibold">⭐ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">{movie.genre}</span>
          </div>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl">
            {movie.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-white text-black hover:bg-gray-200">
              <Plus size={20} className="mr-2" />
              My List
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <ThumbsUp size={20} className="mr-2" />
              Like
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <ThumbsDown size={20} className="mr-2" />
              Dislike
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              <Share size={20} className="mr-2" />
              Share
            </Button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cast & Crew</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-semibold">Director:</span> Lana Wachowski, Lilly Wachowski</p>
                <p><span className="font-semibold">Cast:</span> Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss</p>
                <p><span className="font-semibold">Genre:</span> {movie.genre}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="font-semibold">Release Year:</span> {movie.year}</p>
                <p><span className="font-semibold">Duration:</span> {movie.duration}</p>
                <p><span className="font-semibold">Language:</span> English</p>
                <p><span className="font-semibold">Quality:</span> HD, 4K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
