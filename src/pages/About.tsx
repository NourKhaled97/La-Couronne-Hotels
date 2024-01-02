import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* titles, section 1 */}
      <div className='section-3 section-3-image'>
        <h1 className='services-title'>
          <strong>{t('about-page.title')}</strong>
        </h1>
        <Row className='experience-list'>
          <Col className='col-lg-3 col-md-4 col-sm-6 col-12 col-li'>
            <a
              href='#lacouronnehotel'
              className='service-li experience-li about-li'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#lacouronnehotel')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <p className='about-name'>La Couronne Hotel</p>
            </a>
          </Col>
          <Col className='col-lg-3 col-md-4 col-sm-6 col-12 col-li'>
            <a
              href='#cityblanchehotel'
              className='experience-li service-li about-li'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#cityblanchehotel')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <p className='about-name'>City Blanche Hotel</p>
            </a>
          </Col>
          <Col className='col-lg-3 col-md-4 col-sm-6 col-12 col-li'>
            <a
              href='#lacouronnesuitshotel'
              className=' service-li experience-li about-li'
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#lacouronnesuitshotel')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              }}
            >
              <p className='about-name'>La Couronne Suits Hotel</p>
            </a>
          </Col>
        </Row>
      </div>

      {/* show the hotels */}
      <div>
        <div id='lacouronnehotel' className='lacouronnehotel w-100 hotels-card'>
          <div className='card hotel-card shadow'>
            <div className='card-body'>
              <h1 className='card-title'>
                <strong>La Couronne Hotel</strong>
              </h1>
              <p className='card-text'>{t('about-page.subtitle1')}</p>
              <div className='card-button'>
                <Link
                  to='/rooms#lacouronnehotel'
                  className='card-link see-more'
                >
                  {t('see more')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id='cityblanchehotel'
          className='cityblanchehotel w-100 hotels-card'
        >
          <div className='card hotel-card shadow'>
            <div className='card-body'>
              <h1 className='card-title'>
                <strong>City Blanche Hotel</strong>
              </h1>
              <p className='card-text'>{t('about-page.subtitle2')}</p>
              <div className='card-button'>
                <Link
                  to='/rooms#cityblanchehotel'
                  className='card-link see-more'
                >
                  {t('see more')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id='lacouronnesuitshotel'
          className='lacouronnesuitshotel w-100 hotels-card'
        >
          <div className='card hotel-card shadow'>
            <div className='card-body'>
              <h1 className='card-title'>
                <strong>La Couronne Suits</strong>
              </h1>
              <p className='card-text'>{t('about-page.subtitle3')}</p>
              <div className='card-button'>
                <Link
                  to='/rooms#lacouronnesuitshotel'
                  className='card-link see-more'
                >
                  {t('see more')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
