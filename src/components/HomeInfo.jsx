import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons/index'; 


const InfoBox = ({text,link, btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text} </p>
        <Link to = {link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src = {arrow} className='w-4 h-4 object-contain'/>
        </Link>

    </div>
)


const renderContent = {
    1:(
        <h1 className = "sm:text:xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hii, I am <span className='font-semibold'>Govind</span>👋 
        <br/>
        A Software Engineer from India.
        
        
        
        </h1>
    ),
    2:(
        <InfoBox
         text ="Currently working Intership on Nugen It service."
         link = "/about"
         btnText="Learn More"
         />
    ),
    3:(
        <InfoBox
         text ="Led multiple project to success over the years."
         link = "/project"
         btnText="Visit my Portfolio"
         />
    ),
    4:(
        <InfoBox
         text ="Need a Project  or looking in dev? ."
         link = "/contact"
         btnText="Lets talk"
         />
    ),



}






const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null; 
    
        
    



    
    
      
    
  
}

export default HomeInfo
