import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from '../locales/en';
import fr from '../locales/fr';
import Link from "next/link";
import BannerImg from "../assets/singleblog.png";

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
        <div>
        <Container>
          <div className="mt-120 mb-80">
            <p className="goback">
              {/* <BsArrowUpLeft /> */}
              Go back{" "}
            </p>
          </div>
          <Col className="col-12 mb-80">
            <Image src={BannerImg} alt="banner immage" />
          </Col>
          <Row className="align-items-center  mb-20 mb-10 ">
            <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
              {/* <hr /> */}
            </Col>
            <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4">
              <p className="text-center">November 23. 2021</p>
              <h4 className="text-center">WHY IS THE REAL ESTATE THE SAFEST INVESTMENT?</h4>
            </Col>
            <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
              {/* <hr /> */}
            </Col>
          </Row>
          <Row className="align-items-center ">
            <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
              <hr />
            </Col>
            <Col xs="8" lg="4" md="4" sm="4" xl="4" xxl="4">
              {/* <p className="text-center">November 23. 2021</p>
              <h4 className="text-center">WHY IS THE REAL ESTATE THE SAFEST INVESTMENT?</h4> */}
            </Col>
            <Col xs="2" lg="4" md="4" sm="4" xl="4" xxl="4">
              <hr />
            </Col>
          </Row>
          <Col className=" single-blog-texts col-12 d-flex justify-content-center mt-5">
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
              <p className="mb-30">
                The fact is that real estate is one of the most correct, secure and reliable areas for
                investment. Moreover&lsquo; along with investing in gold and silver items&lsquo; real estate
                is considered to be one of the most profitable ways to increase capital. For many well-known
                brands or businesses, which appear as a manufacturing or even food business in various fields,
                in fact, the main source of income is the real estate owned by them. A clear example of this
                is such a giant chain of food outlets around the world as McDonald&lsquo;s. The company owns
                and rents most of the restaurant buildings to franchisors who have the right to use the brand
                name. Consequently, the parent company owns real estate in almost every country in the world
                and continuously makes a profit from the lease. From this point of view, it can be said that
                McDonald&lsquo;s is a real estate company more than a fast food chain.
              </p>
              <p>
                Real estate is also one of the most reliable investments in the sense that the price of
                property, by observing market trends, increases rather than decreases. The demand for rent and
                the price are also growing.
              </p>
              <p>
                Benefits can be obtained through both short-term sales and leases. You can rent an apartment
                to tourists, register on travel platforms, which will make it much easier to find a client, as
                well as rent for a longer period and reinvest in a property of greater value. A long-term
                lease agreement is one of the most attractive methods for diversifying an investor portfolio
                and generating additional risk-free income. In this case, the real estate, after a certain
                period, will deduct its own value fee and it will remain in your ownership.
              </p>
              <p className="mb-30">
                When there is no financial securities and capital market in Georgia, real estate can be
                considered as one of the long-term investments associated with the lowest risks.
              </p>

              <Image src={BannerImg} />

              <p className="mt-30">
                Real estate is also one of the most reliable investments in the sense that the price of
                property, by observing market trends, increases rather than decreases. The demand for rent and
                the price are also growing.
              </p>
              <p>
                Benefits can be obtained through both short-term sales and leases. You can rent an apartment
                to tourists, register on travel platforms, which will make it much easier to find a client, as
                well as rent for a longer period and reinvest in a property of greater value. A long-term
                lease agreement is one of the most attractive methods for diversifying an investor portfolio
                and generating additional risk-free income. In this case, the real estate, after a certain
                period, will deduct its own value fee and it will remain in your ownership.
              </p>
              <p>
                When there is no financial securities and capital market in Georgia, real estate can be
                considered as one of the long-term investments associated with the lowest risks.
              </p>
            </Col>
          </Col>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mb-5 mt-5">
            <h2>Recent Blogs</h2>
            <hr />
          </Col>
          <Row>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mt-5">
              <div className="image__box">
                <div className="blog-image__content">
                  <p>blog desc</p>
                  <h2>blog1</h2>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="mb-5 mt-5">
              <div className="image__box">
                <div className="blog-image__content">
                  <p>blog desc</p>
                  <h2>blog1</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
      </div>
    </main>
  );
}
