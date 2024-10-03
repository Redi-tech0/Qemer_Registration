import React from 'react';
import './AboutUs.css';

const About = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1>About Us</h1>
                <p>
                    Established in 2019, Qemer Software Technology PLC has been fostering continuous growth
                    and delivering innovative digital solutions to clients, and it has established a solid track record of
                    progressive development. Our team is comprised of skilled professionals who are not only experts
                    in their respective fields but are also driven by a shared love for coding and problem-solving.
                </p>
                <p>
                    With a blend of creativity, technical expertise, and attention to detail, we deliver
                    tailor-made solutions that cater specifically to our clients' unique requirements.
                </p>
            </div>
            <div className="about-us-image">
                <img 
                    src="./new.jpg" 
                    alt=" " 
                />
            </div>
        </div>
    );
}

export default About;
