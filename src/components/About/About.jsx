import React from 'react';
import './About.styles.sass';
import Perfil from '../../images/perfil.png'

const About = () => {

    return (
        <section id="about" className="pt-3 mt-4">
            <div className="container text-center" data-aos="zoom-in">
                <h2 className="py-5">About Me</h2>
                <img className="profile" src={Perfil} alt="profile img" width="150px" />
                <div className="mt-4">
                    <p>First and foremost, I'm a passionate <span>Freelance Front-end developer</span> from Venezuela</p>
                    <p>Since 2015 (5 years ago), I have been worked with Wordpress creating websites using themes/templates. So in June 2018, I started my journey as a truly web developer, starting learing a lot from videos and tutorials about HTML, CSS and JavaSctipt.</p>
                    <p>Started to freelancing in <span>Workana</span> found some clients and since then I work from home.</p>
                    <p>During 2019 until now, I learned from online courses like <a href="https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/">Modern JavaScript</a>, <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/">The Complete Web Developer in 2020</a>, <a href="https://www.udemy.com/course/php-y-mysql/">PHP 7 y MySQL</a>, and also watched a lot of youtube videos about Javascript.</p>
                    <p>To show the things I'm able to do, I also <span> did a bunch of personal projects</span> with the knowledge I gathered from the courses, you can check them on here in my portfolio.</p>
                </div>
            </div>
        </section>
    )
};

export default About;
