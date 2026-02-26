"use client";

import { useState } from 'react';
import { Course } from '@/types/course';
import CourseCard from './CourseCard';
import VideoModal from './VideoModal';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCourse(null), 300); // Clear after animation
  };

  return (
    <section className="py-16 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore our library of video tutorials designed to help you master CodeeBot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={handleCourseClick} 
            />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedCourse.videoUrl}
          title={selectedCourse.title}
        />
      )}
    </section>
  );
};

export default CourseGrid;
