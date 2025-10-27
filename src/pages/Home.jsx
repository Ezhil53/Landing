import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../assets/images/banner-1.png";
import frame from "../assets/images/1.png";
import frame2 from "../assets/images/diamond.png";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div>
        <section className="relative ">
          <div className="w-full -z-0">
            <img src={banner} className="w-full object-cover" alt="none" />
          </div>
          <div>
            <div className="absolute  md:text-6xl  font-bold text-2xl leading-20 md:top-30 top-15 md:left-13 left-20 z-10 text-white">
              <h1>The Legacy of bringing</h1> 
              <h1>Cinematic visions to <span className="text-amber-600 text-[5rem]">LIFE</span></h1>
            </div>
          </div>
        </section>

        {/* First Section */}

        <section className="py-10 md:py-20 font-[Rubik]">
          <div className="w-full px-4 md:w-[80%] mx-auto ">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-9">
              <div className="w-full md:w-[50%] mx-auto">
                <div
                  className="flex justify-center items-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={frame}
                    className="w-full md:w-[85%] object-center drop-shadow"
                    alt="none"
                  />
                </div>
              </div>

              <div className="w-full md:w-[50%] mx-auto">
                <div>
                  <div
                    className="flex flex-col  gap-y-3 md:gap-y-7"
                    data-aos="fade-up-left"
                    data-aos-duration="2000"
                  >
                    <h3 className="font-extrabold text-[20px] md:text-[24px] uppercase text-amber-600">
                      Film News Anandan –{" "}
                      <span className="font-semibold text-black">
                        Icon of Tamil Cinema History
                      </span>{" "}
                    </h3>
                    <div className="flex flex-col gap-y-4 font-[roboto]  text-[12px] md:text-[16px]">
                      <p>
                        An influential film historian, photographer, and PRO,
                        Anandan captured the essence of Kollywood’s evolution.{" "}
                      </p>
                      <p>
                        His iconic work with MGR, Sivaji Ganesan, and countless
                        stars immortalized the industry’s milestones. Recipient
                        of the Kalaimamani Award, his invaluable contributions
                        continue through his son, Diamond Babu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}

        <section className="py-10 md:py-20 font-[roboto] bg-gradient-to-r from-slate-50 to-transparent  ">
          <div className="w-full px-4 md:w-[80%] mx-auto ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-9">
              <div className="w-full md:w-[50%] mx-auto">
                <div>
                  <div
                    className="flex flex-col gap-y-4 md:gap-y-7"
                    data-aos="fade-up-right"
                    data-aos-duration="2000"
                  >
                    <h3 className="font-extrabold  text-[20px] md:text-[24px] uppercase font-[Rubik] text-amber-600">
                      {" "}
                      Diamond Babu –{" "}
                      <span className="font-semibold text-black">
                        The Voice Behind Tamil Cinema
                      </span>{" "}
                    </h3>
                    <div className="flex flex-col gap-y-4">
                      <p className="md:text-[16px] text-[12px] text-gray-600">
                        Over 35 years of excellence in film publicity and public
                        relations. Crafting the success stories of 600+ films,
                        Diamond Babu is a trusted name in Kollywood. With
                        deep-rooted industry connections, unmatched promotional
                        expertise, and a legacy inherited from the legendary
                        Film News Anandan, he continues to be the go-to PRO for
                        Tamil cinema's biggest names.
                      </p>
                    </div>
                    <div>
                      <button className="bg-gray-900 font-semibold  text-white shadow-md drop-shadow-md h-10 pl-3 rounded-md flex items-center gap-x-3  text-[12px] md:text-[16px] hover:scale-105 duration-500">
                        {" "}
                        Contact Now{" "}
                        <div className="px-3 bg-[#ff0664]  rounded-r-md">
                          <BsInstagram className="text-white h-10   text-[18px] md:text-[22px] font-bold" />{" "}
                        </div>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[50%] mx-auto">
                <div
                  className="flex justify-center items-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={frame2}
                    className="w-full md:w-[85%] object-center drop-shadow"
                    alt="none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-black py-6"></div>
      </div>
    </>
  );
};

export default Home;
