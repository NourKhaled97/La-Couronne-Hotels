import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Footer.styles.css';
import { Tooltip } from 'react-tooltip';
import LazyImage from './LazyImage';
import BatilocLogo from '../images/logo SCI BATILOC.png';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Row className='footer-container'>
      <Col className='col-md-3 col-sm-6 col-12 footer-col'>
        <div>
          <LazyImage src={BatilocLogo} width={'150'} alt={'BatilocLogo'} />
          <p>{t('footer-text')}</p>
        </div>
      </Col>

      <Col className='col-sm-6 col-12 d-flex d-md-none footer-col footer-contact-link'>
        <Link
          to='mailto:Rent236@hotmail.com'
          className='footer-link'
          data-tooltip-id='email-tooltip'
          data-tooltip-content={'Contact us via Email'}
        >
          <i className='fa-regular fa-envelope fa-2x footer-icon'></i>
        </Link>
        <Tooltip id='email-tooltip' />

        <Link
          to='https://wa.me/+23670020203'
          target='_blank'
          className='footer-link'
          data-tooltip-id='whatsapp-tooltip'
          data-tooltip-content={'Contact us via Whatsapp'}
        >
          <i className='fa-brands fa-whatsapp fa-2x footer-icon whatsapp-image'></i>
        </Link>
        <Tooltip id='whatsapp-tooltip' />
      </Col>

      <Col className='col-md-4 col-sm-12 col-12  footer-col footer-contact-link'>
        <Row className='d-flex'>
          <Col className='col-sm-4 col-6 col-md-6'>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? 'active-footer-link footer-link' : 'footer-link'
              }
            >
              {t('Home')}
            </NavLink>
          </Col>
          <Col className='col-sm-4 col-6 col-md-6'>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive ? 'active-footer-link footer-link' : 'footer-link'
              }
            >
              {t('About')}
            </NavLink>
          </Col>
          <Col className='col-sm-4 col-6 col-md-6'>
            <NavLink
              to={'/rooms'}
              className={({ isActive }) =>
                isActive ? 'active-footer-link footer-link' : 'footer-link'
              }
            >
              {t('Rooms')}
            </NavLink>
          </Col>
          <Col className='col-sm-4 col-6 col-md-6'>
            <NavLink
              to={'/services'}
              className={({ isActive }) =>
                isActive ? 'active-footer-link footer-link' : 'footer-link'
              }
            >
              {t('Services')}
            </NavLink>
          </Col>
          <Col className='col-sm-4 col-6 col-md-6'>
            <NavLink
              to={'/contactus'}
              className={({ isActive }) =>
                isActive ? 'active-footer-link footer-link' : 'footer-link'
              }
            >
              {t('Contact us')}
            </NavLink>
          </Col>
        </Row>
      </Col>

      <Col className='col-md-5 d-none d-md-flex footer-col'>
        <Link
          to='mailto:Rent236@hotmail.com'
          className='footer-link'
          data-tooltip-id='email-tooltip'
          data-tooltip-content={'Contact us via Email'}
        >
          <i className='fa-regular fa-envelope fa-2x footer-icon'></i>
        </Link>
        <Tooltip id='email-tooltip' />

        <Link
          to='https://wa.me/+23670020203'
          target='_blank'
          className='footer-link'
          data-tooltip-id='whatsapp-tooltip'
          data-tooltip-content={'Contact us via Whatsapp'}
        >
          <i className='fa-brands fa-whatsapp fa-2x footer-icon whatsapp-image'></i>
        </Link>
        <Tooltip id='whatsapp-tooltip' />
      </Col>
    </Row>
  );
};

export default Footer;
