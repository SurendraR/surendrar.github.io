import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { BriefcaseBusiness , Calendar, MapPin, Trophy } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 text-secondary-900 font-display">Featured Projects</h2>
            <p className="text-xl text-secondary-600">Showcasing my best work and achievements</p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-secondary-100"
              >
                <div className="p-8">
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-secondary-900 mb-2 font-display">{project.title}</h3>
                      <div className="flex items-center gap-4 text-secondary-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{project.startDate} - {project.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BriefcaseBusiness  size={16} />
                          <span>{project.companyName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                      {project.role}
                    </div>
                  </div>

                  <p className="text-secondary-700 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="text-primary-600" size={20} />
                      <h4 className="text-xl font-semibold text-secondary-900 font-display">Key Achievements</h4>
                    </div>
                    <ul className="grid gap-3">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-center gap-3 text-secondary-700"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}