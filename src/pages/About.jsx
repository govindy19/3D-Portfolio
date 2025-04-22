import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { skills, experiences } from '../constants'
//import  {CTA}  from '../components';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello , I am{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>Govind</span>
      </h1>

      <div className='mt-4 flex flex-col gap-3 text-slate-500'>
        <p>
          I'm Govind Yadav, currently working as a Frontend Developer Intern at Nugen IT Services in Mohali.
          I'm passionate about solving real-world problems through clean and responsive web design.
          I specialize in HTML, CSS, JavaScript, ReactJS, and love creating smooth user experiences.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='flex flex-col gap-4 items-center justify-center'>
              <img src={skill.imageUrl} alt={skill.name} className='w-20 h-20 object-contain' />
              <h4 className='text-slate-500'>{skill.name}</h4>
              <p className='text-slate-400'>{skill.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-4 flex flex-col gap-3 text-slate-500'>
          <p>
            I completed a remote internship at Codsoft, where I built projects like a landing page and a calculator using HTML, CSS, and JavaScript.
            Currently, I'm interning as a Frontend Developer at Nugen IT Services in Mohali, focusing on building responsive UIs with ReactJS.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.title + index}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={<img src={experience.icon} alt={experience.company_name} className='w-12 h-12 object-contain' />}
              >
                <div>
                  <h3 className='text-slate-500 font-bold text-[24px]'>{experience.title}</h3>
                  <p className='text-slate-400 text-[16px]'>{experience.company_name}</p>
                </div>
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, i) => (
                    <li key={`experience-point-${i}`} className='text-slate-400 text-[14px] pl-1 tracking-wider'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>


      </div>
      <hr className=' border-slate-200' />
      
    </section>
  )
}

export default About
