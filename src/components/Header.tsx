import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.styles.css';
import BatilocLogo from '../images/logo SCI BATILOC.png';
import BatilocLogoSmall from '../images/logo.png';
import LazyImage from './LazyImage';
import { useTranslation } from 'react-i18next';

const Language: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    setSelectedOption(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className='check-container'>
      <button
        onClick={() => changeLanguage('en')}
        className={`language-button language-button-left header-link ${
          selectedOption === 'en'
            ? 'active-header-link language-button-active'
            : ''
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`language-button language-button-right header-link ${
          selectedOption === 'fr'
            ? 'active-header-link language-button-active'
            : ''
        }`}
      >
        FR
      </button>
    </div>
  );
};

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className='navbar navbar-expand-md header-container'>
      <Row className='header-row w-100 shadow'>
        <Col className='col-1 d-block d-md-none'>
          <button
            className='navbar-toggler navbar-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fa-solid fa-bars'></i>
          </button>
        </Col>

        <Col className='header-logo col-md-2 col-1'>
          <Link to={'/'}>
            <LazyImage
              src={BatilocLogo}
              width='100'
              height='25'
              alt='BatilocLogo'
              className='d-none d-sm-block'
              // loading='lazy'
            />
            <LazyImage
              src={BatilocLogoSmall}
              width='25'
              height='25'
              alt='BatilocLogo'
              className='d-block d-sm-none'
              // loading='lazy'
            />
          </Link>
        </Col>

        <Col className='col-md-7 col-xs-2 d-none d-md-flex'>
          <div className='header-links w-100'>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? 'active-header-link header-link' : 'header-link'
              }
            >
              {t('Home')}
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive ? 'active-header-link header-link' : 'header-link'
              }
            >
              {t('About')}
            </NavLink>
            <NavLink
              to={'/rooms'}
              className={({ isActive }) =>
                isActive ? 'active-header-link header-link' : 'header-link'
              }
            >
              {t('Rooms')}
            </NavLink>
            <NavLink
              to={'/services'}
              className={({ isActive }) =>
                isActive ? 'active-header-link header-link' : 'header-link'
              }
            >
              {t('Services')}
            </NavLink>
            <NavLink
              to={'/contactus'}
              className={({ isActive }) =>
                isActive ? 'active-header-link header-link' : 'header-link'
              }
            >
              {t('Contact us')}
            </NavLink>
            <Language />
          </div>
        </Col>

        <Col className='header-button-container d-flex justify-content-end'>
          <Link
            to='https://www.booking.com/searchresults.en-gb.html?ss=La+Couronne+Suites&ssne=Bangui&ssne_untouched=Bangui&label=en-lb-booking-desktop-bkb5uxBdsjhtIB7AH3A_UAS652804039370%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-14203301782%3Alp2422%3Ali%3Adec%3Adm&aid=2336990&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=11055251&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=5dd24c02fbea016d&ac_meta=GhA1ZGQyNGMwMmZiZWEwMTZkIAAoATICZW46EkxhIENvdXJvbm5lIFN1aXRlc0AASgBQAA%3D%3D&checkin=2024-01-15&checkout=2024-01-25&group_adults=2&no_rooms=1&group_children=0'
            target='_blank'
            className='header-button'
          >
            {t('Book now')}
          </Link>
        </Col>
      </Row>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div className='header-links-menu navbar-nav shadow'>
          <Row className='d-flex d-md-none'>
            <Col className='col-sm-4 col-6'>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive ? 'active-header-link header-link' : 'header-link'
                }
              >
                {t('Home')}
              </NavLink>
            </Col>
            <Col className='col-sm-4 col-6'>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  isActive ? 'active-header-link header-link' : 'header-link'
                }
              >
                {t('About')}
              </NavLink>
            </Col>
            <Col className='col-sm-4 col-6'>
              <NavLink
                to={'/rooms'}
                className={({ isActive }) =>
                  isActive ? 'active-header-link header-link' : 'header-link'
                }
              >
                {t('Rooms')}
              </NavLink>
            </Col>
            <Col className='col-sm-4 col-6'>
              <NavLink
                to={'/services'}
                className={({ isActive }) =>
                  isActive ? 'active-header-link header-link' : 'header-link'
                }
              >
                {t('Services')}
              </NavLink>
            </Col>
            <Col className='col-sm-4 col-6'>
              <NavLink
                to={'/contactus'}
                className={({ isActive }) =>
                  isActive ? 'active-header-link header-link' : 'header-link'
                }
              >
                {t('Contact us')}
              </NavLink>
            </Col>
            <Col className='col-sm-4 col-6'>
              <Language />
            </Col>
          </Row>
        </div>
      </div>
    </nav>
  );
};

export default Header;
