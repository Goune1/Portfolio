import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Background from './components/hero_bg'
import Socials from "./components/socials"
import Card from "./components/card"
import Card1 from "./components/cards/card1"
import Card2 from "./components/cards/card2"
import Card3 from "./components/cards/card3"
import Contact from "./components/contact"
import Footer from "./components/footer"
import TextGenerateEffect from './components/generate_effect';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverse l'état d'ouverture du menu
  };

  const wordsArray = ["Ingenious", "Ambitious", "Creative"];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
    });
  }, []);

  return (
    <>
    
      <div className='bg-gray-900'>

        <Background/>

        <div className="flex justify-between gap-12 bg-transparent ml-8">
            <h1 className="text-indigo-600 font-bold text-6xl">G</h1>
            <a onClick={toggleMenu} className="text-white mr-2 lg:mr-24 pt-4 cursor-pointer z-50">Contact me <span aria-hidden="true">→</span></a>
        </div>

        <div className="pt-24 custom2:pt-56 text-white text-center lg:text-left lg:ml-44" data-aos="fade-bottom">
          <h1 className="text-4xl font-bold tracking-tight sm:text-7xl">Hey I'm <span className='text-indigo-600'>Gaël</span>👋</h1>
          <TextGenerateEffect words="I'm a creative web developer" className="text-2xl sm:text-3xl"/>
          <div className='flex justify-center lg:justify-start'>
            <Socials/>
          </div>
        </div>
        
        
          
  
  

        
        
        <div className='pt-97'>
          <h1 className='text-white text-4xl lg:text-6xl font-semibold ml-20 lg:ml-28'>Discover my <span className='text-indigo-600 font-bold'>projects</span></h1>

          <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-1 lg:grid-cols-2 custom:grid-cols-3' data-aos="fade-right">
            <Card>
              <Card1/>
            </Card>

            <Card>
              <Card2/>
            </Card>

            <Card>
              <Card3/>
            </Card>
          </div>
        </div>

        <div className='mt-48'>
          <h1 className='text-white text-3xl lg:text-6xl font-semibold ml-12 lg:ml-28'>The technologies I <span className='text-indigo-600 font-bold'>master</span></h1>


          <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-1 lg:grid-cols-2 pt-12' data-aos="fade-right">

            <Card>
              <div className='bg-slate-800 w-96 h-96 rounded-lg'>
                <h1 className='text-white text-2xl ml-4 mt-2'>Front-End Side :</h1>
                <div className='mt-4'>
                  <div className='pt-4 flex gap-24 items-center justify-center'>
                    <div className='flex flex-col'>
                      <img src="react.svg" className='w-24 h-24' alt="react logo" />
                      <h1 className='text-white text-center'>ReactJS</h1>
                    </div>
                    <div className='flex flex-col pt-3'>
                      <img src="Tailwind_CSS_Logo.svg.png" className='w-24 h-14' alt="" />
                      <h1 className='text-white text-center pt-6'>Tailwind CSS</h1>
                    </div>
                  </div>
                  <div className='pt-8 flex gap-24 items-center justify-center'>
                    <div className='flex flex-col'>
                      <img src="vite.svg" className='w-20 h-20 mr-4' alt="" />
                      <h1 className='text-white text-center mr-4'>Vite</h1>
                    </div>
                    <div className='flex flex-col'>
                      <img src="aceternity.png" className='w-20 h-20' alt="" />
                      <h1 className='text-white text-center'>AceternityUI</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Card>


            <Card>
              <div className='bg-slate-800 w-96 h-96 rounded-lg'>
                <h1 className='text-white text-2xl ml-4 mt-2'>Back-End Side :</h1>
                <div className='mt-4'>
                  <div className='pt-4 flex gap-24 items-center justify-center'>
                    <div className='flex flex-col'>
                      <img src="express.png" className='w-24 h-24' alt="react logo" />
                      <h1 className='text-white text-center'>ExpressJS</h1>
                    </div>
                    <div className='flex flex-col pt-3'>
                      <img src="mongodb.png" className='w-24 h-14' alt="" />
                      <h1 className='text-white text-center pt-6'>MongoDB</h1>
                    </div>
                  </div>
                  <div className='pt-8 flex gap-24 items-center justify-center'>
                    <div className='flex flex-col'>
                      <img src="sql.png" className='w-20 h-20 mr-4' alt="" />
                      <h1 className='text-white text-center mr-4'>SQL</h1>
                    </div>
                    <div className='flex flex-col'>
                      <img src="openai.png" className='w-20 h-20' alt="" />
                      <h1 className='text-white text-center'>API OpenAI</h1>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className='pt-24 pb-24'>
          <Contact/>
        </div>

        <Footer/>
        
      </div>
    </>
  )
}

export default App
