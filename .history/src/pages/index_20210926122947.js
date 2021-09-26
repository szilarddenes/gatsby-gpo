import loadable from '@loadable/component'
import React from "react"
import { Layout, Seo } from "components/common"
import { Intro } from "components/landing"
const  Skills  = loadable(() => import('components/landing'))
const { Skills, Contact, Projects } = loadable(() => import('components/landing'))
const { Skills, Contact, Projects } = loadable(() => import('components/landing'))

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

