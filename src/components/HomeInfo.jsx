/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text} </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"></img>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Anish</span> 👋
            <br />
            SWE & Dev based in the United States
        </h1>
    ),
    2: (
        <h1>
            <InfoBox text="Worked at many companies and picked up many skills"
            link="/about"
            btnText="Learn More!"/>
        </h1>
    ),
    3: (
        <h1>
            <InfoBox text="Led projects and worked in teams towards success. Curious about the impact?"
            link="/projects"
            btnText="View Projects"/>
        </h1>
    ),
    4: (
        <h1>
            <InfoBox text="Looking for a SWE or a Dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's Talk!"/>
        </h1>
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo