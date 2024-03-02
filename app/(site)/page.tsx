"use client"
export default function Home() {

  return (
    <div className="home mb-10">
      <div className="home-top">
        <div className="home-about-left-section">
          <img src="me.png" alt="Me" />
        </div>
        <div className="home-about-right-section italic">
          {/* <h4 className="text-[2rem]">Portfolio</h4> */}
          <h1>SATYANARAYAN</h1>
          <h1 className="text-end ">PRASHAR</h1>
        </div>
      </div>

      <div className="home-about-section">
        <div className="home-about-me">
          About me
          <div className="ml-5 h-[15px] w-[38rem] bg-[#01D9AE]"></div>
        </div>

        <p className="mt-5">
          Hello! I'm Satyanarayan, a software engineer based in Bangalore, India.
        </p>
        <p className="mt-10">
          I enjoy creating things that live on the internet, whether that be website, or mobile application. My goal is to always build products that provide pixel-perfect, performant experiences.
        </p>

        <div className="home-about-me mt-10 mb-10">
          Contact
          <div className="ml-5 h-[15px] w-[38rem] bg-[#01D9AE]"></div>
        </div>
        <div className="flex mb-10">
          <div className="flex-1">Email:</div>
          <div className="flex-1 ml-[-500px]">satyanarayanprashar73@gmail.com</div>
        </div>
        <div className="flex mb-10">
          <div className="flex-1">LinkedIn:</div>
          <a href="https://www.linkedin.com/in/satyanarayan-prashar-57a170229/" target="_blank" className="flex-1 ml-[-500px]" rel="noopener noreferrer">https://www.linkedin.com/in/satyanarayan-prashar-57a170229/</a>
        </div>
        <div className="flex mb-10">
          <div className="flex-1">Github:</div>
          <a href="https://github.com/SatyanarayanPrashar" target="_blank" className="flex-1 ml-[-500px]" rel="noopener noreferrer">https://github.com/SatyanarayanPrashar</a>
        </div>
        <div className="flex mb-10">
          <div className="flex-1">X:</div>
          <a href="https://twitter.com/Satya021Don" target="_blank" className="flex-1 ml-[-500px]" rel="noopener noreferrer">https://twitter.com/Satya021Don</a>
        </div>
      </div>

      
    </div>
  );
}