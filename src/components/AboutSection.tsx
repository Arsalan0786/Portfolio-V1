import { Code, Palette, Smartphone, Globe, Dumbbell, Users, Video, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';



export function AboutSection() {
  const { t } = useLanguage();
  const techSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'HTML/CSS',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Swift', 'UI/UX Design', 'Figma', 'Photoshop', 'Story Telling', 'DaVinci'
  ];

  const fitnessSkills = [
    'Strength Training', 'HIIT', 'Nutrition Planning', 'Weight Loss', 'Muscle Building',
    'Cardio Conditioning', 'Flexibility', 'Mental Health', 'Meal Prep', 'Supplement Guidance'
  ];

  const techServices = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: t.webDevelopment,
      description: t.webDevelopmentDesc
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: t.uiUxDesign,
      description: t.uiUxDesignDesc
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: t.mobileDevelopment,
      description: t.mobileDevelopmentDesc
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: t.fullStackSolutions,
      description: t.fullStackSolutionsDesc
    }
  ];

  const fitnessServices = [
    {
      icon: <Dumbbell className="h-8 w-8 text-red-600" />,
      title: t.personalTraining,
      description: t.personalTrainingDesc
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t.groupCoaching,
      description: t.groupCoachingDesc
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: t.onlineContent,
      description: t.onlineContentDesc
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: t.lifestyleCoaching,
      description: t.lifestyleCoachingDesc
    }
  ];

  const fitnessStats = [
    { number: '500+', label: t.followers },
    { number: '20+', label: t.clientsTrained },
    { number: '4+', label: t.yearsExperience },
    { number: '20+', label: t.workoutVideos }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto rounded-[50px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            {t.aboutDescription}
          </p>
        </div>

        {/* About Content */}
        <Tabs defaultValue="story" className="mb-32">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 rounded-2xl p-1.5">
            <TabsTrigger value="story" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400 transition-all duration-300 rounded-xl">{t.myStory}</TabsTrigger>
            <TabsTrigger value="developer" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400 transition-all duration-300 rounded-xl">{t.developer}</TabsTrigger>
            <TabsTrigger value="fitness" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400 transition-all duration-300 rounded-xl">{t.fitness}</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="mt-16 bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">{t.theJourney}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.journeyText1}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.journeyText2}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {t.journeyText3}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src='../assets/aboutpagespic.jpg'
                  alt="Sheikh Arsalan"
                  className="rounded-2xl shadow-lg w-full max-w-md h-90 object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="developer" className="mt-16 bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-10">
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">{t.technicalExpertise}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {t.techExpertiseText}
              </p>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 rounded-xl"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fitness" className="mt-16 bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-10">
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl text-gray-900 dark:text-white transition-colors duration-300">{t.fitnessInfluence}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {t.fitnessInfluenceText}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fitnessSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-sm border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-800 dark:hover:text-red-300 hover:border-red-400 dark:hover:border-red-600 transform hover:-translate-y-1 bg-white dark:bg-gray-800 rounded-xl"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {fitnessStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 group">
                      <div className="text-2xl text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300 group-hover:scale-110">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop"
                  alt="Fitness training session"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop"
                  alt="Group fitness class"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Combined Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4 transition-colors duration-300">{t.whatIDo}</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              {t.servicesDescription}
            </p>
          </div>

          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 rounded-2xl p-1.5">
              <TabsTrigger value="tech" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400 transition-all duration-300 rounded-xl">{t.technologyServices}</TabsTrigger>
              <TabsTrigger value="fitness" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400 transition-all duration-300 rounded-xl">{t.fitnessServices}</TabsTrigger>
            </TabsList>

            <TabsContent value="tech" className="mt-16 bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techServices.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 group bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl">
                    <CardHeader className="pb-4">
                      <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fitness" className="mt-16 bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fitnessServices.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 group bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl">
                    <CardHeader className="pb-4">
                      <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
