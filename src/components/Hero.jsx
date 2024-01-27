// import React from "react";

// import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src="https://cdn-icons-png.flaticon.com/512/33/33280.png?w=740&t=st=1686669572~exp=1686670172~hmac=5bb2de1ef6d4c2d0ad9ade00f3cb4a482eae84192717e554e47123748f007f23" alt='sumz_logo' className='w-12 object-contain' />
        <h1 className="title">सारांश</h1>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/tanjul17", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='dark_blue_gradient'>सारांश</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;