import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Row, Container, Col, input } from "react-bootstrap";
import en from '../locales/en';
import fr from '../locales/fr';
import Link from "next/link";

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
          <Container>
            <h2 className="row-marginer mt-120 mb-60">Blog</h2>
            <Row>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__1">
                    <div className="blog-image__content">
                      {/* ar mushaobs css */}
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__2">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
            <Row>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__3">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__4">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
            <Row>
              <Link href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__5">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__6">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
          </Container>
        </div>

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
