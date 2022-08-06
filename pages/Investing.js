import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input,Form } from "react-bootstrap";
import en from '../locales/en';
import fr from '../locales/fr';
import Video from "../assets/video.svg";
import Sample from "../assets/sample.png";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <main>
      <div className="hero">
        <Nav />
        <div>
        <div className="contact__section">
        <Container className="mt-120 mb-120">
        <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
          <h3 className="investing-title">Investment in Old Tbilisi</h3>
          <p className="investing-title_subtext">
            If you are looking for property for investment purposes, we offer apartments in different price
            categories, with conditions tailored to you. The average investment income of the project will be
            calculated by the financial group of Apart Development, taking into account the current data.
          </p>
        </Col>
      </Container>
      <Container className="mt-120 mb-120">
        <Row>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
            <Image src={Video} alt="banner immage" />
          </Col>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
            <p className="investing-title_subtext">
              The company Apart Development was founded in 2019, however, the management of the company has a
              lot of experience in the field of construction and development. The first project we started
              during the pandemic has already been completed. After the increase in demand, we developed a
              plan for the renovation and development of Old Tbilisi, and within the framework of this
              concept, we started the construction of several distinctive, premium-class projects on Bukhaidze
              Street. We carry out construction in compliance with the highest standards, which means that our
              construction facilities are distinguished by structural and seismic resistance. Each current or
              future project of the company is distinguished by a sophisticated exterior, efficient interior
              planning and the best location.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-120 mb-120">
        <Row className="mb-60">
          <h3>Services</h3>
        </Row>
        <Row>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
            <ul className="investing-services">
              <li>Spa</li>
              <li>Pool</li>
              <li>Fitness</li>
              <li>Cafe-Restaurant</li>
              <li>Room Service</li>
              <li>Consierge</li>
              <li>24 Hour Security</li>
              <li>Cleaning</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="investing-goal mb-80">
          <h3>What is your goal?</h3>
        </Row>
        <Row>
          <Col xxl="4">
            <h3>Apartment for personal use</h3>
            <p className="investing-title_subtext mt-30">
              Given the ecological situation or the chaotic architectural situation in the city, the streets
              of old Tbilisi can really be considered as a place to live: the most important thing is a quiet
              environment - which has a positive impact on our mental or physical health. The recreation area,
              which will be built on the site of the Apart Developmet complex under construction, ensures
              oxygen quality, while the underground parking space is designed according to international
              standards.
            </p>
          </Col>
          <Col className="mt-80" xxl="4">
            <Image src={Sample} alt="#" />
          </Col>
          <Col xxl="4">
            <h3 className="special-margin-class">Apartment for commercial use</h3>
            <p className="investing-title_subtext mt-30">
              Real estate is considered to be one of the most profitable ways to increase capital. The company
              Apart Development is located in a tourist active zone, in particular in Old Tbilisi. Our
              projects meet all criteria, be it a unique location, quiet environment, greenery or special
              services that will help you as a source of real estate income. The company has special
              conditions for residents that will make your project even more attractive from a commercial
              point of view: Benefits can be obtained through both short-term sales and leases. You can rent
              an apartment to tourists, register on travel platforms, which will make it much easier to find a
              client, as well as rent for a longer period and reinvest in a property of greater value.
            </p>
          </Col>
        </Row>
        <Row className="special-margin-row">
          <Col xxl="6">
            <h3>Payment method and remote services</h3>
            <p className="investing-title_subtext">
              We have also developed customer-tailored remote services that will simplify and facilitate
              apartment purchasing decisions for residents abroad. We will assist you in resolving legal
              issues remotely. We will provide you with an online consultation at a time convenient to you
              (taking into account the time difference). Remote services also apply to people who are not
              Georgian citizens. The company also has an interest-free installment plan, the terms of which
              are as follows: if you buy an apartment with us, you can use the 15-month interest-free
              installment plan, the down payment is 30% and the rest is distributed at the customer s request.
            </p>
          </Col>
          <Col xxl="6">
            <Form>
              <Row className="mt-5">
                <p>Leave us your contact information and our team will reach out to you.</p>
                <Col xs="6">
                  <div className="md-form mb-0">
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      className="form-control input__main"
                      placeholder="Name"
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="md-form mb-0">
                    <Form.Control
                      type="text"
                      id="company"
                      name="company"
                      className="form-control input__main"
                      placeholder="Company"
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="md-form mb-0">
                    <Form.Control
                      type="mail"
                      id="email"
                      name="email"
                      className="form-control input__main"
                      placeholder="Email"
                    />
                  </div>
                </Col>
                <Col xs="6">
                  <div className="md-form mb-0">
                    <Form.Control
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control input__main"
                      placeholder="Subject"
                    />
                  </div>
                </Col>
                <Col xs="12">
                  <div className="md-form mb-0">
                    <Form.Control
                      as="textarea"
                      type="text"
                      id="text"
                      className="form-text-area"
                      name="text"
                      // className="form-control input__main"
                      placeholder="Text"
                      cols={39}
                      rows={3}
                    />
                  </div>
                </Col>
                <Col xs="12">
                  <Button className="btn-send">Get contacted</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
        </div>
    </div>
    </main>
  );
}
