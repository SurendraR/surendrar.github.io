import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, BriefcaseBusiness  ,Database, Cloud } from 'lucide-react';
import { Profile } from '../types';
import { motion } from 'framer-motion';

interface HeaderProps {
  profile: Profile;
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary-500/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-white font-display tracking-tight">
              {profile.name}
            </h1>
            <h2 className="text-3xl mb-6 text-primary-200 font-display">{profile.title}</h2>
          </motion.div>

          <motion.p
            className="text-xl mb-8 opacity-90 max-w-2xl leading-relaxed text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 hover:text-primary-200 transition-colors duration-300"
            >
              <Mail size={20} />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-200 transition-colors duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-200 transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
              <Code2 className="w-8 h-8 mb-3 text-primary-200" />
              <h3 className="text-lg font-semibold font-display">Frontend</h3>
              <p className="text-sm text-center text-primary-200">Modern UI with Angular</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
              <BriefcaseBusiness  className="w-8 h-8 mb-3 text-primary-200" />
              <h3 className="text-lg font-semibold font-display">Backend</h3>
              <p className="text-sm text-center text-primary-200">Net 8/.Net core/ .Net Framework</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
              <Database className="w-8 h-8 mb-3 text-primary-200" />
              <h3 className="text-lg font-semibold font-display">Database</h3>
              <p className="text-sm text-center text-primary-200">SQL & NoSQL Solutions</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
              <Cloud className="w-8 h-8 mb-3 text-primary-200" />
              <h3 className="text-lg font-semibold font-display">Cloud</h3>
              <p className="text-sm text-center text-primary-200">Azure Infrastructure</p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}