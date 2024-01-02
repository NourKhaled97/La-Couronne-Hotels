import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import CityBlancheRoom1 from '../images/ctiy blanche room1.jpg';
import CityBlancheRoom2 from '../images/ctiy blanche room2.jpg';
import CityBlancheRoom3 from '../images/ctiy blanche room3.jpg';
import CityBlancheRoom4 from '../images/ctiy blanche room4.jpg';
import LaCouronneRoom1 from '../images/la couronne room1.jpg';
import LaCouronneRoom2 from '../images/la couronne room2.jpg';
import LaCouronneRoom3 from '../images/la couronne room3.jpg';
import LaCouronneRoom4 from '../images/la couronne recepetion1.jpg';
import LaCouronneSuitesRoom1 from '../images/la couronne suites room1.jpg';
import LaCouronneSuitesRoom2 from '../images/la couronne suites room2.jpg';
import LaCouronneSuitesRoom3 from '../images/la couronne suites room3.jpg';
import LaCouronneSuitesRoom4 from '../images/la couronne suites pool1.jpg';
import LazyImage from '../components/LazyImage';

const Rooms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* titles, section 1 */}
      <div className='section-3 rooms-titles-image'>
        <h1 className='services-title'>
          <strong>{t('rooms-page.title')}</strong>
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

      {/* show the rooms */}
      <div className='rooms-hotels'>
        <div id='lacouronnehotel' className='w-100 rooms-row'>
          <Row className='hotel-rooms'>
            <Col className='col-md-5 col-12 d-flex align-items-center'>
              <div className='m-4'>
                <h1 className='mt-4 mb-4'>
                  <strong>
                    <i>La Couronne</i>
                  </strong>
                </h1>
                <div className='mt-4 mb-4 d-flex'>
                  <i className='fa-solid fa-location-dot fa-2x footer-icon'></i>
                  <h4 className='pt-1'>
                    <i>{t('rooms-page.location1')}</i>
                  </h4>
                </div>

                <h5 className='mt-4 '>
                  <i>{t('rooms-page.description1')}</i>
                </h5>
              </div>
            </Col>
            <Col className='col-md-7 col-12'>
              <div
                id='carouselExampleAutoplaying1'
                className='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <LazyImage
                      src={LaCouronneRoom1}
                      className='d-block w-100'
                      alt={'LaCouronneRoom1'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={LaCouronneRoom2}
                      className='d-block w-100'
                      alt={'LaCouronneRoom2'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={LaCouronneRoom3}
                      className='d-block w-100'
                      alt={'LaCouronneRoom3'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={LaCouronneRoom4}
                      className='d-block w-100'
                      alt={'LaCouronneRoom4'}
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleAutoplaying1'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleAutoplaying1'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>

        <div id='cityblanchehotel' className='w-100 rooms-row'>
          <Row className='hotel-rooms'>
            <Col className='col-12 d-flex d-md-none'>
              <div className='m-4'>
                <h1 className='mt-4 mb-4'>
                  <strong>
                    <i>City Blanche</i>
                  </strong>
                </h1>
                <div className='mt-4 mb-4 d-flex'>
                  <i className='fa-solid fa-location-dot fa-2x footer-icon'></i>
                  <h4 className='pt-1'>
                    <i>{t('rooms-page.location2')}</i>
                  </h4>
                </div>

                <h5 className='mt-4 '>
                  <i>{t('rooms-page.description2')}</i>
                </h5>
              </div>
            </Col>
            <Col className='col-md-7 col-12'>
              <div
                id='carouselExampleAutoplaying2'
                className='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <LazyImage
                      src={CityBlancheRoom1}
                      className='d-block w-100'
                      alt={'CityBlancheRoom1'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={CityBlancheRoom2}
                      className='d-block w-100'
                      alt={'CityBlancheRoom2'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={CityBlancheRoom3}
                      className='d-block w-100'
                      alt={'CityBlancheRoom3'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={CityBlancheRoom4}
                      className='d-block w-100'
                      alt={'CityBlancheRoom4'}
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleAutoplaying2'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleAutoplaying2'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </Col>
            <Col className='col-md-5 col-12 d-none d-md-flex align-items-center'>
              <div className='m-4'>
                <h1 className='mt-4 mb-4'>
                  <strong>
                    <i>City Blanche</i>
                  </strong>
                </h1>
                <div className='mt-4 mb-4 d-flex'>
                  <i className='fa-solid fa-location-dot fa-2x footer-icon'></i>
                  <h4 className='pt-1'>
                    <i>{t('rooms-page.location2')}</i>
                  </h4>
                </div>

                <h5 className='mt-4 '>
                  <i>{t('rooms-page.description2')}</i>
                </h5>
              </div>
            </Col>
          </Row>
        </div>

        <div id='lacouronnesuitshotel' className='w-100 rooms-row'>
          <Row className='hotel-rooms'>
            <Col className='col-md-5 col-12 d-flex align-items-center'>
              <div className='m-4'>
                <h1 className='mt-4 mb-4'>
                  <strong>
                    <i>La Couronne Suites</i>
                  </strong>
                </h1>
                <div className='mt-4 mb-4 d-flex'>
                  <i className='fa-solid fa-location-dot fa-2x footer-icon'></i>
                  <h4 className='pt-1'>
                    <i>{t('rooms-page.location3')}</i>
                  </h4>
                </div>

                <h5 className='mt-4 '>
                  <i>{t('rooms-page.description3')}</i>
                </h5>
              </div>
            </Col>
            <Col className='col-md-7 col-12'>
              <div
                id='carouselExampleAutoplaying3'
                className='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <LazyImage
                      src={LaCouronneSuitesRoom1}
                      className='d-block w-100'
                      alt={'LaCouronneSuitesRoom1'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={LaCouronneSuitesRoom2}
                      className='d-block w-100'
                      alt={'LaCouronneSuitesRoom2'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={LaCouronneSuitesRoom3}
                      className='d-block w-100'
                      alt={'LaCouronneSuitesRoom3'}
                    />
                  </div>
                  <div className='carousel-item'>
                    <LazyImage
                      src={LaCouronneSuitesRoom4}
                      className='d-block w-100'
                      alt={'LaCouronneSuitesRoom4'}
                    />
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleAutoplaying3'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleAutoplaying3'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
