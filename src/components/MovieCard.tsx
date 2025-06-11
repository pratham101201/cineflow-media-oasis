
import React from 'react';

interface MovieCardProps {
  title: string;
  image: string;
  year?: string;
  rating?: string;
  movieId?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, year, rating, movieId = 1 }) => {
  const handleClick = () => {
    window.location.href = `/watch/${movieId}`;
  };

  return (
    <div className="movie-card-hover group cursor-pointer" onClick={handleClick}>
      <div className="relative aspect-video bg-gray-800 rounded-md overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-xs text-gray-300">
            {year && <span>{year}</span>}
            {rating && <span>⭐ {rating}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
