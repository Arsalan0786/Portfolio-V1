import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  // Navigation
  portfolio: string;
  home: string;
  aboutMe: string;
  contactMe: string;
  
  // Home page
  hello: string;
  name: string;
  description: string;
  learnMore: string;
  getInTouch: string;
  
  // About page - Main sections
  aboutTitle: string;
  aboutDescription: string;
  myStory: string;
  developer: string;
  fitness: string;
  theJourney: string;
  technicalExpertise: string;
  fitnessInfluence: string;
  whatIDo: string;
  technologyServices: string;
  fitnessServices: string;
  
  // About page - Story content
  journeyText1: string;
  journeyText2: string;
  journeyText3: string;
  techExpertiseText: string;
  fitnessInfluenceText: string;
  servicesDescription: string;
  
  // About page - Service titles and descriptions
  webDevelopment: string;
  webDevelopmentDesc: string;
  uiUxDesign: string;
  uiUxDesignDesc: string;
  mobileDevelopment: string;
  mobileDevelopmentDesc: string;
  fullStackSolutions: string;
  fullStackSolutionsDesc: string;
  personalTraining: string;
  personalTrainingDesc: string;
  groupCoaching: string;
  groupCoachingDesc: string;
  onlineContent: string;
  onlineContentDesc: string;
  lifestyleCoaching: string;
  lifestyleCoachingDesc: string;
  
  // About page - Stats
  followers: string;
  clientsTrained: string;
  yearsExperience: string;
  workoutVideos: string;
  
  // Contact page
  contactTitle: string;
  contactDescription: string;
  getInTouchTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabelLong: string;
  messagePlaceholderLong: string;
  contactInfo: string;
  connectWithMe: string;
  availability: string;
  availabilityText: string;
  location: string;
  phone: string;
  email: string;
  
  // Theme
  darkMode: string;
  lightMode: string;
  
  // Language
  language: string;
  english: string;
  spanish: string;
  
  // Common
  loading: string;
  error: string;
  success: string;
  close: string;
  save: string;
  cancel: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    portfolio: 'Portfolio',
    home: 'Home',
    aboutMe: 'About Me',
    contactMe: 'Contact Me',
    
    // Home page
    hello: "Hello, I'm",
    name: 'Shekh Arsalan',
    description: 'A passionate full-stack developer and an influencer creating beautiful digital experiences and inspiring healthy lifestyles',
    learnMore: 'Learn More About Me',
    getInTouch: 'Get In Touch',
    
    // About page - Main sections
    aboutTitle: 'About Me',
    aboutDescription: 'I\'m a multi-passionate individual combining 2+ years of development experience with a growing influence in the fitness world.',
    myStory: 'My Story',
    developer: 'Developer',
    fitness: 'Fitness',
    theJourney: 'The Journey',
    technicalExpertise: 'Technical Expertise',
    fitnessInfluence: 'Fitness Influence',
    whatIDo: 'What I Do',
    technologyServices: 'Technology Services',
    fitnessServices: 'Fitness Services',
    
    // About page - Story content
    journeyText1: 'My journey began 2 years ago with web development, driven by curiosity to understand how digital experiences are created. What started as a hobby quickly evolved into a passion for building meaningful applications that solve real-world problems.',
    journeyText2: 'Parallel to my tech career, I discovered my love for fitness, travel and helping others transform their lives. What began as personal training for friends grew into a thriving fitness community of over 50K followers who look to me for motivation, guidance, and authentic fitness content.',
    journeyText3: 'Today, I balance both passions - creating innovative digital solutions during the day and inspiring people to live healthier lives through fitness. This unique combination allows me to bring creativity, discipline, and a holistic approach to everything I do.',
    techExpertiseText: 'In the past 2+ years, I have Truly transformed, gaining valuable experience through challenging, internships and collaborative projects with friends. This period was not just about professional growth. It was about personal evolution. I explored new places, embraced self improvement and found a fitness influencer inside me. I found satisfaction in motivating and helping others achieved their wellness goals.',
    fitnessInfluenceText: 'As an fitness influencer, I\'ve helped many people transform their lives through structured training programs, nutritional guidance, and motivational content. My approach combines scientific principles with practical, sustainable lifestyle changes.',
    servicesDescription: 'I offer a comprehensive range of services across technology and fitness to help bring your vision to life.',
    
    // About page - Service titles and descriptions
    webDevelopment: 'Web Development',
    webDevelopmentDesc: 'Creating responsive and interactive web applications using modern frameworks and technologies.',
    uiUxDesign: 'UI/UX Design',
    uiUxDesignDesc: 'Designing intuitive and beautiful user interfaces that provide excellent user experiences.',
    mobileDevelopment: 'Mobile Development',
    mobileDevelopmentDesc: 'Building cross-platform mobile applications with React Native and Flutter.',
    fullStackSolutions: 'Full-Stack Solutions',
    fullStackSolutionsDesc: 'End-to-end development from database design to frontend implementation.',
    personalTraining: 'Personal Training',
    personalTrainingDesc: 'Customized workout plans and one-on-one training sessions to help you achieve your fitness goals.',
    groupCoaching: 'Group Coaching',
    groupCoachingDesc: 'Motivating group fitness programs and challenges to build a supportive community.',
    onlineContent: 'Online Content',
    onlineContentDesc: 'Creating engaging fitness content, tutorials, and workout videos for social media platforms.',
    lifestyleCoaching: 'Lifestyle Coaching',
    lifestyleCoachingDesc: 'Holistic approach to health including nutrition, mental wellness, and sustainable habits.',
    
    // About page - Stats
    followers: 'Followers',
    clientsTrained: 'Clients Trained',
    yearsExperience: 'Years Experience',
    workoutVideos: 'Workout Videos',
    
    // Contact page
    contactTitle: 'Contact Me',
    contactDescription: 'Have a project in mind? I\'d love to hear from you. Let\'s discuss how we can work together to bring your ideas to life.',
    getInTouchTitle: 'Get In Touch',
    nameLabel: 'Your Name',
    emailLabel: 'Your Email',
    messageLabel: 'Your Message',
    sendMessage: 'Send a Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'Enter your message',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Project inquiry',
    messageLabelLong: 'Message',
    messagePlaceholderLong: 'Tell me about your project...',
    contactInfo: 'Contact Information',
    connectWithMe: 'Connect With Me',
    availability: 'Availability',
    availabilityText: 'I\'m currently available for new projects and collaborations. I typically respond to messages within 24 hours.',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    
    // Theme
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    
    // Language
    language: 'Language',
    english: 'English',
    spanish: 'Spanish',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
  },
  es: {
    // Navigation
    portfolio: 'Portafolio',
    home: 'Inicio',
    aboutMe: 'Sobre Mí',
    contactMe: 'Contacto',
    
    // Home page
    hello: 'Hola, soy',
    name: 'Shekh Arsalan',
    description: 'Un desarrollador full-stack apasionado e influencer creando hermosas experiencias digitales e inspirando estilos de vida saludables',
    learnMore: 'Conoce Más Sobre Mí',
    getInTouch: 'Contáctame',
    
    // About page - Main sections
    aboutTitle: 'Sobre Mí',
    aboutDescription: 'Soy un individuo multi-apasionado que combina 2+ años de experiencia en desarrollo con una creciente influencia en el mundo del fitness.',
    myStory: 'Mi Historia',
    developer: 'Desarrollador',
    fitness: 'Fitness',
    theJourney: 'El Viaje',
    technicalExpertise: 'Experiencia Técnica',
    fitnessInfluence: 'Influencia Fitness',
    whatIDo: 'Lo Que Hago',
    technologyServices: 'Servicios de Tecnología',
    fitnessServices: 'Servicios de Fitness',
    
    // About page - Story content
    journeyText1: 'Mi viaje comenzó hace 2 años con el desarrollo web, impulsado por la curiosidad de entender cómo se crean las experiencias digitales. Lo que comenzó como un pasatiempo evolucionó rápidamente en una pasión por construir aplicaciones significativas que resuelven problemas del mundo real.',
    journeyText2: 'Paralelo a mi carrera tecnológica, descubrí mi amor por el fitness, los viajes y ayudar a otros a transformar sus vidas. Lo que comenzó como entrenamiento personal para amigos creció hasta convertirse en una próspera comunidad fitness de más de 50K seguidores que recurren a mí para motivación, orientación y contenido auténtico de fitness.',
    journeyText3: 'Hoy, equilibro ambas pasiones: creando soluciones digitales innovadoras durante el día e inspirando a las personas a vivir vidas más saludables a través del fitness. Esta combinación única me permite aportar creatividad, disciplina y un enfoque holístico a todo lo que hago.',
    techExpertiseText: 'En los últimos dos años, me he transformado verdaderamente, adquiriendo una experiencia invaluable a través de desafiantes pasantías y proyectos colaborativos con amigos. Este período no solo se trató de crecimiento profesional; también fue una evolución personal. Exploré nuevos lugares, abracé la superación personal y, como influencer de fitness, encontré una inmensa satisfacción al ayudar a otros a alcanzar sus metas de bienestar.',
    fitnessInfluenceText: 'Como influencer de fitness, he ayudado a muchas personas a transformar sus vidas mediante programas de entrenamiento estructurados, orientación nutricional y contenido motivacional. Mi enfoque combina principios científicos con cambios de estilo de vida prácticos y sostenibles.',
    servicesDescription: 'Ofrezco una gama integral de servicios en tecnología y fitness para ayudar a dar vida a tu visión.',
    
    // About page - Service titles and descriptions
    webDevelopment: 'Desarrollo Web',
    webDevelopmentDesc: 'Creando aplicaciones web responsivas e interactivas usando frameworks y tecnologías modernas.',
    uiUxDesign: 'Diseño UI/UX',
    uiUxDesignDesc: 'Diseñando interfaces de usuario intuitivas y hermosas que brindan excelentes experiencias de usuario.',
    mobileDevelopment: 'Desarrollo Móvil',
    mobileDevelopmentDesc: 'Construyendo aplicaciones móviles multiplataforma con React Native y Flutter.',
    fullStackSolutions: 'Soluciones Full-Stack',
    fullStackSolutionsDesc: 'Desarrollo de extremo a extremo desde el diseño de base de datos hasta la implementación frontend.',
    personalTraining: 'Entrenamiento Personal',
    personalTrainingDesc: 'Planes de entrenamiento personalizados y sesiones individuales para ayudarte a alcanzar tus objetivos de fitness.',
    groupCoaching: 'Entrenamiento Grupal',
    groupCoachingDesc: 'Programas de fitness grupales motivadores y desafíos para construir una comunidad de apoyo.',
    onlineContent: 'Contenido Online',
    onlineContentDesc: 'Creando contenido de fitness atractivo, tutoriales y videos de ejercicios para plataformas de redes sociales.',
    lifestyleCoaching: 'Coaching de Estilo de Vida',
    lifestyleCoachingDesc: 'Enfoque holístico de la salud incluyendo nutrición, bienestar mental y hábitos sostenibles.',
    
    // About page - Stats
    followers: 'Seguidores',
    clientsTrained: 'Clientes Entrenados',
    yearsExperience: 'Años de Experiencia',
    workoutVideos: 'Videos de Ejercicios',
    
    // Contact page
    contactTitle: 'Contáctame',
    contactDescription: '¿Tienes un proyecto en mente? Me encantaría escuchar de ti. Hablemos sobre cómo podemos trabajar juntos para dar vida a tus ideas.',
    getInTouchTitle: 'Ponte en Contacto',
    nameLabel: 'Tu Nombre',
    emailLabel: 'Tu Correo',
    messageLabel: 'Tu Mensaje',
    sendMessage: 'Enviar un Mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu.correo@ejemplo.com',
    messagePlaceholder: 'Ingresa tu mensaje',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'Consulta de proyecto',
    messageLabelLong: 'Mensaje',
    messagePlaceholderLong: 'Cuéntame sobre tu proyecto...',
    contactInfo: 'Información de Contacto',
    connectWithMe: 'Conecta Conmigo',
    availability: 'Disponibilidad',
    availabilityText: 'Actualmente estoy disponible para nuevos proyectos y colaboraciones. Normalmente respondo a los mensajes dentro de 24 horas.',
    location: 'Ubicación',
    phone: 'Teléfono',
    email: 'Correo',
    
    // Theme
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    
    // Language
    language: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    
    // Common
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    close: 'Cerrar',
    save: 'Guardar',
    cancel: 'Cancelar',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
