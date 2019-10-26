import React from "react"
import { Col, Row } from "reactstrap"

import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          crossOrigin="anonymous"/>
    <Header siteTitle="DaVinciBot"/>
    <div className="container" id="content">
      <h1>DaVinciBot</h1>
      <Row>
        <Col md='12'>
          <p>Bienvenue sur le site de l’association de robotique du Pôle Universitaire Léonard de Vinci, à La Défense.
            Ici, vous aurez la possibilité de vous renseigner sur nos activités et projets en cours de réalisation par
            des étudiants de l’ESILV, l’EMLV et l’IIM.
            Voici une vidéo illustrant notre participation à la Coupe De Robotique 2019, où nous sommes arrivés 54ème
            :</p>
        </Col>
        <Row>
          <Col md="6">
            <iframe title="video index 1" src="https://www.youtube.com/embed/CekWTSOTMr8"/>
          </Col>
          <Col md="6">
            <iframe title="video index 2" src="https://www.youtube.com/embed/i-Sn_zjN3MI"/>
          </Col>
        </Row>
      </Row>
    </div>
    <Footer/>
  </>
)


export default IndexPage
