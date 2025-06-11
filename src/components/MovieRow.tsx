
import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  rating: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  return (
    <section className="mb-12">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-16">
        {title}
      </h2>
      
      <div className="px-4 md:px-16">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-64 md:w-80">
              <MovieCard 
                title={movie.title}
                image={movie.image}
                year={movie.year}
                rating={movie.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieRow;
