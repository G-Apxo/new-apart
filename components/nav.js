import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from "../assets/logo.svg"
import en from '../locales/enHeader';
import fr from '../locales/fr';
import { Container, Form } from 'react-bootstrap';




export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <Container>
      <nav class="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand">
              <Image src={Logo} alt="Picture of the author" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/About"> {t.about} <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/investing">{t.investing}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/projects">{t.projects}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  href="/Blog">{t.blog}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  href="/Contact">{t.contact}</a>
                </li>
                <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="form-select lang__drop"
            >
              <option className="text-black" value="en">EN</option>
              <option className="text-black" value="ru">RU</option>
            </select>
                <li>
                  <Form>
                  <Form.Check  onClick={myFunction}
                    type="switch"
                    id="custom-switch"
                  />
                </Form>
              </li>
              </ul>
            </div>
          </nav>
      {/* <nav className='navbar navbar-expand-lg navbar-light'>
        <ul className="flex navbar-nav">
          <li>
            <Link href="/">
            <a className="navbar-brand">
              <Image src={Logo} alt="Picture of the author" />
            </a>
            </Link>
          </li>
          <ul className="flex items-center justify-between space-x-8">
            <li>
              <a
                href="/About"
                className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
              >
                {t.about}
              </a>
            </li>
            <li>
              <a
                href="/Investing"
                className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
              >
                {t.investing}
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
              >
                {t.projects}
              </a>
            </li>
            <li>
              <a
                href="/Blog"
                className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
              >
                {t.blog}
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
              >
                {t.contact}
              </a>
            </li>
            <li>
            <Form>
                  <Form.Check  onClick={myFunction}
                    type="switch"
                    id="custom-switch"
                  />
                </Form>
            </li>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
            >
              <option className="text-black" value="en">EN</option>
              <option className="text-black" value="ru">RU</option>
            </select>
          </ul>
        </ul>
      </nav> */}
    </Container>
   
  );
}
