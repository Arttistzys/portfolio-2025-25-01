import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '@/components/Hero/Hero';
import { Layout } from '@/layout/Layout';
import { Section } from '@/styles/GlobalComponents';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import Timeline from '@/components/TimeLine/TimeLine';

const Home = () => {
  // console.log('FUCNTION COME HERE !')
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
