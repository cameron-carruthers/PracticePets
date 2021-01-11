import React from 'react';
import styled from 'styled-components';

const PrimaryHeading = styled.h1`
  text-align: center;
  width: 400px;
  color: white;

  @media (max-height: 400px) {
    margin-top: 20px;
  }
`

const PrimaryColor = styled.span`
  color: #95CB89;
;
`

const Title = () => (
  <PrimaryHeading>Practice<PrimaryColor>Pets</PrimaryColor></PrimaryHeading>
)

export default Title;