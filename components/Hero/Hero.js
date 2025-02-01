import React from 'react';

import { Section, SectionText, SectionTitle } from '@/styles/GlobalComponents';
import Button from '@/styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Tuntikorn Visoothikul portfolio. I am a full stack developer and have 7 years working experience.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/2025-Resume-t.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
