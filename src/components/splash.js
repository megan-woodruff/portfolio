import React from "react"
import "./splash.scss"

const Splash = () => {
  const onClick = () => {
    document
      .getElementById("projectDisplay")
      .scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="splash">
      <h1>Hello! I'm Megan.</h1>
      <h3>
        I'm a creative technologist with a focus on <span className="emphasis">interaction design</span> + <span className="emphasis">front-end development</span> on web and mobile
      </h3>
      {/* <h3 class="current">I'm currently a UX Engineer at Seattle-based clothing rental startup <a href="https://armoire.style" target="_blank"  rel="noopener noreferrer">Armoire Style</a>. <br></br>Learn more <a href="https://meganewoodruff.com/about">about me</a>, or explore a sample of <button onClick={onClick}>my work</button> below.</h3> */}
    </div>
  )
}

export default Splash
