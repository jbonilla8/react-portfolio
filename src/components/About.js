import React from 'react';
import styled from 'styled-components';

const About = () => (
  <AboutContainer>
    <Text>
      <h1>About</h1>
      <p>
        I create captivating websites that offer responsive
        and intuitive user experiences. I am originally from Nebraska but just recently moved to Florida. So far, I am really diggin the sunshine state!
      </p>

      <p>
        I am constantly expanding my knowledge of web related technologies and
        design.
      </p>
      <p>
        Here are some technologies I have worked with: React, JavaScript,
        jQuery, HTML5, CSS, SASS, Styled Components, Git, Bootstrap, C#, WPF,
        ASP.NET, Visual Basic, Microsoft SSRS, Microsoft Office, Adobe
        Photoshop, Figma
      </p>
    </Text>
  </AboutContainer>
);

export default About;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: auto;
  background-color: #dedede;
`;

const Text = styled.div`
  grid-column: 2/3;

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
