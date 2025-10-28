import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../assets/images/Hero-Banner.webp";
import frame from "../assets/images/1.png";
import frame2 from "../assets/images/diamond.png";
import { BsInstagram } from "react-icons/bs";
import Diamond from '../assets/images/D01.png'
import { FiArrowRight, FiAward, FiFilm, FiStar } from "react-icons/fi";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        {/* Hero Section with Parallax & Animations */}
        <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-1 ">
            <img 
              src={banner} 
              className="w-full h-full object-cover " 
              alt="cinema background"
              
            />
           <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/50 to-black/80"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent animate-pulse"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Hero Content */}
          <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="relative col-span-2 z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
           data-aos="fade-right"
            data-aos-duration="1200">
            <div>
              {/* Tagline Badge */}
              <div 
                className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <FiStar className="text-amber-400 animate-spin-slow" style={{ animationDuration: '8s' }} />
                <span className="text-amber-400 font-semibold text-sm md:text-base">Where Cinema Legends Are Made</span>
              </div>

              {/* Main Title */}
              <h1 
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                
              >
                <span className="text-white block mb-2">The Legacy of bringing</span>
                <span className="text-white block">Cinematic visions to </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 inline-block animate-gradient">
                  LIFE
                </span>
              </h1>

              {/* Subtitle */}
              {/* <p 
                className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Your Cinema Experience Starts with Us – Connecting audiences with unforgettable moments through 35+ years of excellence in Tamil cinema
              </p> */}

              {/* Stats Cards */}
              <div 
                className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mb-10"
               
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-500/50">
                  <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">600+</div>
                  <div className="text-xs md:text-sm text-gray-400">Films Promoted</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-500/50" style={{ transitionDelay: '100ms' }}>
                  <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">35+</div>
                  <div className="text-xs md:text-sm text-gray-400">Years Legacy</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-500/50" style={{ transitionDelay: '200ms' }}>
                  <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">100%</div>
                  <div className="text-xs md:text-sm text-gray-400">Dedication</div>
                </div>
              </div>

              {/* CTA Buttons */}
              {/* <div 
                className="flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <button className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
                  <FiFilm className="text-xl group-hover:rotate-12 transition-transform" />
                  <span>Explore Our Legacy</span>
                  <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <BsInstagram className="text-xl group-hover:rotate-12 transition-transform" />
                  <span>Connect With Us</span>
                </button>
              </div> */}
            </div>
          </div>
          {/* <div className="flex justify-center items-center">
            <img src={Diamond} alt="Diamond Babu" className="object-cover w-auto h-110" />
          </div> */}
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
          </div> */}
        </section>

        {/* First Section - Film News Anandan with Enhanced Design */}
        <section className="py-16 md:py-28 font-[Rubik] bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
          </div>

          <div className="w-full px-6 md:w-[85%] mx-auto relative z-10">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-16">
              <div className="w-full md:w-[50%] mx-auto group">
                <div
                  className="relative"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl opacity-20 blur-3xl group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative">
                    <img
                      src={frame}
                      className="w-full md:w-[90%] mx-auto object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      alt="Film News Anandan"
                    />
                    {/* Award Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-4 shadow-xl border-4 border-gray-900 animate-pulse">
                      <FiAward className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[50%] mx-auto">
                <div>
                  <div
                    className="flex flex-col gap-y-6 md:gap-y-8"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="inline-flex items-center gap-2 text-amber-500">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
                      <span className="text-sm font-semibold tracking-wider">THE PIONEER</span>
                    </div>

                    <h3 className="font-extrabold text-3xl md:text-5xl text-white leading-tight">
                      Film News Anandan
                    </h3>
                    
                    <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      Icon of Tamil Cinema History
                    </h4>

                    <div className="flex flex-col gap-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
                      <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-amber-500 before:rounded-full">
                        An influential film historian, photographer, and PRO, Anandan captured the essence of Kollywood's evolution with unmatched dedication.
                      </p>
                      <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-amber-500 before:rounded-full">
                        His iconic work with MGR, Sivaji Ganesan, and countless stars immortalized the industry's milestones. Recipient of the prestigious Kalaimamani Award, his invaluable contributions continue through his son, Diamond Babu.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
                      <span className="text-amber-500 font-semibold text-sm">Kalaimamani Awardee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - Diamond Babu with Interactive Elements */}
        <section className="py-16 md:py-28 font-[roboto] bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="w-full px-6 md:w-[85%] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
              <div className="w-full md:w-[50%] mx-auto">
                <div>
                  <div
                    className="flex flex-col gap-y-6 md:gap-y-8"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="inline-flex items-center gap-2 text-amber-500">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
                      <span className="text-sm font-semibold tracking-wider">THE VOICE</span>
                    </div>

                    <h3 className="font-extrabold text-3xl md:text-5xl text-white leading-tight font-[Rubik]">
                      Diamond Babu
                    </h3>

                    <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      The Voice Behind Tamil Cinema
                    </h4>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      Over <span className="text-amber-500 font-bold">35 years of excellence</span> in film publicity and public relations. Crafting the success stories of <span className="text-amber-500 font-bold">600+ films</span>, Diamond Babu is a trusted name in Kollywood.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      With deep-rooted industry connections, unmatched promotional expertise, and a legacy inherited from the legendary Film News Anandan, he continues to be the go-to PRO for Tamil cinema's biggest names.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <span className="bg-amber-600/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600/30 transition-all cursor-default">
                        Film Publicity
                      </span>
                      <span className="bg-amber-600/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600/30 transition-all cursor-default">
                        Public Relations
                      </span>
                      <span className="bg-amber-600/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600/30 transition-all cursor-default">
                        Media Management
                      </span>
                    </div>

                    <div className="pt-4">
                      <button className="group p-1 bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-semibold shadow-2xl h-14 rounded-[30px] flex items-center gap-x-0 text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-amber-500/20 border border-gray-700">
                        <span className="px-6">Contact Now</span>
                        <div className="p-3  rounded-full bg-gradient-to-r from-[#ff0664] to-[#ff3385] h-full flex items-center group-hover:from-[#ff3385] group-hover:to-[#ff0664] transition-all duration-300">
                          <BsInstagram className="text-white text-2xl md:text-2xl font-bold group-hover:rotate-12 transition-transform" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[50%] mx-auto group">
                <div
                  className="relative"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  {/* Decorative Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-l from-amber-600 to-amber-800 rounded-3xl opacity-20 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative">
                    <img
                      src={frame2}
                      className="w-full md:w-[90%] mx-auto object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      alt="Diamond Babu"
                    />
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-32 border-t-4 border-r-4 border-amber-500 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-32 border-b-4 border-l-4 border-amber-500 rounded-bl-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section with Gradient */}
        {/* <div className="bg-gradient-to-b from-black to-gray-950 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Hero;