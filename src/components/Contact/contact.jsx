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
                <div className="links">
                </div>
            </form>
        </div>
    )
}