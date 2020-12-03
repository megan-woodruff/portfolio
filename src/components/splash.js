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
      <h3>Hello! I'm Megan.</h3>
      <h1>
        I am a creative technologist who loves combining{" "}
        <span className="emphasis">UX design</span> +{" "}
        <span className="emphasis">engineering</span> to build robust,
        user-driven experiences.
      </h1>
      {/* <h3 class="current">I'm currently a UX Engineer at Seattle-based clothing rental startup <a href="https://armoire.style" target="_blank"  rel="noopener noreferrer">Armoire Style</a>. <br></br>Learn more <a href="https://meganewoodruff.com/about">about me</a>, or explore a sample of <button onClick={onClick}>my work</button> below.</h3> */}
    </div>
  )
}

export default Splash
