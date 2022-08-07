import Nav from "../components/nav";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Row, Container, Col, input, Form } from "react-bootstrap";
import en from "../locales/enInvesting";
import ru from "../locales/ruInvesting";
import Video from "../assets/video.svg";
import Sample from "../assets/sample.png";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ru;

  return (
    <main>
      <div className="hero">
        <Nav />
        <div>
          <div className="contact__section">
            <Container className="mt-120 mb-120">
              <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                <h3 className="investing-title">{t.title}</h3>
                <p className="investing-title_subtext">{t.tp1}</p>
              </Col>
            </Container>
            <Container className="mt-120 mb-120">
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <Image src={Video} alt="banner immage" />
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <p className="investing-title_subtext">{t.tp2}</p>
                </Col>
              </Row>
            </Container>
            <Container className="mt-120 mb-120">
              <Row className="mb-60">
                <h3>{t.services}</h3>
              </Row>
              <Row>
                <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
                  <ul className="investing-services">
                    <li>{t.spa}</li>
                    <li>{t.pool}</li>
                    <li>{t.fitness}</li>
                    <li>{t.cafe}</li>
                    <li>{t.room}</li>
                    <li>{t.consierge}</li>
                    <li>{t.hour}</li>
                    <li>{t.cleaning}</li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="investing-goal mb-80">
                <h3>{t.goal}</h3>
              </Row>
              <Row>
                <Col xxl="4">
                  <h3>{t.apartForPersonUse}</h3>
                  <p className="investing-title_subtext mt-30">{t.textAp1}</p>
                </Col>
                <Col className="mt-80" xxl="4">
                  <Image src={Sample} alt="#" />
                </Col>
                <Col xxl="4">
                  <h3 className="special-margin-class">{t.apartForCommercialUse}</h3>
                  <p className="investing-title_subtext mt-30">{t.textAp2}</p>
                </Col>
              </Row>
              <Row className="special-margin-row">
                <Col xxl="6">
                  <h3>{t.pmAndRs}</h3>
                  <p className="investing-title_subtext">{t.pmText}</p>
                </Col>
                <Col xxl="6">
                  <Form>
                    <Row className="mt-5">
                      <p>{t.contactInfo}</p>
                      <Col xs="6">
                        <div className="md-form mb-0">
                          <Form.Control
                            type="text"
                            id="name"
                            name="name"
                            className="form-control input__main"
                            placeholder={t.name}
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
                            placeholder={t.company}
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
                            placeholder={t.email}
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
                            placeholder={t.subject}
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
                            placeholder={t.textarea}
                            cols={39}
                            rows={3}
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <Button className="btn-send">{t.getContacted}</Button>
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
