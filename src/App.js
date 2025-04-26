import React, { Component } from 'react';
import resume from './Deepak_CS_Disco_Resume.pdf';

class App extends Component {

  state = {
    tindex:true,
    skills:false,
    experience:false,
    contact:false
  }

  switchIndexHandler = () => {
    this.setState({
      tindex:true,
      skills:false,
      experience:false,
      contact:false,
    })
  }

  switchSkillsHandler = () => {
    this.setState({
      tindex:false,
      skills:true,
      experience:false,
      contact:false
    })
  }

  switchExperienceHandler = () => {
    this.setState({
      tindex:false,
      skills:false,
      experience:true,
      contact:false
    })
  }

  switchContactHandler = () => {
    this.setState({
      tindex:false,
      skills:false,
      experience:false,
      contact:true
    })
  }

  render() {
    const indexPage = this.state.tindex;
    const skillsPage = this.state.skills;
    const experiencePage = this.state.experience;
    const contactPage = this.state.contact;
    if(indexPage) {
    return (
      <div>
        <div className="app-content">
              <div className="header-outlet flex"></div>
              <div className="view-outlet">
                <div className="about">
                    <div className="">
                      <span className="name-label animated delay003 fadeInDown">Deepak Matta</span>
                      <div className="name-subheader animated delay005 fadeIn">( Professional Full-Stack developer )</div>
                    </div>
                    <div className="about-details">
                      <p className="paragraph animated delay007 fadeInUp">I am a full stack developer by profession and tech enthusiast at heart. I love to play around with emerging technologies and mix and match to develop cross-platform cutting edge applications.</p>
                      <p className="paragraph animated delay009 fadeInUp">I always have been interested in coding and aspect of art that code can bring make me very interested.</p>
                      <p className="paragraph animated delay011 fadeInUp">I enjoy learning new things, spending my time working on Data Structures & Algorithms and strongly believe that continuous education is the only way for all of us to evolve.</p>
                    </div>
                    <div className="download-resume-btn animated delay015 fadeInDown">
                        <a href={resume} target="_blank" rel="noopener noreferrer" download>Download Resume</a>
                    </div>
                </div>
              </div>
          </div>
          <div className="menu-outlet flex align-center animated delay007 fadeInUp">
              <div className="menu-container flex">
                <div className="menu-item">
                    <a onClick={this.switchIndexHandler} className="transition active">About</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchSkillsHandler} className="transition ">skills</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchExperienceHandler} className="transition ">experience</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchContactHandler} className="transition ">contact</a>
                    <label></label>
                </div>
              </div>
          </div>
         </div>
    );
    } else if(skillsPage) {
      return (
        <div>
          <div className="app-content">
            <div className="header-outlet flex">
               <div className="section-header animated delay003 fadeInLeft">
                  <h2>My Proficiency</h2>
               </div>
            </div>
            <div className="view-outlet">
               <div className="skills">
                  <p className="paragraph animated delay005 fadeInUp">The universe of web is ever so expanding with new technologies coming every day with their new features and ideology. Here are some of those which I feel passionate about and love working with.</p>
                  <div className="skill-section">
                     <h3 className="uppercase animated delay005 fadeIn">Technologies</h3>
                     <div className="skill-list flex wrap">
                        <div className="skill-list-item text-center animated delay003 fadeInRight">
                           <div>
                              <div title="Java">
                                 <div className="sprite sprite-java sprite-icon"></div>
                                 <span>Java</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay003 fadeInRight">
                           <div>
                              <div title="Kotlin">
                                 <div className="sprite sprite-kotlin sprite-icon"></div>
                                 <span>Kotlin</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay004 fadeInRight">
                           <div>
                              <div title="Python">
                                 <div className="sprite sprite-python sprite-icon"></div>
                                 <span>Python</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay005 fadeInRight">
                           <div>
                              <div title="MySQL">
                                 <div className="sprite sprite-mysql sprite-icon"></div>
                                 <span>MySQL</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay003 fadeInRight">
                           <div>
                              <div title="GraphQL">
                                 <div className="sprite sprite-graphql sprite-icon"></div>
                                 <span>GraphQL</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay006 fadeInRight">
                           <div>
                              <div title="GWT">
                                 <div className="sprite sprite-gwt sprite-icon"></div>
                                 <span>GWT</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay007 fadeInRight">
                           <div>
                              <div title="AWS">
                                 <div className="sprite sprite-aws sprite-icon"></div>
                                 <span>AWS</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay008 fadeInRight">
                           <div>
                              <div title="SpringBoot">
                                 <div className="sprite sprite-springBoot sprite-icon"></div>
                                 <span>SpringBoot</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay009 fadeInRight">
                           <div>
                              <div title="PHP">
                                 <div className="sprite sprite-php sprite-icon"></div>
                                 <span>PHP</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay003 fadeInRight">
                           <div>
                              <div title="TestNG">
                                 <div className="sprite sprite-testNG sprite-icon"></div>
                                 <span>TestNG</span>
                              </div>
                           </div>
                        </div>
                        <div className="skill-list-item text-center animated delay004 fadeInRight">
                           <div>
                              <div title="JUnit">
                                 <div className="sprite sprite-junit sprite-icon"></div>
                                 <span>JUnit</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>
         <div className="menu-outlet flex align-center animated delay007 fadeInUp">
              <div className="menu-container flex">
                <div className="menu-item">
                    <a onClick={this.switchIndexHandler} className="transition">About</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchSkillsHandler} className="transition active ">skills</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchExperienceHandler} className="transition ">experience</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchContactHandler} className="transition ">contact</a>
                    <label></label>
                </div>
              </div>
          </div>
        </div>
      );

    } else if(experiencePage) {
        return (
          <div className="experience-scroller">
          <div className="app-content">
            <div className="header-outlet flex">
               <div className="section-header animated delay003 fadeInLeft">
                  <h2>My Work Experience</h2>
               </div>
            </div>
            <div className="view-outlet">
               <div className="work-exp-list">
                  <div className="work-exp-item">
                     <h3 className="animated delay005 fadeInUp">Make My Trip</h3>
                     <label className="animated delay007 fadeInDown">January, 2020 - Present</label>
                     <p className="paragraph animated delay003 fadeIn">Looking for new opportunities I joined Make My Trip. Implemented Optical Character Recognition of Invoices (Scanned PDF) by Google-Vision & Tesseract 
                        My aim is to make the most effective use of my time utilizing my expertise especially in Java to deliver quality solutions.
                     </p>
                  </div>
                  <div className="work-exp-item">
                     <h3 className="animated delay005 fadeInUp">iTuple Technologies - Milkbasket</h3>
                     <label className="animated delay007 fadeInDown">October, 2018 - December, 2019</label>
                     <p className="paragraph animated delay003 fadeIn">Designed to provide extreme convenience and is fulfilling the entire grocery needs of a household everyday before 7:00 a.m where I worked closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance</p>
                  </div>
                  <div className="work-exp-item">
                     <h3 className="animated delay005 fadeInUp">Hotellauncher</h3>
                     <label className="animated delay007 fadeInDown">October, 2015 - October, 2018</label>
                     <p className="paragraph animated delay003 fadeIn">A real time hotel booking application developed to ease the process of Hotel Management. It helps different small and large scale vendors to manage their everything that resides in a hotel inventory / revenue / people / Booking(s) where I Integration with Online Travel Agents like Make My Trip, Goibibo by which the reservation is reflected at RMS home screen in real-time.</p>
                  </div>
                  <div className="work-exp-item">
                     <h3 className="animated delay005 fadeInUp">JMIT Radaur</h3>
                     <label className="animated delay007 fadeInDown">Aug, 2011 - May, 2015</label>
                     <p className="paragraph animated delay003 fadeIn">Graduation plays an important role for my career. During this span of time I not only studied my engineering subject but also worked on live projects for college.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="menu-outlet flex align-center animated delay007 fadeInUp">
              <div className="menu-container flex">
                <div className="menu-item">
                    <a onClick={this.switchIndexHandler} className="transition">About</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchSkillsHandler} className="transition ">skills</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchExperienceHandler} className="transition active ">experience</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchContactHandler} className="transition ">contact</a>
                    <label></label>
                </div>
              </div>
          </div>
          </div>

        );
    } else if(contactPage) {
      return (
        <div className="app-content">
        <div>
            <div className="header-outlet flex">
               <div className="section-header animated delay003 fadeInLeft">
                  <h2>Get In Touch</h2>
               </div>
            </div>
            <div className="view-outlet">
               <div className="contact text-center">
                  <p className="paragraph animated delay003 fadeInUp">Drop me a line on</p>
                  <div className="contact-item">
                     <h4><a title="dpk.matta.dm@gmail.com" className="uppercase animated delay005 fadeInUp">dpk.matta.dm@gmail.com</a></h4>
                  </div>
                  <p className="paragraph uppercase animated delay007 fadeInUp">Or</p>
                  <p className="paragraph animated delay009 fadeInUp">Reach me out at</p>
                  <div className="contact-item">
                     <h4><a title="+91-9671-1111-75" className="uppercase animated delay011 fadeInUp">+91-9671-1111-75</a></h4>
                  </div>
                  <p className="paragraph uppercase animated delay013 fadeInUp">Or</p>
                  <p className="paragraph animated delay015 fadeInUp">Also, you can find me on:</p>
                  <div className="social-links flex">
                     <div className="social-link-item animated delay017 fadeInUp">
                        <div>
                           <a href="https://www.facebook.com/dpkmatta" target="_blank">
                              <div title="Facebook - Deepak Matta">
                                 <div className="sprite sprite-facebook"></div>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="social-link-item animated delay017 fadeInUp">
                        <div>
                           <a href="https://www.instagram.com/matta6538/" target="_blank">
                              <div title="Instagram - Deepak Matta">
                                 <div className="sprite sprite-instagram"></div>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="social-link-item animated delay017 fadeInUp">
                        <div>
                           <a href="https://www.linkedin.com/in/dpkmatta/" target="_blank">
                              <div title="LinkedIn - Deepak Matta">
                                 <div className="sprite sprite-linkedin"></div>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="social-link-item animated delay017 fadeInUp">
                        <div>
                           <a href="https://twitter.com/deepak_matta" target="_blank">
                              <div title="Twitter - Deepak Matta">
                                 <div className="sprite sprite-twitter"></div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="menu-outlet flex align-center animated delay007 fadeInUp">
              <div className="menu-container flex">
                <div className="menu-item">
                    <a onClick={this.switchIndexHandler} className="transition">About</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchSkillsHandler} className="transition ">skills</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchExperienceHandler} className="transition ">experience</a>
                    <label></label>
                </div>
                <div className="menu-item">
                    <a onClick={this.switchContactHandler} className="transition active ">contact</a>
                    <label></label>
                </div>
              </div>
          </div>
        </div>
      );
    }

  }
}

export default App;
