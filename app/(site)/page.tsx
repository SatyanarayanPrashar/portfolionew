"use client"

import React, { useRef, useEffect, useState } from 'react';

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null); 
  const imageRef = useRef<HTMLDivElement>(null); 
  const [isSticky, setIsSticky] = useState<boolean>(true); 

  useEffect(() => {
    const aboutSection = aboutSectionRef.current;

    const handleScroll = () => {
      if (aboutSection) { // Null check
        const { top, height } = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the bottom of the section is visible
        if (top + height < windowHeight) {
          setIsSticky(false); 
        } else {
          setIsSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aboutSectionRef]);


  return (
    <>
      <div className="home-hero-section">
        <div className="home-top">
          <div className="home-heroImg" ref={imageRef}>
            <img src="me.png" alt="Me" className={`home-about-left-section ${isSticky ? 'fixed' : 'absolute top-[87%] '}`} />
          </div>
          <div className="home-heroTxt italic">
            <h1>SATYANARAYAN</h1>
            <h1 className="text-end ">PRASHAR</h1>
          </div>
        </div>

        <div className="flex">
          <div className="home-about-section" ref={aboutSectionRef}>
            <div className="home-about-me">
              About me
              <div className="ml-5 h-[1px] w-[38rem] bg-[#01D9AE]"></div>
            </div>

            <p className="mt-5">
              Hello! I'm Satyanarayan, a software engineer based in Bangalore, India.
            </p>
            <p className="mt-10">
              I enjoy creating things that live on the internet, whether that be website, or mobile application. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>

            {/* <div className="home-about-me mt-10 mb-7">
              Contact
              <div className="ml-5 h-[15px] w-[38rem] bg-[#01D9AE]"></div>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">Email:</div>
              <div className="flex-1 ml-[-500px]">satyanarayanprashar73@gmail.com</div>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">LinkedIn:</div>
              <a href="https://www.linkedin.com/in/satyanarayan-prashar-57a170229/" target="_blank" className="flex-1 ml-[-500px]" rel="noopener noreferrer">https://www.linkedin.com/in/satyanarayan-prashar-57a170229/</a>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">Github:</div>
              <a href="https://github.com/SatyanarayanPrashar" target="_blank" className="flex-1 ml-[-500px]" rel="noopener noreferrer">https://github.com/SatyanarayanPrashar</a>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">X:</div>
              <a href="https://twitter.com/Satya021Don" target="_blank" className="flex-1 ml-[-500px]" rel="noopener noreferrer">https://twitter.com/Satya021Don</a>
            </div> */}

            <div className="home-about-me mt-10 mb-7">
              Tech-stack
              <div className="ml-5 h-[1px] w-[30rem] bg-[#01D9AE]"></div>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">NextJS/ReactJS</div>
              <div className="flex-1">HTML/CSS/JavaScript</div>
              <div className="flex-1">Flutter</div>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">Tailwind</div>
              <div className="flex-1">Scss</div>
              <div className="flex-1">TypeScript</div>
            </div>
            <div className="flex mb-7">
              <div className="flex-1">AWS</div>
              <div className="flex-1">Django</div>
              <div className="flex-1">C++</div>
            </div>
          </div>

          <div className='tech-stack-section'>
            <div className="home-about-me mt-10 mb-7 gap-5">
              Where I've Worked?
              <div className="h-[1px] w-[25rem] bg-[#01D9AE]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}