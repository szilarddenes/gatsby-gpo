import React from "react"
import loadable from '@loadable/component'
import { Layout, Seo } from "components/common";
import Intro from "components/landing";

const Contact = loadable(() => import('../components/landing/Contact/index.jsx'))
const Skills = loadable(() => import('../components/landing/Skills/index.jsx'))
const Projects = loadable(() => import('../components/landing/Projects/index.jsx'))

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

