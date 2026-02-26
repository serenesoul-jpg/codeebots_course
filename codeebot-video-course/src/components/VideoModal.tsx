"use client";

import { X, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { VideoModalProps } from '@/types/course';

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset loading state when opened
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-black rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-gray-800">
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={onClose}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative pt-[56.25%] w-full bg-black flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
              <Loader2 className="w-12 h-12 text-codeebot-blue animate-spin" />
            </div>
          )}
          <iframe 
            src={`${videoUrl}?autoplay=1`}
            title={title}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
        
        <div className="p-4 bg-gray-900 border-t border-gray-800 text-white">
          <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
