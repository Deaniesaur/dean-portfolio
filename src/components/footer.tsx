import * as React from 'react';
import styled from 'styled-components';
export interface IFooterProps {
}

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70 px;
  padding: 15 px;
`;

const StyledSocialLinks = styled.div `
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }

    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <StyledFooter>
        <StyledCredit>
          <div>Designed &amp; Built by Dean Pinlac</div>
        </StyledCredit>
      </StyledFooter>
    );
  }
}
