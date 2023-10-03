import React from "react";
import './home.css';
import profileImg from "../../images/portrait.jpg";

export default function Home() {
    return (
        <section id="intro">
            <img src={profileImg} alt="photo" className="photo" />
            <div className="introContent">
                <h1 className="hello animatedElement">Hey,</h1>
                <h2 className="introText animatedElement">I am <span className="introName animatedElement">Rahul Raikhy</span></h2>
                <h3 className="animatedElement">Glad to have you here!</h3>
                <p className="introPara animatedElement">
                    As a former social housing provider; I have spent the past decade analysing data, creating innovative solutions to human problems, and engineering new financial and psychological models. <br />
                    <br />
                    I transitioned into software engineering by creating websites and JavaScript games to promote further education and training in lower socio-economic areas. <br /> <br />
                    As a results driven, highly motivated software engineer, I am capable of architecting simple solutions to complex, technical problems. With one eye on the ever changing software landscape, I am committed to continuing my growth and development in the software field, as well as producing the best user-friendly outcomes.
                </p>
            </div>
        </section>
    )
} 