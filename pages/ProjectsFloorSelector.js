import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input,Form } from "react-bootstrap";
import en from '../locales/en';
import fr from '../locales/fr';
// import Link from "next/link";
// import Taghi from "../assets/Taghi_old_tbilisi.svg";
// import Bukhaidze from "../assets/projects_floor.png";
import RoomImage from "../assets/Asset41.png";
import RoomImageModel from "../assets/apex.png";

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
        <Row>
          <Col xs="6">
            <p className="goback">
              {/* <BsArrowUpLeft /> */}
              Go back{" "}
            </p>
            <Image src={RoomImage} alt="banner immage" className="rooom-select-img" />
          </Col>
          <Col xs="6">
            <h3>Project : TAGI</h3>
            <p>Chose your appartment</p>

            <Row>
              <Col xs="3">
                <Form.Select aria-label="Default select example">
                  <option>Chose floor 1-10</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col xs="3">
                {" "}
                <Form.Select aria-label="Default select example">
                  <option>Chose floor 1-10</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Row>
                <Col xs="12">
                  <Image src={RoomImageModel} alt="RoomImageModel immage" className="room--image--model" />
                </Col>
              </Row>
              <Row>
                <Col xs="4">
                  <hr className="projects-floor-selector-hr" />
                  <p className="basic-texts-14">Apartment number</p>
                  <p className="projects-floor-yard">N323</p>
                </Col>
                <Col xs="4">
                  <hr />
                  <p className="basic-texts-14">Total area</p>
                  <p className="projects-floor-yard">81.18 m2</p>
                </Col>
                <Col xs="4">
                  <hr />
                  <p className="basic-texts-14">BALCONY AREA</p>
                  <p className="projects-floor-yard">15.57 m2</p>
                </Col>
              </Row>
              <Row>
                <Col xs="4">
                  <hr />
                  <p className="basic-texts-14">Living Area</p>
                  <p className="projects-floor-yard">65.61 m2</p>
                </Col>
                <Col xs="4">
                  <hr />
                  <p className="basic-texts-14">Total area</p>
                  <p className="projects-floor-yard">65.61 m2</p>
                </Col>
                <Col xs="4">
                  <hr />
                  <p className="basic-texts-14">SQ.M . Price</p>
                  <p className="projects-floor-yard">2,200$</p>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>

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
                <h5 className="projects-floor-first-one">Fisrt one</h5>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
              </Row>
              <Row>
                <h5 className="projects-floor-first-one">Fisrt one</h5>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
              </Row>
              <Row>
                <h5 className="projects-floor-first-one">Fisrt one</h5>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Big brain</h5>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col xs="6">
            <div className="Calculator"></div>
          </Col>
        </Row>
        <Col xs="12" className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8267523333143!2d44.80759311572699!3d41.70267558435236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcf1f317faf%3A0x6ef08f8fb9222cb9!2sApart%20Development!5e0!3m2!1sen!2sge!4v1651489892357!5m2!1sen!2sge"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Container>
    </div>
    </main>
  );
}
