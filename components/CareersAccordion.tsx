import { Box, Text } from '../components/core';
import Heading from '../components/core/heading';
import styled from 'styled-components';
import { theme } from '../theme';
import Accordion from 'react-bootstrap/Accordion';
import bullet from '../public/assets/bullet.svg'
import { Anchor } from '../components/core/anchor';

const StyledHeading = styled(Heading)`
font-size: ${theme.fontSize.xxxl};
line-height: 0px
`

const StyledAccordionItem = styled(Accordion.Item)`
  background: white;
  width: 100%;
  border: none;
  padding: 0;
  margin-bottom: 24px;

  .accordion-item:last-of-type {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion-item:first-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .accordion-item {
    color: ${theme.colors.neutral.xl};
    background-color: none;
    border: none;
  }
  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 0;
    border-top-right-radius: 0; 
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  .accordion-button {
    padding: 48px;
  }
  .accordion-button:focus {
    z-index: 3;
    border-color: none;
    outline: 0;
    box-shadow: none;
  }
  .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: inherit;
    box-shadow: none;
  }
  .accordion-body {
    padding: 0;
  }
`

const StyledText = styled(Text)`
  margin-bottom: 18px;
`

const StyledJobHeading = styled(Heading)`
  font-size: ${theme.fontSize.xl};
  margin-bottom: 0;
  font-weight: ${theme.fontWeight[300]};
`

const StyledLineItem = styled.li`
  list-style-image: url(${bullet.src});
  padding-left: 12px;
  margin-bottom: 10px;
`

export const CareersAccordion = ({ activeCategory = [{ heading: '' }, { heading: '' }] }) => {
  return (
    <Box width="100%">
      <Accordion defaultActiveKey={null}>
        <StyledAccordionItem eventKey="0">
          <Accordion.Header>
            <StyledHeading as="h2">Engineers</StyledHeading>
          </Accordion.Header>
          <Accordion.Body>
            <Box padding="0px 48px 48px 48px">
              <StyledText>01 Communique is a TSX-V listed software publisher and an equal opportunity employer that supports workplace diversity. Established in 1992, we are a technology pioneer of Post-Quantum Cyber Security and Remote Access Software Solutions.</StyledText>
              <StyledText>Our latest innovation is on cyber security with the development focus on Quantum-Safe Cryptography. 01's patent-protected Quantum-Safe Cryptography is designed to operate on classical computer systems as we know them today, while simultaneously being secure enough to safeguard against potential cyber attacks from quantum computers.</StyledText>
              <StyledText>Our award winning products and services are marketed around the world. The tremendous increase in demand for our services and patented technologies has created openings in our R&D area. This is an excellent opportunity for successful candidates to further their careers with a result-oriented company in an exciting fast-paced industry.</StyledText>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Quantum-Safe Software Developers:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Hands-on skills in C/C++ and Python</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience with designing and implementing code-based cryptography systems, preferably Modern McEliece in C language</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience with analyzing quality of randomness</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience with post-quantum cryptography methods using error-correcting codes</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience with Goppa-codes and generalized (L, G)-codes</Text></StyledLineItem>
                  <StyledLineItem><Text>Proven track record of conducting independent and original scientific research preferred</Text></StyledLineItem>
                  <StyledLineItem><Text>Strong math background and profound understanding of the post-quantum cryptography candidates in the NIST recommendation process especially the Classic McEliece method is a plus</Text></StyledLineItem>
                  <StyledLineItem><Text>Post-graduate degrees (M.Sc., Ph.D.) preferred</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Full-Stack Blockchain Engineers:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Hands-on skills in C/C++ and Go</Text></StyledLineItem>
                  <StyledLineItem><Text>Hands-on skills in Linux platform</Text></StyledLineItem>
                  <StyledLineItem><Text>Hands-on skills in Security, Encryption, etc.</Text></StyledLineItem>
                  <StyledLineItem><Text>Familiar with Hyperledger components (e.g. Fabric, Composer) and customized modules</Text></StyledLineItem>
                  <StyledLineItem><Text>Familiar with REST technologies (e.g. Javascript, Node.js, Angular JS, Docker)</Text></StyledLineItem>
                  <StyledLineItem><Text>A degree in B.Sc. or M.Sc. is preferred</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">QA Specialists:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Experience with regression testing and test automation, etc.</Text></StyledLineItem>
                  <StyledLineItem><Text>Familiar with testing web applications, Hyperledger components</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">General Software Engineers:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Hands-on skills in C/C++, Mac Xcode/iPhone SDK, Win32/64, Java/J2EE, COM/ActiveX</Text></StyledLineItem>
                  <StyledLineItem><Text>Sound knowledge of TCP/IP, SSL/XML/HTTPS protocols and proficient in PHP/ASPP</Text></StyledLineItem>
                  <StyledLineItem><Text>Competent in client/server, web applications, and database object development</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Employment:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Full-time/Part-time starting immediately.</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Send your resume to:</StyledJobHeading>
                <Text>Email: <Anchor href="mailto:hr@01com.com" style={{ fontSize: theme.fontSize.lg }}>hr@01com.com</Anchor> (Attention: Human Resources)</Text>
              </Box>
            </Box>
          </Accordion.Body>
        </StyledAccordionItem>
        <StyledAccordionItem eventKey="1">
          <Accordion.Header>
            <StyledHeading as="h2">Enterprise Sales</StyledHeading>
          </Accordion.Header>
          <Accordion.Body>
            <Box padding="0px 48px 48px 48px">
              <StyledText>01 Communique is a TSX-V listed software publisher and an equal opportunity employer that supports workplace diversity.</StyledText>
              <StyledText>Established in 1992, we are a technology pioneer of Post-Quantum Cyber Security and Remote Access Software Solutions.</StyledText>
              <StyledText>Our latest innovation is on cyber security with the development focus on Quantum-Safe Cryptography. 01's patent-protected Quantum-Safe Cryptography is designed to operate on classical computer systems as we know them today while at the same time secure enough to safeguard against potential cyber attacks from quantum computers.</StyledText>
              <StyledText>Our award winning products and services are marketed around the world. The tremendous increase in demand for our services and patented technologies has created openings in our sales area. This is an excellent opportunity for successful candidates to further their careers with a result-oriented company in an exciting fast-paced industry.</StyledText>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Enterprise Sales Specialists:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Familiar with cyber security products and their operating concepts</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience in prospecting, positioning, and selling technology solutions to enterprises</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience in negotiating large strategic deals</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience in managing ongoing customer relationships</Text></StyledLineItem>
                  <StyledLineItem><Text>Strong verbal, written, and presentation/communication skills</Text></StyledLineItem>
                  <StyledLineItem><Text>Highly motivated, self-driven, organised, and creative</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Employment:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Full-time starting immediately.</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Send your resume to:</StyledJobHeading>
                <Text>Email: <Anchor href="mailto:hr@01com.com" style={{ fontSize: theme.fontSize.lg }}>hr@01com.com</Anchor> (Attention: Human Resources)</Text>
              </Box>
            </Box>
          </Accordion.Body>
        </StyledAccordionItem>
        <StyledAccordionItem eventKey="2">
          <Accordion.Header>
            <StyledHeading as="h2">Marketing</StyledHeading>
          </Accordion.Header>
          <Accordion.Body>
            <Box padding="0px 48px 48px 48px">
              <StyledText>01 Communique is a TSX-V listed software publisher and an equal opportunity employer that supports workplace diversity.</StyledText>
              <StyledText>Established in 1992, we are a technology pioneer of Post-Quantum Cyber Security and Remote Access Software Solutions.</StyledText>
              <StyledText>Our latest innovation is on cyber security with the development focus on Quantum-Safe Cryptography. 01's patent-protected Quantum-Safe Cryptography is designed to operate on classical computer systems as we know them today while at the same time secure enough to safeguard against potential cyber attacks from quantum computers.</StyledText>
              <StyledText>Our award winning products and services are marketed around the world. The tremendous increase in demand for our services and patented technologies has created openings in our marketing area. This is an excellent opportunity for successful candidates to further their careers with a result-oriented company in an exciting fast-paced industry.</StyledText>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Marketing Specialists:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Strong verbal, written, and presentation/communication skills</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience with social media marketing (SEO, Twitter, LinkedIn, Google Ads, etc.)</Text></StyledLineItem>
                  <StyledLineItem><Text>Understanding of blockchains, tokens, NFTs, smart contracts, metaverse</Text></StyledLineItem>
                  <StyledLineItem><Text>Experience in designing and launching of marketing programs</Text></StyledLineItem>
                  <StyledLineItem><Text>Understanding of cyber security products and their operating concepts is an asset</Text></StyledLineItem>
                  <StyledLineItem><Text>Highly motivated, self-driven, organised, and creative</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Employment:</StyledJobHeading>
                <ul style={{ padding: '0 20px' }}>
                  <StyledLineItem><Text>Full-time/Part-time starting immediately.</Text></StyledLineItem>
                </ul>
              </Box>

              <Box margin="48px 0 0 0">
                <StyledJobHeading as="h3">Send your resume to:</StyledJobHeading>
                <Text>Email: <Anchor href="mailto:hr@01com.com" style={{ fontSize: theme.fontSize.lg }}>hr@01com.com</Anchor> (Attention: Human Resources)</Text>
              </Box>
            </Box>
          </Accordion.Body>
        </StyledAccordionItem>
      </Accordion>
    </Box >
  )
}
