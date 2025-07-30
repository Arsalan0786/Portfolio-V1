import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from './LanguageContext';
import { toast } from 'sonner';
import { sendEmail } from '../services/emailService';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Try server first
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('success');
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }
    } catch (error) {
      console.log('Server unavailable, trying EmailJS fallback...');
    }

    // Fallback to EmailJS
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus('success');
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        toast.error('❌ Failed to send message. Please try emailing directly.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('❌ Unable to send message. Please email directly at buildwitharsalan@gmail.com');
      console.error('Error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Email',
      value: 'buildwitharsalan@gmail.com 👈🏻',
      href: 'mailto:buildwitharsalan@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />,
      label: 'Phone',
      value: '+91-9541995177',
      href: 'tel:+919541995177'
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-600 dark:text-red-400" />,
      label: 'Location',
      value: 'Srinagar, J&K',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <SiGithub className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/Arsalan0786',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sheikharsalan8146/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: 'X',
      href: 'https://twitter.com/sheikharsalann',
      color: 'hover:text-sky-500 dark:hover:text-sky-400'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            {t.contactTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            {t.contactDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="pt-1">{info.icon}</div>
                    <div className="leading-tight">
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-sm text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">{t.connectWithMe}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">{t.availability}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {t.availabilityText}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">{t.sendMessage}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                      {t.nameLabel} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t.namePlaceholder}
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                      {t.emailLabel} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t.emailPlaceholder}
                      className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                    {t.subjectLabel} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder={t.subjectPlaceholder}
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                    {t.messageLabelLong} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder={t.messagePlaceholderLong}
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
                  disabled={status === 'sending'}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {status === 'sending' ? t.sending : t.sendMessage}
                </Button>
                {status === 'success' && <p className="text-green-600">✅ {t.successMessage}</p>}
                {status === 'error' && <p className="text-red-600">❌ {t.errorMessage}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
