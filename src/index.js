import React from "react";
import ReactDOM from "react-dom";
import cssImg from "./images/css.png";
import htmlImg from "./images/html.png";
import jsImg from "./images/js.png";
import reactImg from "./images/react.png";
import pfpImg from "./images/pfpImg.jpg";
import verifiedIcon from "./images/verified.png";
import clockIcon from "./images/clock.png";

const techTitle = "Front-End Technologies";

const ImageComponent = () => {
  return (
    <div className="images">
      <img src={cssImg} alt="css" />
      <img src={htmlImg} alt="html" />
      <img src={jsImg} alt="js" />
      <img src={reactImg} alt="react" />
    </div>
  )
}

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const [ c1, c2, c3, c4, c5 ] = [ hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor() ]

const SubsButtonComponent = () => <button className="subscribe" type="submit">Subscribe</button>

const FormComponent = () => {
  return (
    <form action="">
      <input type="text" placeholder="First name"/>
      <input type="text" placeholder="Last name"/>
      <input type="text" placeholder="Email"/> <br />
      <SubsButtonComponent />
    </form>
  )
}

const SkillsComponent = () => {
  const skillTitle = "SKILLS"
  const skillsArr = [ "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "Numpy", "Pandas", "Data Analytics", "MySQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git" ]
  return (
    <>
      <h4>{skillTitle}</h4>
      <div className="skills">
        {
          skillsArr.map((skill) => {
            return (
              <button className="skill">{skill}</button>
            )
          })
        }
      </div>
    </>
  )
}

const ProfileComponent = () => {
  return (
    <>
      <img className="profile-img" src={pfpImg} alt="pfp" />
      <h2>OSINAYA OLUDARE <img className="verified" src={verifiedIcon} alt="verified" /> </h2>
      <p className="job-title">React Developer, Nigeria</p>
    </>
  )
}


const main = (
  <main className="fe-container">
    <h3>{techTitle}</h3>
    <ImageComponent />
  </main>
)

const HexaColor = (
  <colors style={{ textAlign: "center" }}>
    <div style={{backgroundColor: c1, padding: ".6rem"}}>{c1}</div>
    <div style={{backgroundColor: c2, padding: ".6rem"}}>{c2}</div>
    <div style={{backgroundColor: c3, padding: ".6rem"}}>{c3}</div>
    <div style={{backgroundColor: c4, padding: ".6rem"}}>{c4}</div>
    <div style={{backgroundColor: c5, padding: ".6rem"}}>{c5}</div>
  </colors>
) 

const contact = (
  <section className="ccc">
    <div className="cc-container">
      <h5>SUBSCRIBE</h5>
      <p className="cc-title">Sign up with your email address to receive news and updates.</p>
      <FormComponent />
    </div>
  </section>
)

const profile = (
  <section className="profile-container">
    <div className="pp-container">
      <ProfileComponent />
      <SkillsComponent />
      <p className="join"> <img className="clock" src={clockIcon} alt="clock" /> Joined on October, 2022</p>
    </div>
  </section>
)

const app = (
  <div>
    {main}
    {HexaColor}
    {contact}
    {profile}
  </div>
)

const rootElement = document.getElementById("root")

ReactDOM.render(app, rootElement);
