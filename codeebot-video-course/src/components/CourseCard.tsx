"use client";

import Image from 'next/image';
import { Play, Clock, BarChart } from 'lucide-react';
import { Course } from '@/types/course';
import { useState } from 'react';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const CourseCard = ({ course, onClick }: CourseCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col"
      onClick={() => onClick(course)}
    >
      {/* Thumbnail Section */}
      <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse z-10" />
        )}
        
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Overlay & Play Button */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-20">
          <div className="w-14 h-14 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
            <Play className="w-6 h-6 text-codeebot-blue fill-current ml-1" />
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white font-medium flex items-center gap-1 z-20">
          <Clock className="w-3 h-3" />
          {course.duration}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-codeebot-blue dark:text-blue-400 text-xs font-semibold uppercase tracking-wide">
            {course.lesson}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
            <BarChart className="w-3 h-3" />
            <span className="capitalize">{course.level}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-codeebot-blue transition-colors">
          {course.title}
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
          {course.description}
        </p>
        
        <div className="pt-4 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
           <span className="text-sm font-semibold text-codeebot-blue group-hover:underline">
             Start Watching
           </span>
           <Play className="w-4 h-4 text-codeebot-blue transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
