import React from 'react';
import styled from 'styled-components';

export interface IEducation {
  id: number,
  school: String,
  period: String,
  program: String,
}

interface IEducationProps {
  education: IEducation,
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Details = styled.div`

`;

const Period = styled.div`
  
`;

const School = styled.div`
  
`;

const Program = styled.div`
  
`;

const Education: React.FC<IEducationProps> = ({education}) => {
  return (
    <Container>
      <Period>{education.period}</Period>
      <Details>
        <School>{education.school}</School>
        <Program>{education.program}</Program>
      </Details>
    </Container>
  )
}

export default Education;