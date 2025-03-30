import * as React from 'react';
import styled from 'styled-components';
import {IWorkData} from '../data/workdata';

interface IWorkProps {
  work: IWorkData
}

const WorkExp = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const WorkPeriod = styled.div`
  min-width: fit-content;
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 150px;

  @media (max-width: 500px) {
    min-width: 0px;
  }
`;

const WorkDetails = styled.div`
  max-width: 400px;
`;

const WorkTitle = styled.div`
  
`;

const WorkCompany = styled.div`
  padding-top: 10px;
`;

const WorkDesc = styled.div`
  padding-top: 10px;
`;

const WorkTechStack = styled.div`
  padding-top: 10px;
`;

const Work: React.FC<IWorkProps> = ({work}) => {
  return (
    <WorkExp>
      <WorkPeriod>{work.period}</WorkPeriod>
      <WorkDetails>
        <WorkTitle>{work.title}</WorkTitle>
        <WorkCompany>{work.company}</WorkCompany>
        <WorkDesc>{work.description}</WorkDesc>
        <WorkTechStack>{work.techStack.join('\u2022')}</WorkTechStack>
      </WorkDetails>
    </WorkExp>
  );
}

export default Work;
