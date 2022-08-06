import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input,Form } from "react-bootstrap";
import en from '../locales/en';
import fr from '../locales/fr';
import Link from "next/link";
import Taghi from "../assets/Taghi_old_tbilisi.svg";
import Bukhaidze from "../assets/projects_floor.png";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <main>
      <div className="hero">
        <Nav />
        <Container>
        <Row className="mt-120-important">
          <p className="goback">
            {/* <BsArrowUpLeft /> */}
            Go back{" "}
          </p>
        </Row>
        <Row className="justify-content-between mt-5">
          <Col xs="2">
            <Image src={Taghi} className="Taghi" />
          </Col>
          <Col xs="4">
            <h3 className="projects-floor-title">Chose Apartment</h3>
            <p>Chose floor</p>
          </Col>
        </Row>
        <Row className="justify-content-between mt-5">
          <Col xs="2">
            <hr />
            <p className="basic-texts-14">Tree’s planted</p>
            <h3 className="projects-floor-yard">132</h3>
          </Col>
          <Col xs="3">
            <hr />
            <p className="basic-texts-14">exhibition spaces</p>
            <h3 className="projects-floor-yard">3245 m2</h3>
          </Col>
          <Col xs="4">
            <Form.Select aria-label="Default select example">
              <option>Chose floor 1-10</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
        <Col xs="12" className="mt-5">
          <div className="projects__image">
            <Link href="/ProjectsFloorSelector">
              <Image className="cursor" src={Bukhaidze} />
            </Link>
          </div>
        </Col>
        <Row className="justify-content-between mt-5">
          <Col xs="3">
            <hr />
          </Col>
          <Col xs="3">
            <hr />
          </Col>
        </Row>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="mail" placeholder="Email" />
            <Form.Control type="tel" placeholder="+( ___ )     Phone number" required />
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button> */}
        <form action="/send-data-here" method="post">
          <Row className=" mt-5 form-row align-items-center">
            <Col xs="3">
              <label htmlFor="name"></label>
              <input className="btn-test" type="text" id="name" name="name" placeholder="Name" />
            </Col>
            <Col xs="3">
              <label htmlFor="email"></label>
              <input className="btn-test" type="mail" id="email" name="email" placeholder="Email" />
            </Col>
            <Col xs="3">
              <label htmlFor="tel"></label>
              <input
                className="btn-test"
                type="tel"
                id="phone"
                name="phone"
                placeholder="+( ___ )     Phone number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </Col>
            <Col xs="3">
              <Button className="btn-send">Request call</Button>
            </Col>
          </Row>
        </form>

        <Row className="justify-content-between">
          <Col xs="5">
            <h3>About this project</h3>
            <p className="projects--floor-about-text basic-texts-14">
              started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi. Project
              perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze Street, in
              the historical part of Tbilisi. Our goal is to match the exterior of the project perfectly with
              the wider city planning, which is why the Old City Panorama project includes three buildings and
              is only eight floors high. The project is also important because it has many sights close to it:
              one of the most important attractions of the city, the Holy Trinity Cathedral, just 250 meters
              away, the historic Metekhi Fortress and Temple, and Narikala and Rike Park.
            </p>
            <Col xs="12">
              <Row>
                <h3>Advantages</h3>
                <h5 className="projects-floor-first-one">First ONE</h5>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
              </Row>
              <Row>
                <h5 className="projects-floor-first-one">First ONE</h5>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
              </Row>
              <Row>
                <h5 className="projects-floor-first-one">First ONE</h5>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
                <Col xs="4">
                  <h5>BIG BRAIN</h5>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col xs="6">
            <div className="Calculator"></div>
          </Col>
        </Row>
        <Col xs="12" className="mt-120">
          <iframe
            src="https://snazzymaps.com/embed/408105"
            width="100%"
            height="600px"
            // style="border:none;"
          ></iframe>
        </Col>
      </Container>
    </div>
    </main>
  );
}
