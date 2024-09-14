import"./About.css"
const About = () =>{
    return(
        <div id="about">
 <div className="about">
        <h1 className="orangeText">About Me</h1>
    <div className="about-list">
        <h2>Education</h2>
        <div className="about-item">
    <h3>Federal University of Technology, Akure.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        tempora excepturi incidunt velit architecto impedit!</p>
        </div>
        </div>
    <div className="about-list">
        <h2>Experience</h2>
        <div className="about-item">
            <h3>FlexiSaF Tech Company, Abuja, Nigeria.</h3>
            <p>I worked as a Frontend Developer intern for 
                4 months and I was able to 
                complete the internship programme with a BMI calculator project.</p>
        </div>
        </div>
    <div className="about-list">
        <h2>My Stack</h2>
        <div className="about-item">
            {/* <h3>Frontend Development</h3> */}
            <ul>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>CSS3</li>
                <li>Tailwindcss</li>
            </ul>
        </div>
        </div>
        <div className="about-list">
        <h2>Soft Skills</h2>
        <div className="about-item">
            {/* <h3>Frontend Development</h3> */}
            <ul>
                <li>Effective Communication</li>
                <li>Collaboration</li>
                <li>Commitment</li>
                <li>Leadership</li>
                <li>Tailwindcss</li>
            </ul>
        </div>
        </div>
            </div>
        </div>
       
    )
}
export default About