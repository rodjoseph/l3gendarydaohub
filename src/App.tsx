import React from 'react';
import logo from './logo.svg';

import SiteNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SiteFooter from './components/footer';
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <div className='content-wrapper'>
        <header>
          <SiteNavbar/>
        </header>
        <Container className='centered-container w-container'>
          <Row>
            <Col xs={3}>
              <img src="/logo_white.svg" width="80" alt="logo"/>
            </Col>
            <Col xs={9}>
              <h1 className='heading'>L3GENDARY DAO</h1>
            </Col>
          </Row>
          <div className="columns statement">
            <div className="column-3">
              <div className="text-block">
                Decentralization has been a major foundation of queer theory since it came to fruition. Queers, who often are disenfranchised, misunderstood, repelled, and even made illegal, have been accustomed to not having a central power figure.
                <br/><br/>
                As we continue to challenge the status quo, we believe that the rise of every movement requires not only a flame but a spark that flickers and lights every community to action.<br/><br/>L3GENDARY DAO seeks to be that spark that bolsters hope for the underrepresented, creates opportunity for the marginalized and elevates the plight of the LGBTQ+ community from struggle to success.
                </div>
                </div>
                <div className="column-3">
                  <div className="text-block">
                    We onboard queer professionals through online IRL events; by providing a welcoming Web3 learning environment, we are tapping into its largely unexplored, creative potential. 
                    <br/><br/>
                    On top of this community outreach, our goal is to release products as a DAO, starting with <a href="https://www.raze.money/">Raze.Money</a>; a decentralized fundraising platform that assists with the delivery of liquidity to those who need it most &amp; awards Impact Certificate NFTs to contributors.
                    <br/><br/>We are just getting started. Join us in this web 3 queer revolution, one where equality, equity and justice are all in mind and action<br/><br/>‍
                </div>
              </div>
            </div>
        ‍</Container>
      </div>
      <SiteFooter/>
    </div>
  );
}

export default App;
