import loadable from '@loadable/component'
import React from "react"
// import { Layout, Seo } from "components/common"
import { Layout, Seo, Skills, Contact, Projects } from "components/common"
import Intro from "components/landing"
// const Skills = loadable(() => import('components/landing'))
// const Contact = loadable(() => import('components/landing'))
// const Projects = loadable(() => import('components/landing'))

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);

export default Home;

