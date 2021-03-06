import React from 'react';
import PageTitles from '../PageTitles/PageTitles';
import Skills from '../Skills/Skills';
import { SectionAltContainer } from './styles';

const Skillspage = () => {
  return (
    <SectionAltContainer>
      <PageTitles pageTitle1="SKILLS" pageTitle2="My Competencies" />
      <Skills />
    </SectionAltContainer>
  );
};

export default Skillspage;