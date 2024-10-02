/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className='cta-text'>Have a role or a project in mind? <br className='sm:block hidden'/>
        Let's work on it together</p>
        <Link to="/contact" className='btn'>Contact</Link>

    </section>
  )
}

export default CTA