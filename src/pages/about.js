import React from "react"
import '../components/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="contentWrapper">
      <h1>Thank you for visiting my portfolio!</h1>
      <p style={{padding: '2rem 0 2.4rem'}}>I am a Seattle-based creative technologist who is passionate about the power of cross-discipline collaboration in UX. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet, neque id tempus elementum, justo turpis viverra sem, in semper lorem urna id orci. Suspendisse at efficitur augue. Quisque dignissim ornare consectetur. Ut rutrum vulputate arcu, ut dapibus est blandit ut. Ut eros neque, eleifend non lacinia ut, blandit sit amet nibh. Praesent varius dictum nunc, id sollicitudin metus vestibulum ac. Suspendisse euismod nunc at feugiat varius. Phasellus at suscipit metus. Vestibulum ut velit tincidunt sem laoreet scelerisque sit amet eget dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ornare mauris et massa tempus, sit amet vulputate libero commodo. Vestibulum justo nibh, porttitor vitae orci ut, ultrices feugiat turpis. Vivamus consequat massa ac iaculis porta. Nunc elementum enim sed malesuada porttitor. Morbi tristique aliquam consequat. Sed massa dui, dignissim quis nisi ornare, mattis bibendum justo. Praesent sit amet augue semper magna convallis pulvinar. Praesent lacinia bibendum risus. Nam feugiat gravida sem, lobortis ullamcorper metus mattis ac. Duis vel lacinia ante. Vestibulum tincidunt suscipit metus. Ut tempus ullamcorper neque laoreet condimentum.</p>
    </div>
  </Layout>
)

export default About
