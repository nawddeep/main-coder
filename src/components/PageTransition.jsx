import { useEffect, useState } from 'react';

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500"
         style={{ opacity: progress === 100 ? 0 : 1 }}>
      <div className="text-center space-y-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto animate-scale-in">
            <span className="text-white font-bold text-3xl">C</span>
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mx-auto animate-ping opacity-20"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-slate-600 text-sm font-medium animate-pulse">
          Loading Experience...
        </p>
      </div>
    </div>
  );
};

export default PageTransition;