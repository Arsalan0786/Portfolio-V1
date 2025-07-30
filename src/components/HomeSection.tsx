import React from 'react';
import { ArrowDown, Mail, Linkedin } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

export function HomeSection({ onSectionChange }: HomeSectionProps) {
  const { t } = useLanguage();
  const profileImage= 'profile.jpeg'




  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Sheikh Arsalan Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 object-cover shadow-lg dark:shadow-2xl transition-shadow duration-300"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white transition-colors duration-300">
          {t.hello}{' '}
          <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">{t.name}</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12">
          <Button
            size="sm"
            onClick={() => onSectionChange('about')}
            className="w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white transition-all duration-300 px-4 py-2 text-sm"
          >
            {t.learnMore}
          </Button>
          <Button
            size="sm"
            onClick={() => onSectionChange('contact')}
            className="w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white transition-all duration-300 px-4 py-2 text-sm"
          >
            {t.getInTouch}
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.github.com/Arsalan0786"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
            target="_blank" rel="noopener noreferrer"
          >
            <SiGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sheikharsalan8146/"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:buildwitharsalan@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => onSectionChange('about')}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
