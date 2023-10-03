import React from "react";
import './contact.css';

export default function Contact() {
    return (
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDescription">Please fill out the form below to discuss any opportunities or questions.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name" />
                <input type="text" className="email" placeholder="Your Email" />
                <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="socialIcons">
                    <a href="https://github.com/rahulraikhy" target="_blank" rel="noopener noreferrer">
                        <img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" alt="Github" className="gitLogo" />
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-raikhy/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.pnghd.pics/data/739/linkedin-logos-21.png" alt="git" className="gitLogo" />
                    </a>
                </div>
            </form>
        </div>
    )
}