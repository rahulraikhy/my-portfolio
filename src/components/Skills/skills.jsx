import React from 'react';
import './skills.css';
import {
    FaHtml5,
    FaCss3,
    FaGithub,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaPython,
    FaBootstrap
} from 'react-icons/fa';
import {
    SiExpress,
    SiDjango,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiHeroku
} from 'react-icons/si';

function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="icons-container">
                    <div><FaHtml5 size={50} /><p>HTML</p></div>
                    <div><FaCss3 size={50} /><p>CSS</p></div>
                    <div><FaBootstrap size={50} /><p>Bootstrap</p></div>
                    <div><FaGithub size={50} /><p>GitHub</p></div>
                    <div><FaJsSquare size={50} /><p>JavaScript</p></div>
                    <div><FaReact size={50} /><p>React</p></div>
                    <div><FaNodeJs size={50} /><p>Node.js</p></div>
                    <div><SiExpress size={50} /><p>Express</p></div>
                    <div><FaPython size={50} /><p>Python</p></div>
                    <div><SiDjango size={50} /><p>Django</p></div>
                    <div><SiMongodb size={50} /><p>MongoDB</p></div>
                    <div><SiPostgresql size={50} /><p>PostgreSQL</p></div>
                    <div><SiTailwindcss size={50} /><p>Tailwind CSS</p></div>
                    <div><SiHeroku size={50} /><p>Heroku</p></div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
