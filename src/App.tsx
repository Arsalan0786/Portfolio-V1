import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/ThemeContext";
import { LanguageProvider } from "./components/LanguageContext";

type Section = "home" | "about" | "contact";

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>("home");
  
  
  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HomeSection onSectionChange={setCurrentSection} />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation
            currentSection={currentSection}
            onSectionChange={setCurrentSection}
          />
          <main className="pt-16">{renderSection()}</main>
          <Toaster />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}