
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

const Index = () => {
  // Sample movie data
  const trendingMovies = [
    {
      id: 1,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.7"
    },
    {
      id: 2,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.9"
    },
    {
      id: 3,
      title: "Ocean's Deep",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=225&fit=crop",
      year: "2023",
      rating: "7.8"
    },
    {
      id: 4,
      title: "Digital World",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.2"
    },
    {
      id: 5,
      title: "Forest Tales",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2023",
      rating: "7.5"
    }
  ];

  const popularMovies = [
    {
      id: 6,
      title: "Tech Revolution",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
      year: "2022",
      rating: "8.4"
    },
    {
      id: 7,
      title: "Matrix Reloaded",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "2022",
      rating: "8.8"
    },
    {
      id: 8,
      title: "Nature's Call",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2022",
      rating: "7.9"
    },
    {
      id: 9,
      title: "Whale Song",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=225&fit=crop",
      year: "2022",
      rating: "8.1"
    },
    {
      id: 10,
      title: "Screen Life",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop",
      year: "2022",
      rating: "7.6"
    }
  ];

  const tvShows = [
    {
      id: 11,
      title: "Virtual Reality",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.6"
    },
    {
      id: 12,
      title: "Ocean Adventures",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.3"
    },
    {
      id: 13,
      title: "Digital Dreams",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop",
      year: "2023",
      rating: "7.7"
    },
    {
      id: 14,
      title: "Future World",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.0"
    },
    {
      id: 15,
      title: "Green Planet",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop",
      year: "2023",
      rating: "8.5"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroBanner />
      
      <div className="relative z-10 -mt-32 pb-16">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular Movies" movies={popularMovies} />
        <MovieRow title="TV Shows" movies={tvShows} />
      </div>
      
      {/* Footer */}
      <footer className="bg-black/50 text-center py-8 text-gray-400">
        <p>&copy; 2024 CineFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
