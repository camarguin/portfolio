import React from 'react';
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiTypescript, SiFigma, SiNextDotJs, SiFirebase, SiMaterialUi, SiGithub, SiMongodb, SiNodeDotJs } from 'react-icons/si';
import SkillCard from './SkillCard';
import { SkillsGridContainer } from './styles';
import ChakraIcon from '../../public/assets/ChakraIcon';
import FaunaIcon from '../../public/assets/FaunaIcon';

const Skills = () => {
  return (
    <SkillsGridContainer>
      <SkillCard skillName="Html" skillIcon={<SiHtml5 />} />
      <SkillCard skillName="CSS" skillIcon={<SiCss3 />} />
      <SkillCard skillName="Sass" skillIcon={<SiSass />} />
      <SkillCard skillName="Javascript" skillIcon={<SiJavascript />} />
      <SkillCard skillName="Reactjs" skillIcon={<SiReact />} />
      <SkillCard skillName="Typescript" skillIcon={<SiTypescript />} />
      <SkillCard skillName="Nextjs" skillIcon={<SiNextDotJs />} />
      <SkillCard skillName="Figma" skillIcon={<SiFigma />} />
      <SkillCard skillName="Firebase" skillIcon={<SiFirebase />} />
      <SkillCard skillName="MongoDB" skillIcon={<SiMongodb />} />
      {/* <SkillCard skillName="FaunaDB" skillIcon={<FaunaIcon />} /> */}
      <SkillCard skillName="Github" skillIcon={<SiGithub />} />
      <SkillCard skillName="Chakra-ui" skillIcon={<ChakraIcon />} />
      <SkillCard skillName="Material-ui" skillIcon={<SiMaterialUi />} />
      <SkillCard skillName="Nodejs" skillIcon={<SiNodeDotJs />} />
    </SkillsGridContainer>
  );
};

export default Skills;