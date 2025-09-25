'use client';
import { MapPin, Calendar, Briefcase, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and architected microservices infrastructure.",
      achievements: ["Improved app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      location: "New York, NY",
      duration: "Mar 2021 - Dec 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.",
      achievements: ["Delivered 15+ successful projects", "Reduced load times by 60%", "Mentored 3 junior developers"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Web Studio",
      location: "Austin, TX",
      duration: "Jun 2019 - Feb 2021",
      description: "Specialized in creating interactive user experiences with React and Vue.js. Worked closely with UX designers to implement pixel-perfect designs.",
      achievements: ["Built 20+ responsive websites", "Improved user engagement by 35%", "Mastered modern CSS frameworks"]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "Seattle, WA",
      duration: "Aug 2018 - May 2019",
      description: "Started career developing web applications and learning modern development practices. Gained experience in both frontend and backend technologies.",
      achievements: ["Completed 10+ web projects", "Learned React and Node.js", "Contributed to open source projects"]
    }
  ];

  return (
    <section className="my-20 from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through various roles and the impact I&apos;ve made along the way
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>
          {/* Main Timeline Line - Mobile */}
          {/* <div className="md:hidden absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div> */}

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:block absolute ${
                      isEven ? 'md:left-1/2 left-8' : 'md:left-1/2 left-8'
                    } transform md:-translate-x-1/2 -translate-x-1/2 z-20`}
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-5/12 md:ml-0`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl group relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-emerald-400 mt-1">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-semibold">{experience.company}</span>
                          </div>
                        </div>
                        <Briefcase className="w-6 h-6 text-purple-400 flex-shrink-0 ml-4" />
                      </div>

                      {/* Duration and Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="w-4 h-4 mr-2 text-pink-400" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-red-400" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-purple-300">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((ach, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start">
                              <span className="text-emerald-400 mr-2">•</span>
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                    </div>
                  </div>

                  {/* Spacer for centering on desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline End Dot */}
          <div className="hidden md:flex justify-center md:justify-center mt-12">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 shadow-lg relative md:left-0 -left-4"></div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for the Next Challenge</h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to work on innovative projects and collaborate with amazing teams.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Let&apos;s Work Together
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
