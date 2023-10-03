import React from 'react';
import './projects.css';
import Project4Image from "../../images/project4.png";
import Project3Image from "../../images/project3.jpeg";
import Project2Image from "../../images/project2.png";
import Project1Image from "../../images/project1.gif";

const Projects = () => {

    const projectDetails = [
        {
            title: "Django coffee ecommerce site",
            description: "Welcome to Karma Coffee, where your coffee cravings meet the convenience of online shopping.",
            demoLink: "https://karma-coffee-abe41bfb39f9.herokuapp.com/",
            codeLink: "https://github.com/rahulraikhy/karma-coffee",
            image: Project3Image,
            date: "Jul 2023"
        },
        {
            title: "React JS Application using MERN stack",
            description: "A Task manager app created using MERN Stack",
            demoLink: "https://taskier-b3be2ded42fa.herokuapp.com/",
            codeLink: "https://github.com/rahulraikhy/Taskier",
            image: Project4Image,
            date: "Aug 2023"
        },
        {
            title: "A football predictions app built with Node, Express and MongoDB",
            description: "Make predictions for the 23/23 Premier League season for every Liverpool fixture!",
            demoLink: "",
            codeLink: "https://github.com/rahulraikhy/football-predictions",
            image: Project2Image,
            date: "Jul 2023"
        },
        {
            title: "Concentration game built in HTML, CSS and vanilla JavaScript",
            description: "A simple memory card game!",
            demoLink: "https://rahulraikhy.github.io/Concentration/",
            codeLink: "https://github.com/rahulraikhy/Concentration",
            image: Project1Image,
            date: "Jun 2023"
        }
    ];

    return (
        <div name='projects'>
            <div>
                <div>
                    <p>Projects</p>
                    <p>Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div>
                    {projectDetails.map((project, idx) => (
                        <div key={idx}>

                            {/* Background Image */}
                            <div style={{ backgroundImage: `url(${project.image})` }}></div>

                            {/* Hover Effect */}
                            <div>
                                <span>
                                    {project.title}
                                </span>
                                <span>
                                    {project.description}
                                </span>
                                <span>
                                    {project.date}
                                </span>
                                <div>
                                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                                        <button>Demo</button>
                                    </a>
                                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                                        <button>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;