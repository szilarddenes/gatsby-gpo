import React from "react"
import loadable from '@loadable/component'
import { Layout, Seo } from "components/common";
import { Intro } from "components/landing";

const Contact = loadable(() => import('../components/landing/Contact/index.jsx'))
const About = loadable(() => import('../components/landing/About/index.jsx'))
const Oktatas = loadable(() => import('../components/landing/Oktatas/index.jsx'))
const Tanuloink = loadable(() => import('../components/landing/Tanuloink/index.jsx'))

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Oktatas name/>
    <About />
    <Tanuloink />
    <Contact />
  </Layout>
);

export default Home;

