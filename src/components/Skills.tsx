import React from 'react';
import { Skill } from '../types';
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-2 text-secondary-900 font-display">Skills & Experience</h2>
            <p className="text-xl text-secondary-600 mb-12">Expertise gained through years of hands-on development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100">
                  <div className="skill flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-secondary-900 font-display">{skill.name}</h3>
                    <span className="text-primary-600 font-medium">{skill.yearsOfExperience} years</span>
                  </div>
                  {/* <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-700 bg-primary-100">
                          Proficiency
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary-700">
                          {(skill.rating / 5) * 100}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-primary-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.rating / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary-600 to-primary-500"
                      />
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}