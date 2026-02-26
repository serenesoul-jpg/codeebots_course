export interface Course {
  id: string;
  title: string;
  description: string;
  lesson: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}
