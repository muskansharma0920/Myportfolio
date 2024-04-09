import React from 'react';
import './App.css';
import Navbar from './Navbar';
import pdf from '../src/pdf/resume.pdf'

function App() {

  const skills = [
    { name: "HTML", image: "images/html.png" },
    { name: "CSS", image: "images/css.png" },
    { name: "JavaScript", image: "images/js.png" },
    { name: "Bootstrap", image: "images/bootstrap.png" },
    { name: "React.js", image: "images/react.png" },
    { name: "MERN", image: "images/mern.png" },
  ];

  return (
    <>
      <Navbar />

      {/* home */}
      <div id='home'>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 class="font">
                Hi! My Name is
                Muskan Sharma.
                I am a Fullstack Developer.
              </h3>
              <br></br>
              <a href={pdf} download="resume.pdf" className='btn btn-outline-dark'>Download Resume</a>
            </div>
            <div class="col-6">
              <img src='images/png.jpg'></img>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* about */}
      <div id='about'>
        <div className='container'>
          <div className='about-section'>
            <h2>About Me</h2>
            <div className="about-grid">
              <div className="about-image">
                <img src="images/pngp.jpg" />
              </div>
              <div className="about-content">
                <p>
                  I have a passionate and dedicated fresher seeking a challenging opportunity as
                  a web developer to utilize my skills in HTML, CSS, JavaScript and other relevant
                  technologies to contribute effectively to innovative web development projects, while
                  continuously learning and growing in a dynamic environment.
                  Feel free to explore my portfolio and get in touch!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* skills */}
      <div id='skill'>
        <div class="contanier">
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.image} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* project */}
      <div id='project'>
        <div class="container">
          <div className="project-section">
            <h2>Projects</h2>
            <div className='project-content'>
              <div className='row'>
                <div class="card" style={{ width: '18rem' }}>
                  <img src="images/images.jfif" class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title">Netflix Clone</h5>
                    <p class="card-text">
                      This is a project made with complete HTML, CSS, JavaScript.
                    </p>
                    <a href="https://github.com/muskansharma0920/Clone" class="btn btn-primary">More</a>
                  </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                  <img src="images/converter.jfif" class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title">Temperature Converter</h5>
                    <p class="card-text">
                      This is a project made with complete HTML, CSS.
                    </p>
                    <a href="https://github.com/muskansharma0920/Converter" class="btn btn-primary">More</a>
                  </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                  <img src="images/portfolio.jfif" class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h5 class="card-title">Portfolio</h5>
                    <p class="card-text">
                      This is a project made with complete React js.
                    </p>
                    <a href="https://github.com/muskansharma0920/Portfolio" class="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* footer */}
      <footer class="footer">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-4 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#home" class="text-body">Home</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 mb-4 mb-md-0">
              <ul class="list-unstyled">
                <li>
                  <a href="#about" class="text-body">About</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#skill" class="text-body">Skills</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 mb-4 mb-md-0">
              <ul class="list-unstyled">
                <li>
                  <a href="#project" class="text-body">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center p-3" style={{ backgroundColor: "#aba1a1" }}>
          <h5 id='contact'>Contact me (muskansharma12092000@gmail.com)</h5>
          <a class="text-body" href="#">Muskan Sharma</a>
        </div>
      </footer>
    </>
  );
}

export default App;