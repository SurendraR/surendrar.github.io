import React from 'react';
import { Github, Linkedin,FileUser , Mail, MapPin, Code2, BriefcaseBusiness, Database, Cloud, BookOpen, Award } from 'lucide-react';
import { Profile } from '../types';
import { motion } from 'framer-motion';
import myProfileImage from '../assets/myprofile.jpeg';
import Pdf from '../assets/Senior Software Engineer-Dotnet Angular Fullstack.pdf'

interface HeaderProps {
  profile: Profile;
}

const openPDFile = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};


export function Header({ profile }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary-500/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative shrink-0 mx-auto md:mx-0"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl bg-primary-800">
                <img
                  src={myProfileImage}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start mb-6 p-4'>
              <a  href={Pdf} rel="noopener noreferrer" target="_blank"                  
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <FileUser size={18} />
                  <span className="text-sm">Resume</span>
                </a>                
                {/* <button onClick={handleDownload}>Resume</button>               */}
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-white font-display tracking-tight">
                  {profile.name}
                </h1>
                <h2 className="text-2xl mb-4 text-primary-200 font-display">{profile.title}</h2>
              </motion.div>

              <motion.p
                className="text-lg mb-6 opacity-90 max-w-2xl leading-relaxed text-primary-100 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {profile.bio}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 items-center justify-center md:justify-start mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span className="text-sm">{profile.email}</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={profile.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <BookOpen size={18} />
                  <span className="text-sm">Blog</span>
                </a>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10">
                  <MapPin size={18} />
                  <span className="text-sm">{profile.location}</span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Code2 className="w-6 h-6 mb-2 text-primary-200" />
              <h3 className="text-base font-semibold font-display">Frontend</h3>
              <p className="text-xs text-center text-primary-200">Modern UI/UX with Angular</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <BriefcaseBusiness className="w-6 h-6 mb-2 text-primary-200" />
              <h3 className="text-base font-semibold font-display">Backend</h3>
              <p className="text-xs text-center text-primary-200">Net 8/.Net core/ .Net Framework</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Database className="w-6 h-6 mb-2 text-primary-200" />
              <h3 className="text-base font-semibold font-display">Database</h3>
              <p className="text-xs text-center text-primary-200">SQL & NoSQL Solutions</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Cloud className="w-6 h-6 mb-2 text-primary-200" />
              <h3 className="text-base font-semibold font-display">Cloud</h3>
              <p className="text-xs text-center text-primary-200">Azure Infrastructure</p>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {profile.certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                <Award className="text-primary-200 shrink-0" size={20} />
                <div className="min-w-0">
                  <div className="font-medium text-sm truncate">{cert.name}</div>
                  <div className="text-xs text-primary-200 truncate">{cert.issuer} • {cert.date}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
}