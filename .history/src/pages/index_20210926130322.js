import React from "react"
import loadable from '@loadable/component'
import { Layout, Seo } from "components/common";
import { Intro, Contact, Projects } from "components/landing";

// const Skills = loadable(() => import('../components/landing/Skills/index.jsx'))
const { Intro, Contact, Projects } = loadable(() => import('components/landing'))

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