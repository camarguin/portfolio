import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive'
import { SiInstagram, SiGithub, SiLinkedin } from 'react-icons/si';
import MyButton from '../Button/MyButton';
import PageTitles from '../PageTitles/PageTitles';
import { SectionContainer, LeftContainer, RightContainer, PageContent, ImageContainer, ButtonsContainer, IconsContainer } from './styles';
import aboutPicture from '../../public/assets/aboutPicture.jpg';
import aboutPictureMobile from '../../public/assets/aboutPictureMobile.png';

const Aboutpage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 450px)'
  })
  return (
    <SectionContainer>
      <LeftContainer>
        <PageTitles pageTitle1="ABOUT ME" pageTitle2="Lucas Gerhardt de Camargo" />
        <PageContent>
          Hi there! I am Lucas and I am a Web developer based in Vancouver, BC.
          I love bringing ideas to life in a website and I enjoy learning new things about technology.
          If you have interest in working with me please feel free to contact me.
        </PageContent>
        <IconsContainer>
          <a href="https://www.instagram.com/lucasgcoder/" target="_blank" rel="noopener noreferrer">
            <SiInstagram />
          </a>
          <a href="https://github.com/camarguin" target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/lucasgerhardt/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
        </IconsContainer>
        <ButtonsContainer isDouble>
          <MyButton btnLabel="Resume" btnHref="https://drive.google.com/file/d/1PwtMmXsknRd0pQMcrJUMy5zRUG1kJjis/view?usp=sharing" />
          <MyButton btnLabel="Contact me" btnHref="mailto:lucasgcamargo@icloud.com" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <Image src={aboutPicture} alt="Lucas" priority={true} />
        </ImageContainer>
      </RightContainer>
    </SectionContainer>
  );
};

export default Aboutpage;