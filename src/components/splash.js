import React from 'react'
import './splash.scss'

const Splash = () => {
  const onClick = () => {
    document
      .getElementById('projectDisplay')
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="splash">
      <h1>Hello! I'm Megan.</h1>
      <h3>
        I'm a design technologist with a focus on{' '}
        <span className="emphasis">interaction design</span> +{' '}
        <span className="emphasis">front-end development</span> on web and
        mobile
      </h3>
    </div>
  )
}

export default Splash
