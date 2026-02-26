import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-40 transition-colors duration-300">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-codeebot-blue dark:text-blue-300 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex h-2 w-2 rounded-full bg-codeebot-blue mr-2"></span>
          New Courses Available
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          和 <span className="text-codeebot-blue bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">CodeeBot</span> 一起学用 AI
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Snap, Code, Play – Your First Step to Create AI! <br className="hidden sm:block" />
          Join the community of makers and start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <button className="px-8 py-3.5 rounded-full bg-codeebot-blue text-white font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            Start Learning
          </button>
          <button className="px-8 py-3.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold text-lg shadow-md border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
