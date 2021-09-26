import React from "react"
import loadable from '@loadable/component'
import { Layout, Seo } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";

const Test = loadable(() => import('../components/test.js'))

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);

export default Home;

