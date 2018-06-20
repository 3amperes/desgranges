import React from 'react';
import { Container, Cell, Heading, Paragraph, ContaCta } from 'components';

const AboutPage = () => (
  <div>
    <Container height="200px">
      <Cell center width={6} left={4}>
        <Heading>Projets</Heading>
        <Paragraph>
          Une sélection de projets réalisés sur les 3 dernières années en
          freelance et en agence.
        </Paragraph>
      </Cell>
    </Container>
    <Container rows="repeat(3, 80px auto)">
      <Cell width={4} left={3} height={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, modi
        esse eaque laudantium minus necessitatibus ratione repudiandae ea,
        accusantium suscipit cupiditate odio aspernatur totam ad deserunt facere
        numquam, incidunt nihil! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi, modi esse eaque laudantium minus
        necessitatibus ratione repudiandae ea, accusantium suscipit cupiditate
        odio aspernatur totam ad deserunt facere numquam, incidunt nihil!
      </Cell>
      <Cell width={4} />
      <Cell width={4} height={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, modi
        esse eaque laudantium minus necessitatibus ratione repudiandae ea,
        accusantium suscipit cupiditate odio aspernatur totam ad deserunt facere
        numquam, incidunt nihil! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi, modi esse eaque laudantium minus
        necessitatibus ratione repudiandae ea, accusantium suscipit cupiditate
        odio aspernatur totam ad deserunt facere numquam, incidunt nihil!
      </Cell>
      <Cell left={3} width={4} height={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, modi
        esse eaque laudantium minus necessitatibus ratione repudiandae ea,
        accusantium suscipit cupiditate odio aspernatur totam ad deserunt facere
        numquam, incidunt nihil! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi, modi esse eaque laudantium minus
        necessitatibus ratione repudiandae ea, accusantium suscipit cupiditate
        odio aspernatur totam ad deserunt facere numquam, incidunt nihil!
      </Cell>
      <Cell width={4} height={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, modi
        esse eaque laudantium minus necessitatibus ratione repudiandae ea,
        accusantium suscipit cupiditate odio aspernatur totam ad deserunt facere
        numquam, incidunt nihil! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi, modi esse eaque laudantium minus
        necessitatibus ratione repudiandae ea, accusantium suscipit cupiditate
        odio aspernatur totam ad deserunt facere numquam, incidunt nihil!
      </Cell>
      <Cell left={3} width={4} height={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, modi
        esse eaque laudantium minus necessitatibus ratione repudiandae ea,
        accusantium suscipit cupiditate odio aspernatur totam ad deserunt facere
        numquam, incidunt nihil! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi, modi esse eaque laudantium minus
        necessitatibus ratione repudiandae ea, accusantium suscipit cupiditate
        odio aspernatur totam ad deserunt facere numquam, incidunt nihil!
      </Cell>
      <Cell width={4} height={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, modi
        esse eaque laudantium minus necessitatibus ratione repudiandae ea,
        accusantium suscipit cupiditate odio aspernatur totam ad deserunt facere
        numquam, incidunt nihil! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi, modi esse eaque laudantium minus
        necessitatibus ratione repudiandae ea, accusantium suscipit cupiditate
        odio aspernatur totam ad deserunt facere numquam, incidunt nihil!
      </Cell>
    </Container>
    <ContaCta />
  </div>
);

export default AboutPage;
