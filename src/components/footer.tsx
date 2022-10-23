import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SiteFooter() {
  return (
    <footer className="footer footer-dark">
    <Container className='p-4 w-container'>
      <Row>
        <Col lg='3' md='6' className='mb-4 mb-md-0'>
          <img src="/logo_white.svg" width="100" alt="logo"/>
        </Col>

        <Col lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase title-small'>L3GENDARY</h5>

          <ul className='list-unstyled mb-0'>
            <li>
              <a href='#!' className='footer-link'>
                Link 1
              </a>
            </li>
            <li>
              <a href='#!' className='footer-link'>
                Link 2
              </a>
            </li>
            <li>
              <a href='#!' className='footer-link'>
                Link 3
              </a>
            </li>
            <li>
              <a href='#!' className='footer-link'>
                Link 4
              </a>
            </li>
          </ul>
        </Col>

        <Col lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase title-small'>DOCS</h5>

          <ul className='list-unstyled mb-0'>
            <li>
              <a href='#!' className='footer-link'>
              Blog post name list goes here
              </a>
            </li>
            <li>
              <a href='#!' className='footer-link'>
              Blog post name list goes here
              </a>
            </li>
            <li>
              <a href='#!' className='footer-link'>
              Blog post name list goes here
              </a>
            </li>
          </ul>
        </Col>
        <Col lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase title-small'>ABOUT</h5>

          <ul className='list-unstyled mb-0'>
            <li>
              <a href='#!' className='footer-link'>
              Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href='#!' className='footer-link'>
              Privacy Policy
              </a>
            </li>
            <li>
            <div>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />
    </div>
            </li>
          </ul>
        </Col>
      </Row>
      
    </Container>
    <hr/>
      <div className='footer-copyright-center'>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      L3GENDARY DAO
    </div>

  </footer>
  );
}
