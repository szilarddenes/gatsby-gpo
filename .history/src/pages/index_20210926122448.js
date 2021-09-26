import React from "react"
import { Layout, Seo } from "components/common"
import loadable from '@loadable/component'
const { Skills, Contact, Projects } = loadable(() => import('components/landing'))
import { Intro} from "components/landing";

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

