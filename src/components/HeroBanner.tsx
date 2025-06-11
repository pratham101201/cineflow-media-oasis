
import React from 'react';
import { Play, Info } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-in">
          The Matrix
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed fade-in">
          A computer programmer is led to fight an underground war against powerful computers 
          who have constructed his entire reality with a system called the Matrix.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 fade-in">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
            <Play className="w-5 h-5" fill="currentColor" />
            Play
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-600/70 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-600/90 transition-colors">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
