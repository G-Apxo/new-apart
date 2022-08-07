import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, Carousel } from "react-bootstrap";
import en from "../locales/en";
import fr from "../locales/fr";
import Link from "next/link";
import Slide1 from "../assets/oldcitypanorama.png";
import Vector from "../assets/seeprjvector.png";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <main>
      <div className="hero">
        <Nav />
        <div>
          <div className="contact__section">
            <Container className="projects-title-distance">
              <Row>
                <h3 className="text-center"> Soon</h3>
              </Row>
            </Container>
            <div className="parent_only_mobile">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="12" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                    <Col xs="12">
                      <Row>
                        <Col xs="12">
                          <Link href="/ProjectsFloor">
                            <div className="mb-5 projects--title cursor">
                              <p>Done</p>
                              <h3>
                                OLD CITY <br /> PANORAMA
                              </h3>
                            </div>
                          </Link>
                        </Col>
                        <Col xs="6">
                          <div className=" projects--texts__basics">
                            <p className="projects--texts__op">Location</p>
                            <h3 className="project--location__mod projects--texts__basics">
                              Tbilisi,georgia
                              <br />
                              bukhaidze 6a
                            </h3>
                            <Link href="/ProjectsFloor">
                              <i className="project--see cursor mt-60 ">
                                View Projects <Image src={Vector} alt="arrow" className="arrow" />
                              </i>
                            </Link>
                          </div>
                        </Col>
                        <Col xs="6">
                          <div>
                            <p className="projects--texts__op projects--texts__create">Create date</p>
                            <h3 className="projects--texts__basics projects--texts__done ">2022</h3>
                          </div>
                          <div></div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/ProjectsFloor">
                        <div className="mb-5 projects--title cursor">
                          <p>Done</p>
                          <h3>
                            OLD CITY <br /> PANORAMA
                          </h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">Location</p>
                        <h3 className="project--location__mod projects--texts__basics">
                          Tbilisi,georgia
                          <br />
                          bukhaidze 6a
                        </h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">Create date</p>
                        <h3 className="projects--texts__basics projects--texts__done ">2022</h3>
                      </div>
                      <div>
                        <Link href="/ProjectsFloor">
                          <i className="project--see cursor mt-60">
                            View Projects <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            {/* //ADDED */}
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/ProjectsFloor">
                        <div className="mb-5 projects--title cursor">
                          <p>Done</p>
                          <h3>Bukhaidze</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">Location</p>
                        <h3 className="project--location__mod projects--texts__basics">
                          Tbilisi,georgia
                          <br />
                          bukhaidze 6a
                        </h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">Create date</p>
                        <h3 className="projects--texts__basics projects--texts__done ">2022</h3>
                      </div>
                      <div>
                        <Link href="/ProjectsFloor">
                          <i className="project--see cursor mt-60">
                            View Projects <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/ProjectsFloor">
                        <div className="mb-5 projects--title cursor">
                          <p>Done</p>
                          <h3>Bukhaidze</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">Location</p>
                        <h3 className="project--location__mod projects--texts__basics">
                          Tbilisi,georgia
                          <br />
                          bukhaidze 6a
                        </h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">Create date</p>
                        <h3 className="projects--texts__basics projects--texts__done ">2022</h3>
                      </div>
                      <div>
                        <Link href="/ProjectsFloor">
                          <i className="project--see cursor mt-60">
                            View Projects <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/ProjectsFloor">
                        <div className="mb-5 projects--title cursor">
                          <p>Done</p>
                          <h3>
                            OLD CITY <br /> PANORAMA
                          </h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">Location</p>
                        <h3 className="project--location__mod projects--texts__basics">
                          Tbilisi,georgia
                          <br />
                          bukhaidze 6a
                        </h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">Create date</p>
                        <h3 className="projects--texts__basics projects--texts__done ">2022</h3>
                      </div>
                      <div>
                        <Link href="/ProjectsFloor">
                          <i className="project--see cursor mt-60">
                            View Projects <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="parent_only_desktop">
              <div className="test1313">
                <Container className="container-borderer">
                  <Row>
                    <Col xs="3" className="">
                      <Link href="/ProjectsFloor">
                        <div className="mb-5 projects--title cursor">
                          <p>Done</p>
                          <h3>Bukhaidze</h3>
                        </div>
                      </Link>
                      <div className="projects--legend__top projects--texts__basics">
                        <p className="projects--texts__op">Location</p>
                        <h3 className="project--location__mod projects--texts__basics">
                          Tbilisi,georgia
                          <br />
                          bukhaidze 6a
                        </h3>
                      </div>
                      <div className="projects--legend__bot">
                        <p className="projects--texts__op projects--texts__create">Create date</p>
                        <h3 className="projects--texts__basics projects--texts__done ">2022</h3>
                      </div>
                      <div>
                        <Link href="/ProjectsFloor">
                          <i className="project--see cursor mt-60">
                            View Projects <Image src={Vector} />
                          </i>
                        </Link>
                      </div>
                    </Col>
                    <Col className="border__left"></Col>
                    <Col xs="8" className="projects-margin-fixer">
                      <Carousel style={{ opacity: 1 }}>
                        <Carousel.Item className="fuul__width">
                          <Image src={Slide1} alt="banner immage" className="full_width" />
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage " className="full_width" />
                          </Row>
                        </Carousel.Item>
                        <Carousel.Item className="fuul__width">
                          <Row>
                            <Image src={Slide1} alt="banner immage" className="full_width" />
                          </Row>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
