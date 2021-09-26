import React from "react"
import loadable from '@loadable/component'
import { Layout, Seo } from "components/common";
import { Intro, Contact, Projects, Skills } from "components/landing";
// import Intro from "components/landing";

// const Skills = loadable(() => import('../components/landing/Skills'))
// const Contact = loadable(() => import('../components/landing/Contact/index.jsx'))
// const Projects = loadable(() => import('../components/landing/Projects/index.jsx'))

function Home() {
  return()
  <Layout>
    <Seo />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
};

export default Home;