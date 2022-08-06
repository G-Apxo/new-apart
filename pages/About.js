import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from '../locales/en';
import fr from '../locales/fr';
import Beqa from "../assets/beqa.svg";
import Quote from "../assets/quote.svg";
import Team1 from "../assets/apartteam/team1.webp";
import Team2 from "../assets/apartteam/team2.webp";
import Team3 from "../assets/apartteam/team3.webp";
import Team4 from "../assets/apartteam/team4.webp";
import Team5 from "../assets/apartteam/team5.webp";
import Team6 from "../assets/apartteam/team6.webp";
import Team7 from "../assets/apartteam/team7.webp";
import Team8 from "../assets/apartteam/team8.webp";
import Team9 from "../assets/apartteam/team9.webp";
import Team10 from "../assets/apartteam/team10.webp";
import Team11 from "../assets/apartteam/team11.webp";
import Team12 from "../assets/apartteam/team12.webp";
import Team13 from "../assets/apartteam/team13.webp";
import Team14 from "../assets/apartteam/team14.webp";
import Team15 from "../assets/apartteam/team15.webp";
import Team16 from "../assets/apartteam/team16.webp";
import Team17 from "../assets/apartteam/team17.webp";
import Team18 from "../assets/apartteam/team18.webp";
import Team19 from "../assets/apartteam/team19.webp";

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <main>
      <div className="hero">
        <div className="bg-image">
          <span className="bg-black opacity-40 absolute w-full h-full z-10" />
        </div>
        <Nav />
        <Container className="mt-5">
        <h1 className="about-title ">ABOUT US</h1>
        <Row className="row-marginer justify-content-end">
          <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3" className="d-flex justify-content-center">
            <Image src={Beqa} alt="banner immage" />
          </Col>
          <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5" className="align-items-center d-flex mt-5">
            <div>
              <p>
                “ started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi.
                Project perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze
                Street, in the historical part of Tbilisi. Our goal ”
              </p>
              <h2>Beka Khoperia</h2>
              <h3>Founder</h3>
            </div>
          </Col>
          <Col xs="2" className="no_mobile">
            <Image src={Quote} alt="banner immage" />
          </Col>
        </Row>
        <Row className="justify-content-between mb-60 mt-60">
          <Col xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
            <hr />
          </Col>
          <Col xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
            <hr />
          </Col>
        </Row>
        <Row className="mb-60 mt-60 ">
          {/* <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6"> */}
          {/* <Row> */}
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="2">
            <h3 className="about--text__hmod">In 2020 Apart Development</h3>
          </Col>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="4">
            <p className="about--text__ptmod2">
              started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi. Project
              perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze Street, in
              the historical part of Tbilisi. Our goal is to match the exterior of the project perfectly with
              the wider city planning, which is why the Old City Panorama project includes three buildings and
              is only eight floors high. The project is also important because it has many sights close to it:
              one of the most important attractions of the city, the Holy Trinity Cathedral, just 250 meters
              away, the historic Metekhi Fortress and Temple, and Narikala and Rike Park.
            </p>
          </Col>
          {/* </Row> */}
          {/* </Col> */}
          {/* <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6"> */}
          {/* <Row> */}
          <Col
            xs="12"
            lg="12"
            md="12"
            sm="12"
            xl="12"
            xxl="2"
            // className="mt-60 "
          >
            <h3 className="about--text__hmod">Another advantage</h3>
          </Col>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="4">
            <p className="about--text__ptmod__mod ">
              OLD CITY PANORAMA is the amazing views and greenery of Old Tbilisi. For residents on the first
              floor, living in “townhouse” type dwellings, we have individual yards. The area includes a
              swimming pool, spa, gym equipment and a cafe-bar. The apartments are being delivered both in
              green frame condition and with complete renovation. Buying an apartment with Apart Development
              is a sensible investment, as we also offer rental service to our customers if they wish, which
              means that the apartment owner can turn their real estate into a source of income without a lot
              of effort. Our goal is to continue to strive for progress, to contribute to the urban
              development of Tbilisi, which means that we want to cover the territories of Old Tbilisi,
              replace damaged buildings with new residential complexes, which will be the best example of
              combining the Old Tbilisi architectural style with the new. We want to give new life to Old
              Tbilisi and create a service focused on the wishes and needs of customers. Apart Development
              will establish a new lifestyle in Old Tbilisi.
            </p>
          </Col>
          {/* </Row> */}
          {/* </Col> */}
        </Row>

        <Col xs="12" className="mb-60 mt-60">
          {/* <Image src={Video} alt="banner immage" /> */}
        </Col>
      </Container>
      <section className="cover mt-120"></section>
      <Container className="mb-120 mt-120">
        <Row className="row-marginer mb-60 ">
          <h1>OUR TEAM</h1>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team8} alt="banner immage" />
            {/* //8 */}
            <h3>თათა დგებუაძე </h3>
            <p>აღმასრულებელი დირექტორი</p>
          </Col>

          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team10} alt="banner immage" />
            {/* //10 */}
            <h3>თორნიკე წილოსანი </h3>
            <p>კომერციული დირექტორი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team13} alt="banner immage" />
            {/* //13 */}
            <h3>ლაშა საბაძე</h3>
            <p>ფინანსური მენეჯერი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team6} alt="banner immage" />
            {/* //6 */}
            <h3>ვახტანგ ჩიხრაძე</h3>
            <p>სტრატეგიული გაყიდვების მენეჯერი</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team2} alt="banner immage" />
            {/* //2 */}
            <h3>ანი მურვანიძე </h3>
            <p>გაყიდვების სამსახურის უფროსი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team19} alt="banner immage" />
            {/* //19 */}
            <h3>საბა ჯანაშია</h3>
            <p> უსაფრთხოების სამსახურის უფროსი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team3} alt="banner immage" />
            {/* //3 */}
            <h3>არჩილ კურცხალია</h3>
            <p> არქიტექტორ-დიზაინერი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team18} alt="banner immage" />
            {/* //18 */}
            <h3>ნატუკა ხოფერია </h3>
            <p>ოფისის მენეჯერი</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team5} alt="banner immage" />
            {/* //5 */}
            <h3>გიორგი ჯაფარიძე </h3>
            <p>მთავარი ბუღალტერი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team12} alt="banner immage" />
            {/* //12 */}
            <h3>ირაკლი ჭრიკაშვილი</h3>
            <p>მთავარი იურისტი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team11} alt="banner immage" />
            {/* //11 */}
            <h3>ირაკლი იობაშვილი</h3>
            <p>ლოჯისტიკის მენეჯერი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team15} alt="banner immage" />
            {/* //15 */}
            <h3>ლევან კანდელაკი </h3>
            <p>პროექტის მენეჯერი</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team1} alt="banner immage" />
            {/* //1 */}
            <h3>ავთო სეფიაშვილი</h3>
            <p> პროექტის მენეჯერი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team17} alt="banner immage" />
            {/* //17 */}
            <h3>მამუკა ბარათაშილი </h3>
            <p>არქიტექტორი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team16} alt="banner immage" />
            {/* //16 */}
            <h3>ლიზა ლაზაშვილი</h3>
            <p>უმცროსი იურისტი</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team14} alt="banner immage" />
            {/* //14 */}
            <h3>ლაშა ჩიქობავა</h3>
            <p>მომარაგების მენეჯერი</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team9} alt="banner immage" />
            <h3>თორნიკე სიხარულიძე</h3>
            <p>საწყობის მენეჯერი</p>
          </Col>
        </Row>
      </Container>
        {/* <section className="pt-8 pb-20 flex flex-col items-center">
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-white text-sm mb-8 text-shadow">
              <li>
                <a href="#">{'Science >'}</a>
              </li>
              <li>
                <a href="#">{'Computing >'}</a>
              </li>
              <li>Birth web</li>
            </ol>
          </nav>
          <h1 className="text-5xl text-white text-shadow font-bold px-8 text-center">
            {t.hero}
          </h1>
          <hr className="mt-16 mb-8 w-32 border-t-2 border-white" />
          <p className="text-white text-shadow px-8">{t.description}</p>
        </section> */}
      </div>
      {/* <article className="mt-16 px-8 max-w-4xl m-auto">
        <p className="mb-8">{t.p1}</p>
        <Image
          alt="Screenshot"
          src="/screenshot.png"
          width={1440}
          height={870}
        />
        <p className="my-8">{t.p2}</p>
        <p className="mb-16">{t.p3}</p>
      </article> */}
      {showBanner && (
        <div className="flex flex-col items-center pt-4 bg-gray-800 text-white fixed bottom-0 w-full bg-opacity-80 p-4 text-center">
          <p>{t.cookies}</p>
          <button
            onClick={() => setBanner(false)}
            className="px-4 py-2 w-40 border-2 border-white bg-gray-600 hover:bg-gray-800 transition rounded mt-4"
          >
            {t.button}
          </button>
        </div>
      )}
    </main>
  );
}
