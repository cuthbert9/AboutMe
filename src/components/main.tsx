"use client";
import { useState } from "react";
import {
    FaCode,
    FaRocket,
    FaWifi,
    FaEnvelope,
    FaPhone,
    FaAngleRight

} from "react-icons/fa";
import Social from "@/components/SocialsDiv";
import WorkCard from "@/components/workCard";
import FrameworkCard from "@/components/frameworkCard";
import { TbBrandNextjs } from "react-icons/tb";

import { TbBrandReact } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";


import Car from '../../public/Images/CarMarketPlace.png';
import expense from '../../public/Images/expense2.png'
import recipe from '../../public/Images/foodRecipe.png'
import DitReport from '../../public/Images/DitReport.png'

import Image from "next/image";

import image from '../../public/Images/backgound.jpg';
import me from '../../public/Images/Me.png';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("skills");



    const frameworks = [
        { name: "React", Icon: TbBrandReact },
        { name: "ReactNative", Icon:TbBrandReactNative },
        { name: "Next.js", Icon: TbBrandNextjs },
        { name: "VanillaJS", Icon: TbBrandJavascript},
        { name: "ExpressJS", Icon: TbBrandNodejs},
        { name: "TailwindCSS", Icon: TbBrandTailwind}



    ]



    const projects=[

        {title:'CarMarket Place',
            description:'List your car to be Sold and buy Your Dream car',
            image:Car,
            link:'https://car-market-delta.vercel.app/'

        },
        {title:'Finance Tracker',
            description:'Helps you Track your Financial Transactions Both income and Expenses',
            image:expense,
            link:'https://track-expense-six.vercel.app/'

        },
        {title:'Ure Fav Dish Recipe',
            description:'Find Any Dish recipe you love and wanna cook here including Procedures of how to cook em',
            image:recipe,
            link:'https://reciipe-one.vercel.app/'

        },
        {title:'DIT Report',
            description:'DIT Report is a web platform that lets students report issues, track progress, and get ' +
                'updates online, creating a simple and transparent link between students and ' +
                'college staff for faster problem resolution..',
            image:DitReport,
            link:'https://dit-report.vercel.app/'

        }
    ]

    return (
        <div className="bg-black text-white font-sans scroll-smooth">
            {/* Header Section */}
            <header className="w-full h-[600px] relative flex items-center justify-center ">
                <Image
                    src={image}
                    alt="Background"
                    fill
                    className="object-cover  opacity-15"

                />
                <div className="absolute text-center px-4">
                    <p className="font-cursive font-extrabold text-2xl text-gray-300 py-16">Digital solutions Designing</p>
                    <h1 className="text-5xl md:text-6xl mt-5 text-gray-300">
                        Hi Im <span className="text-yellow-400 font-medium">Cuthbert</span>  <span className={'font-mono text-xl sm:text-3xl md:text-4xl lg:text-4xl'}> Software Developer </span>
                        <span className={'text-2xl md:text-4xl'}>From</span>
                        <span className="text-yellow-400 font-extralight">Tanzania</span>
                    </h1>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-20 text-gray-400 px-4 md:px-10 container mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

                    {/* Image */}
                    <div className="flex-shrink-0">
                        <Image
                            src={me}
                            alt="Cuthbert Picture"
                            className="object-cover rounded-2xl mx-auto"
                            style={{ height: "400px", width: "400px" }}
                        />
                    </div>

                    {/* About Text */}
                    <div className="flex-1 w-full text-center lg:text-left">
                        <h1 className="p-2 text-4xl md:text-5xl font-semibold text-white mb-4">
                            About Me
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed break-words whitespace-normal">
                            I am a <span className="font-semibold">Software Developer</span> passionate about
                            <span className="font-cursive"> Solution Designing</span>. Beyond writing code, I thrive on
                            <span className="font-semibold"> critical and analytical thinking</span>, approaching every challenge
                            with creativity and precision. Constantly updated with the latest
                            <span className="italic"> technologies and industry trends</span>, I aim to design solutions that are
                            not only functional but also future-ready.
                        </p>
                    </div>
                </div>

                {/* Tabs Section (separated & centered) */}
                <div className="mt-16 text-center">
                    {/* Tab headers */}
                    <div className="flex justify-center gap-8 text-lg md:text-xl lg:text-2xl font-medium">
                        {["skills", "education", "experience"].map((tab) => (
                            <p
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer relative ${
                                    activeTab === tab
                                        ? "after:w-1/2 after:absolute after:-bottom-2 after:left-0 after:h-1 after:bg-pink-600"
                                        : ""
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </p>
                        ))}
                    </div>

                    {/* Tab contents */}
                    <div className="mt-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-left">
                        {activeTab === "skills" && (
                            <ul className="space-y-4">
                                <li className={'font-[cursive] font-semibold'}>
                                    <span>Software development</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                         Mern Stack, postgres , css, tailwindcss , Typescript
                                    </span>

                                </li>
                                <li className={'font-[cursive] font-semibold'}>
                                    <span>Networking</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                        LAN ,WAN
                                    </span>
                                </li>
                                <li className={'font-[cursive] font-semibold'}>
                                    <span>Digital Marketing</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                        SEO and SEM
                                    </span>
                                </li>
                                <li className={'font-[cursive] font-semibold'}>
                                    <span>Computer Engineering</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                         Hardware and Software
                                    </span>
                                </li>
                            </ul>
                        )}

                        {activeTab === "experience" && (
                            <ul>
                                <li  className={'flex space-x-1'}>

                                    < FaAngleRight/>  <span className={'font-["italic"] text-lg'}>
                                         Worked in variety Range of projects
                                    </span>
                                </li>

                                <li  className={'flex space-x-1'}>

                                    < FaAngleRight/>  <span className={'font-["italic"] text-lg'}>
                                         Currently Working on a Fintech Startup that digitize community savings
                                    </span>
                                </li>
                            </ul>
                        )}

                        {activeTab === "education" && (
                            <ul className="space-y-2">
                                <li>
                                    <span>2019-2022</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                      Diploma in Computer Engineering

                                        <span
                                            className={'text-green-500 mx-2'}
                                        >GPA: 4.4 </span>

                                    </span>



                                </li>
                                <li>
                                    <span>2021-2022</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                      Certificate in Digital Marketing
                                    </span>

                                </li>
                                <li>
                                    <span>2015-2018</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                     O-level education
                                    </span>

                                </li>
                                <li>
                                    <span>2007-2014</span>
                                    <br />
                                    <span className={'font-["italic"] text-lg'}>
                                      Primary school Education
                                    </span>

                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </section>


            {/* Services Section */}
            <section id="projects" className="py-20 px-4 md:px-10 container mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-10">My services</h1>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-gray-800 p-8 rounded-lg hover:bg-pink-600 transition transform hover:-translate-y-2">
                        <FaCode className="text-5xl mb-6" />
                        <h2 className="text-2xl mb-3">Software Development</h2>
                        <p>
                            Come with an idea, I can deliver a wide scope of products including websites, web apps, and mobile apps.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg hover:bg-pink-600 transition transform hover:-translate-y-2">
                        <FaRocket className="text-5xl mb-6" />
                        <h2 className="text-2xl mb-3">Digital Marketing</h2>
                        <p>
                            Understanding of marketing matters including SEO (Search Engine Optimization) and SEM (Search Engine Marketing).
                        </p>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg hover:bg-pink-600 transition transform hover:-translate-y-2">
                        <FaWifi className="text-5xl mb-6" />
                        <h2 className="text-2xl mb-3">Networking</h2>
                        <p>
                            Passionate about connecting people, bridging the distance gap. Skilled in LAN & WAN configurations.
                        </p>
                    </div>
                </div>
            </section>

            {/*Frame works   Carousel */}




            <section id="portifolio" className="py-20 px-4 md:px-10 container mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-10">Frameworks </h1>


                <div className="flex gap-4 flex-wrap  justify-center">
                    {frameworks.map((fw) => (
                        <FrameworkCard key={fw.name} name={fw.name} Icon={fw.Icon} />
                    ))}
                </div>
            </section>







            {/* Portfolio Section */}
            <section id="portifolio" className="py-20 px-4 md:px-10 container mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-10">My Work</h1>
                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((item,index)=>(

                        <WorkCard  item={item}  key={index}/>
                    ))


                    }



                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 md:px-10 container mx-auto">
                <div className="flex flex-wrap justify-between gap-10">
                    <div className="flex-1 md:flex-none">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-5">Contact Me</h3>
                        <p>
                            <FaEnvelope className="inline mr-2 text-pink-600" />
                            cathbertjohnson9@gmail.com
                        </p>
                        <p>
                            <FaPhone className="inline mr-2 text-pink-600" />
                            +2556202184477 / 0618773185
                        </p>

                        <Social/>
                    </div>
                    <div className="flex-1  max-w-2xl ">
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-4 rounded bg-gray-800 text-white outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded bg-gray-800 text-white outline-none"
                            />
                            <textarea
                                name="message"
                                rows={6}
                                placeholder="Your Message"
                                className="w-full p-4 rounded bg-gray-800 text-white outline-none"
                            ></textarea>
                            <button type="submit" className="w-fit bg-pink-600 px-8 py-3 rounded mt-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-400">
                    <p>
                        Copyright Made with <span className="text-pink-600">❤</span> by Cuthbert {new Date().getFullYear()}✔
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
