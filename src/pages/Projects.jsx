/* eslint-disable no-unused-vars */
import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA';
import {socialLinks} from '../constants/index';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}<span className='blue-gradient_text font-semibold
        drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I have embarked on numerous projects,
          most of them are open source. If you come across something that
          piques your interest, feel free to explore the codebase and 
          contribute your ideas for further enhancements.</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
            {projects.map((project) => (
              <div className='lg:w-[400px] w-full' key={project.name}>
                <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt="Project Icon"
                      className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
                  <p className='mt-2 text-slate-500'>{project.description}</p>
                  <div className='mt-5 flex itmes-center gap-2 font-poppins'>
                    <Link
                      to={project.link}
                      target='_blank'
                      rel=' noopener noreferrer'
                      className='font-semibold text-blue-600'>
                        Live Link
                    
                    </Link>
                    <img
                    src={arrow}
                    alt='Arrow'
                    className='w-4 h-4 object-contain'
                    />
                  </div>
                </div>
              </div>

            ))}

      </div>
      <hr className='border-slate-200'/>

      <CTA />
      {/* Footer Section */}
      <footer className='flex justify-end items-center mt-10 gap-4'>
        {socialLinks.map((link) => (
          <a href={link.link} target='_blank' rel='noopener noreferrer' key={link.name}>
            <img src={link.iconUrl} alt={link.name} className='w-6 h-6' />
          </a>
        ))}
      </footer>
      </section>
  )
}

export default Projects