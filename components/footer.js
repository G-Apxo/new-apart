import React from "react";
import { Nav, Button, Row, Container, input, Col } from "react-bootstrap";
import en from '../locales/enFooter';
import fr from '../locales/ruFooter';
import { useRouter } from "next/router";
import { useState } from "react";

function Footer() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
  
    const changeLanguage = (e) => {
      const locale = e.target.value;
      router.push(router.pathname, router.asPath, { locale });
    };

  return (
    <div className="footer-outside-white mt-60">
      <div className="footer-inside-white footer-inside-black mt-60">
        <Container>
          <Row>
            <Col md={2}>
              <p className="copyright">{t.copy}</p>
            </Col>
            <Col md={2}>
              <p className="policy">{t.policy}</p>
            </Col>
            <Col md={2}>
              <p className="infos--white">
                <a>+995 544 44 44 31</a>
              </p>
              <p className="infos--white">
                <a>info@apart.ge</a>
              </p>
            </Col>
            <Col md={2}>
              <div className="box">
                <p className="social">Facebook</p>
                <p className="social">Instagram</p>
                <p className="social">Youtube</p>
                <p className="social">Pinterest</p>
              </div>
            </Col>

            <Col md={4}>
              <p className="languages">geo /eng / rus</p>
              <p className="languages">Terms and Conditions</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Footer;