import React/*, {useState}*/ from "react"
import {Col, Button, Row} from "reactstrap"
import { Link } from "gatsby"


const Footer = () => (
  <div className="site-footer">
    <Row>
      <Col md='4'>
        <Button color="link"><Link to="/tags">Tags</Link></Button>
        <Button color="link"><Link to="/team">Team</Link></Button>
      </Col>
      <Col md='4'>
        <h4 className="text-center">
          DaVinciBot
        </h4>
        <p>Follow us on the social media</p>
        <div className="footer-social-links">
          <ul className="social-links-list">
            <li>
              <a href="https://www.facebook.com/DaVinciBotPulv" target="_blank" rel="noopener noreferrer"
                 className="facebook">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
            </li>
            {/*<li>
          <a href="http://davincibot.org/" target="_blank" rel="noopener noreferrer" className="instagram">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>*/}
            <li>
              <a href="https://www.youtube.com/channel/UCxcVjc1WtGvo9TKXozYXGgQ" target="_blank"
                 rel="noopener noreferrer" className="youtube">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company-beta/11144151/" target="_blank" rel="noopener noreferrer"
                 className="linkedin">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              {/*<a href="mailto:assosdavincibotesilv@gmail.com" target="_blank" rel="noopener noreferrer" className="email">*/}
              <a href="mailto:test@test.com" target="_blank" rel="noopener noreferrer" className="email">
                <i className="far fa-envelope fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </Col>
      <Col md='4'>
      </Col>
    </Row>
  </div>
)

export default Footer
