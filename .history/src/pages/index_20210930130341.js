import React from "react"
import loadable from '@loadable/component'
import { Intro } from "components/landing/Intro";
import { Layout } from "components/common/Layout"

const Contact = loadable(() => import('../components/landing/Contact/index.jsx'))
const About = loadable(() => import('../components/landing/About/index.jsx'))
const Oktatas = loadable(() => import('../components/landing/Oktatas/index.jsx'))
const Tanuloink = loadable(() => import('../components/landing/Tanuloink/index.jsx'))

const Seo = loadable(() => import('../components/common/Seo/index.jsx'))

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Oktatas/>
    <About />
    <Tanuloink/>
    <Contact/>
  </Layout>
);

export default Home;
