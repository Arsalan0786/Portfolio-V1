import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.aboutMe },
    { id: 'contact', label: t.contactMe }
  ];

  const handleMenuClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Portfolio Title - Left side */}
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{t.portfolio}</span>
          </div>

          {/* Desktop Menu - Right side */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`px-3 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
                  currentSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              title={isDarkMode ? t.lightMode : t.darkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                title={t.language}
              >
                <Globe className="h-5 w-5" />
                <span className="ml-1 text-xs">{language.toUpperCase()}</span>
              </Button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-t-md transition-colors ${
                      language === 'en'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {t.english}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-b-md transition-colors ${
                      language === 'es'
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {t.spanish}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 transition-colors duration-300">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
                    currentSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}